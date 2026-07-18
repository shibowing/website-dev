(function () {
  const table = document.getElementById('imu-data-table');
  if (!table) return;

  const endpoint = table.getAttribute('data-endpoint');
  const tbody = table.querySelector('tbody');
  const filterRow = document.getElementById('imu-filter-row');
  const countNode = document.getElementById('imu-row-count');

  const columns = [
    'platform', 'split', 'traj_id', 'npz_relpath', 'inferred_source',
    'n_samples', 'duration_s',
    'file_size_bytes'
  ];

  const nonFilterable = new Set([
    'traj_id',
    'npz_relpath',
    'n_samples',
    'duration_s',
    'file_size_bytes'
  ]);

  let rows = [];
  let sortBy = null; // null = default multi-key sort (platform asc, traj_id asc)
  let sortAsc = true;

  function platformClass(v) {
    const p = String(v || '').toLowerCase();
    if (p === 'car') return 'car';
    if (p === 'drone') return 'drone';
    if (p === 'quadruped' || p === 'dog') return 'quadruped';
    if (p === 'handheld' || p === 'human') return 'handheld';
    return 'unknown';
  }

  function splitClass(v) {
    const s = String(v || '').toLowerCase();
    if (s === 'train') return 'train';
    if (s === 'val') return 'val';
    if (s === 'test') return 'test';
    return 'unknown';
  }

  function fmtValue(col, v) {
    if (v === null || v === undefined) return '';
    if (col === 'platform') {
      const p = String(v).toLowerCase();
      if (p === 'dog') return 'quadruped';
      if (p === 'human') return 'handheld';
      return String(v);
    }
    if (col === 'file_size_bytes') return (Number(v) / (1024 * 1024)).toFixed(2) + ' MiB';
    if (col === 'duration_s') return Number(v).toFixed(1) + ' s';
    if (col === 'n_samples') return Number(v).toLocaleString('en-US');
    if (typeof v === 'boolean') return v ? 'true' : 'false';
    return String(v);
  }

  function makeFilters() {
    filterRow.innerHTML = '';
    columns.forEach((col) => {
      const th = document.createElement('th');
      if (nonFilterable.has(col)) {
        th.textContent = '';
        filterRow.appendChild(th);
        return;
      }
      const sel = document.createElement('select');
      sel.dataset.col = col;
      sel.addEventListener('change', render);
      th.appendChild(sel);
      filterRow.appendChild(th);
    });
  }

  function populateFilterOptions() {
    filterRow.querySelectorAll('select').forEach((sel) => {
      const col = sel.dataset.col;
      const vals = Array.from(new Set(rows.map((r) => String(r[col])))).sort((a, b) => a.localeCompare(b));
      sel.setAttribute('aria-label', `Filter by ${col.replace(/_/g, ' ')}`);
      sel.innerHTML = '<option value="">All</option>' + vals.map((v) => `<option value="${v.replace(/"/g, '&quot;')}">${v}</option>`).join('');
    });
  }

  function getFilters() {
    const filters = {};
    filterRow.querySelectorAll('select').forEach((sel) => {
      if (sel.value !== '') filters[sel.dataset.col] = sel.value;
    });
    return filters;
  }

  function applyFilters(data) {
    const filters = getFilters();
    return data.filter((r) => {
      for (const [k, q] of Object.entries(filters)) {
        if (String(r[k]) !== String(q)) return false;
      }
      return true;
    });
  }

  function cmpVal(av, bv) {
    const an = Number(av), bn = Number(bv);
    if (!Number.isNaN(an) && !Number.isNaN(bn) && av !== '' && bv !== '') return an - bn;
    return String(av ?? '').localeCompare(String(bv ?? ''), undefined, { numeric: true, sensitivity: 'base' });
  }

  function applySort(data) {
    return data.slice().sort((a, b) => {
      if (!sortBy) {
        // default: platform A→Z, then split A→Z (train before val), then traj_id numerically
        return cmpVal(a.platform, b.platform) || cmpVal(a.split, b.split) || cmpVal(a.traj_id, b.traj_id);
      }
      const cmp = cmpVal(a[sortBy], b[sortBy]);
      return sortAsc ? cmp : -cmp;
    });
  }

  function render() {
    const filtered = applyFilters(rows);
    const sorted = applySort(filtered);
    const rowTint = {
      car: '#fff7ed',
      drone: '#e8f4ff',
      quadruped: '#f0fdf4',
      handheld: '#faf5ff',
      unknown: '#ffffff'
    };
    const html = sorted.map((r) => {
      const pClass = platformClass(r.platform);
      const sClass = splitClass(r.split);
      const bg = rowTint[pClass] || '#fff';
      const tds = columns.map((col) => {
        if (col === 'platform') {
          return `<td><span class="imu-platform-badge imu-p-${pClass}">${fmtValue(col, r[col])}</span></td>`;
        }
        if (col === 'split') {
          return `<td style="background:${bg}"><span class="imu-split-badge imu-s-${sClass}">${fmtValue(col, r[col])}</span></td>`;
        }
        if (col === 'npz_relpath') {
          const q = new URLSearchParams({
            platform: String(r.platform ?? ''),
            split: String(r.split ?? ''),
            traj_id: String(r.traj_id ?? '')
          });
          return `<td style="background:${bg}"><a href="/imuchallenge/data/preview/?${q.toString()}">${fmtValue(col, r[col])}</a></td>`;
        }
        return `<td style="background:${bg}">${fmtValue(col, r[col])}</td>`;
      }).join('');
      return `<tr class="imu-row-${pClass}">${tds}</tr>`;
    }).join('');
    tbody.innerHTML = html;
    countNode.textContent = `${sorted.length} / ${rows.length} trajectories shown`;
  }

  function initSortHeaders() {
    table.querySelectorAll('thead tr:first-child th').forEach((th) => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (!col) return;
        if (sortBy === col) sortAsc = !sortAsc;
        else { sortBy = col || null; sortAsc = true; }
        render();
      });
    });
  }

  makeFilters();
  initSortHeaders();

  fetch(endpoint)
    .then((r) => r.json())
    .then((data) => {
      rows = data;
      populateFilterOptions();
      render();
    })
    .catch((e) => {
      countNode.textContent = 'Failed to load metadata: ' + e;
    });
})();
