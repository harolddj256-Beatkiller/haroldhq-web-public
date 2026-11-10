// Radio Studio licence: the buy and paid pages. Prices come from the HaroldHQ licence service.
(()=>{
const API='https://haroldhq-ai-relay.onrender.com/v1/billing',$=s=>document.querySelector(s),q=new URLSearchParams(location.search);
const money=n=>'US$'+n.toLocaleString('en-US',{maximumFractionDigits:0});
const say=(el,t,bad)=>{el.textContent=t;el.classList.toggle('bad',!!bad)};
async function api(path,body){const r=await fetch(API+path,body?{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}:{});const j=await r.json().catch(()=>({}));if(!r.ok)throw Error(j?.error?.message||'HaroldHQ could not be reached. Try again.');return j}
if($('#buy')){
 let plan=null;const machine=(q.get('machine')||'').toLowerCase();if(/^[a-f0-9]{32}$/.test(machine))$('#machine').value=machine;
 api('/plans').then(d=>{plan=d.plans[0];const m=plan.prices.monthly,y=plan.prices.yearly;
  // What a year costs paid monthly, and what paying yearly saves.
  const save=12*m.USD-y.USD,pct=Math.round(100*save/(12*m.USD));
  $('#plan').innerHTML='';const h=document.createElement('h2');h.textContent=plan.name;const ul=document.createElement('ul');for(const f of plan.features){const li=document.createElement('li');li.textContent=f;ul.append(li)}$('#plan').append(h,ul);
  $('#yearly-price').textContent=money(y.USD)+' a year';$('#monthly-price').textContent=money(m.USD)+' a month';
  $('#saving').textContent=save>0?'Save '+money(save)+' ('+pct+'%) compared with 12 monthly payments of '+money(m.USD):'';
  if(!d.open){for(const b of document.querySelectorAll('.buy-pay button'))b.disabled=true;say($('#buy-message'),'Online payments open soon. Contact HaroldHQ to buy a licence.')}
 }).catch(e=>say($('#plan'),e.message,true));
 $('#buy').addEventListener('submit',async e=>{e.preventDefault();const msg=$('#buy-message');
  const body={customer:$('#customer').value,email:$('#email').value,machineId:$('#machine').value.trim().toLowerCase(),period:$('#buy').period.value,plan:plan?.id};
  for(const b of document.querySelectorAll('.buy-pay button'))b.disabled=true;say(msg,'Opening the secure payment page…');
  try{const r=await api('/checkout',body);location.href=r.url}catch(err){say(msg,err.message,true);for(const b of document.querySelectorAll('.buy-pay button'))b.disabled=false}});
}
if($('#paid')){
 const ref=q.get('ref')||'',box=$('#paid'),title=$('#paid-title');
 const show=s=>{if(s.status==='paid'){title.textContent='Paid. Thank you.';box.innerHTML='';const p=document.createElement('p');p.textContent=s.customer+': '+s.plan+' is active until '+new Date(s.expiresAt).toLocaleDateString(undefined,{day:'numeric',month:'long',year:'numeric'})+'.';
   const n=document.createElement('p');n.textContent='Radio Studio picks the licence up by itself. To do it now: in Radio Studio open Settings → Licence & Updates and press “I’ve paid – get my licence”.';box.append(p,n);return true}
  if(s.status==='pending'){title.textContent='Waiting for the payment to be confirmed…';return false}title.textContent='The payment did not go through';box.textContent='Nothing was charged for a licence. Go back and try again.';return true};
 (async()=>{try{if(q.get('status')==='cancelled'){title.textContent='Payment cancelled';box.textContent='Nothing was charged.';return}
  let s=await api('/payment?ref='+encodeURIComponent(ref));
  for(let i=0;!show(s)&&i<40;i++){await new Promise(r=>setTimeout(r,3000));s=await api('/payment?ref='+encodeURIComponent(ref))}
  if(s.status==='pending')box.textContent='Your payment is still being confirmed. You can close this page: the licence reaches Radio Studio by itself once it is confirmed.';
 }catch(e){title.textContent='Payment';say(box,e.message,true)}})();
}
})();
