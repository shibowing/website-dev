import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client@2.3.1/dist/index.js";

(function(){
  const root=document.getElementById('imu-preview-root');
  if(!root) return;
  const params=new URLSearchParams(window.location.search);
  const platform=params.get('platform')||'';
  const split=params.get('split')||'';
  const traj=params.get('traj_id')||'';

  const SPACE_ID='Tartan-IMU/internal-leaderboard';

  function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}

  const BEST_MODEL_URL='https://huggingface.co/Tartan-IMU/TartanIMU/tree/main';

  function init(){
    fetch('/assets/data/imuchallenge_metadata.json')
      .then(r=>r.json())
      .then(rows=>{
        const item=rows.find(x=>String(x.platform)===platform && String(x.split)===split && String(x.traj_id)===traj)
          || rows.find(x=>String(x.traj_id)===traj);
        if(!item){
          root.innerHTML='<p>Trajectory not found. Please return to <a href="/imuchallenge/data/explorer/">Data Explorer</a>.</p>';
          return;
        }
        const modelNote=`<div class="imu-note" style="margin:0.5rem 0 1rem 0;">
              Prediction shown is from the <strong>TartanIMU team's best cross-platform checkpoint</strong> — <a href="${BEST_MODEL_URL}" target="_blank" rel="noopener">view on Hugging Face &rarr;</a>
            </div>`;
        const trainNote=item.split==='train'
          ?`<div style="margin:0.5rem 0 1rem 0;padding:0.6rem 0.9rem;border-left:3px solid #f59e0b;background:#fefce8;color:#92400e;font-size:0.85rem;border-radius:0 6px 6px 0;">
              <strong>Note:</strong> This is a <strong>training trajectory</strong> — the reference model was trained on this data. Performance here is <em>not</em> indicative of generalisation to unseen sequences. See the <strong>val</strong> split for held-out results.
            </div>`
          :'';
        root.innerHTML=`
          <h2 style="margin-top:0;">${esc(item.traj_id)}</h2>
          <div id="imu-preview-thumb" style="width:100%;max-width:980px;aspect-ratio:16/9;border-radius:12px;border:1px solid #d8ebf9;margin:0.5rem 0 1rem 0;background:#f2f9ff;">
            <div class="imu-preview-loading">
              <div class="imu-spinner"></div>
              <div class="imu-preview-loading-text">Generating live preview…</div>
              <div class="imu-progress"><div class="imu-progress-fill" id="imu-progress-fill"></div></div>
            </div>
          </div>
          <div class="imu-note" style="margin:0.5rem 0 1rem 0;font-size:0.85rem;">
            <strong>RMSE</strong> (m/s): error between predicted and true velocity across every 1 s window. <strong>ATE</strong> (m): average position error over consecutive ~5 m stretches.
          </div>
          ${modelNote}
          ${trainNote}
          <div class="imu-metrics" style="margin-top:0;">
            <div class="imu-metric"><span class="value">${esc(item.platform==='dog'?'quadruped':(item.platform==='human'?'handheld':item.platform))}</span><span class="label">Platform</span></div>
            <div class="imu-metric"><span class="value">${esc(item.split)}</span><span class="label">Split</span></div>
            <div class="imu-metric"><span class="value">${Number(item.duration_s).toFixed(3)} s</span><span class="label">Duration</span></div>
            <div class="imu-metric"><span class="value">${esc(item.sample_rate_hz)} Hz</span><span class="label">Sample Rate</span></div>
          </div>
          <div class="imu-card"><strong>Source:</strong> ${esc(item.inferred_source)}<br><strong>Samples:</strong> ${esc(item.n_samples)}<br><strong>Relative Path:</strong> <code>${esc(item.npz_relpath)}</code><br><strong>File Size:</strong> ${(Number(item.file_size_bytes)/(1024*1024)).toFixed(2)} MiB</div>
          <p><a href="/imuchallenge/data/explorer/">Back to Data Explorer</a></p>
        `;
        loadLivePreview(item);
      })
      .catch(err=>{
        root.innerHTML='Failed to load metadata: '+esc(err);
      });

    async function loadLivePreview(item){
      const box=document.getElementById('imu-preview-thumb');
      if(!box) return;
      const fill=document.getElementById('imu-progress-fill');
      // Approximate progress — inference typically resolves in ~1.5s; ease toward 92%
      // and hold there so the bar never appears to finish before the response lands.
      if(fill) requestAnimationFrame(()=>{ fill.style.width='92%'; });
      try{
        const client=await Client.connect(SPACE_ID);
        const trajStem=`${item.platform}_${item.split}_${item.traj_id}`;
        const job=client.submit('/request_preview',{split:item.split,platform:item.platform,traj_id:trajStem});
        let final=null;
        for await (const msg of job){
          if(msg.type==='data') final=msg.data;
          else if(msg.type==='status' && msg.stage==='error') throw new Error(msg.message||'Preview request failed');
        }
        if(!final) throw new Error('No response from model server');
        if(!final[2]) throw new Error(final[1]||'Preview failed');
        const url=final[2].url;
        if(!url) throw new Error('No image returned');
        if(fill){
          fill.style.transition='width 0.25s ease-out';
          fill.style.width='100%';
          await new Promise(r=>setTimeout(r,220));
        }
        const img=document.createElement('img');
        img.id='imu-preview-thumb';
        img.src=url;
        img.alt='trajectory preview';
        img.style.cssText='width:100%;max-width:980px;border-radius:12px;border:1px solid #d8ebf9;margin:0.5rem 0 1rem 0;';
        box.replaceWith(img);
      }catch(err){
        box.textContent='Failed to load live preview: '+(err&&err.message?err.message:err);
      }
    }
  }

  init();
  // Back/forward navigation can restore this page from bfcache without re-running
  // the script, leaving the progress bar frozen mid-animation — force a fresh run.
  window.addEventListener('pageshow', function(e){
    if(e.persisted) init();
  });
})();
