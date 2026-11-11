"use strict";
/* Order tab: product grid, cart and checkout. Needs store.js and script.js (T, lang, CONFIG, toast, copyText, waHref). */
(function(){
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
 const J=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
 const W=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
 const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const shop=$("#shop"),CART="hydro:cart",CUST="hydro:customer";
 let items=[],cart=J(CART,{}),cat="all",q="",opener=null;
 const cur=()=>CONFIG.currency||"OMR",nm=p=>(lang==="ar"&&p.nameAr)||p.name,ds=p=>(lang==="ar"&&p.descAr)||p.desc||"";
 const money=n=>HydroStore.money(n,cur()),avail=p=>p.stock==null?Infinity:p.stock;
 const price=p=>p.price==null?T[lang].on_request:money(p.price);
 const lines=()=>Object.keys(cart).map(id=>{const p=items.find(x=>x.id===id);return p?{p,qty:Math.min(cart[id],avail(p))}:null}).filter(x=>x&&x.qty>0);
 const count=()=>lines().reduce((a,l)=>a+l.qty,0);
 function totals(){let sum=0,open=false;lines().forEach(l=>{l.p.price==null?open=true:sum+=l.p.price*l.qty});return {sum,open}}
 const save=()=>W(CART,cart);

 function renderGrid(){const t=T[lang],ql=q.toLowerCase(),cats=[...new Set(items.map(p=>p.category).filter(Boolean))];
  $("#psearch").hidden=items.length<=6;
  $("#pcats").innerHTML=cats.length>1?[["all",t.f_all],...cats.map(c=>[c,c])].map(([k,v])=>`<button type="button" class="btn sm" data-cat="${esc(k)}" aria-pressed="${k===cat}">${esc(v)}</button>`).join(""):"";
  const list=items.filter(p=>(cat==="all"||p.category===cat)&&(!ql||(nm(p)+" "+ds(p)+" "+p.category).toLowerCase().includes(ql)));
  $("#pgrid").innerHTML=list.length?list.map(p=>{const n=cart[p.id]||0,out=avail(p)<=0,low=p.stock!=null&&p.stock>0&&p.stock<=5;
   const img=p.image?`<img src="${esc(p.image)}" alt="" loading="lazy">`:`<svg aria-hidden="true"><use href="#ic-leaf"/></svg>`;
   const ctl=out?`<span class="tag">${t.out}</span>`:n?`<span class="qty"><button type="button" data-a="dec" data-id="${esc(p.id)}" aria-label="${t.qty_dec}">-</button><output>${n}</output><button type="button" data-a="inc" data-id="${esc(p.id)}" aria-label="${t.qty_inc}">+</button></span>`
    :`<button type="button" class="btn sm p" data-a="add" data-id="${esc(p.id)}">${t.add}</button>`;
   return `<article class="pc"><div class="im">${img}</div><div class="bd"><h3>${esc(nm(p))}</h3><p class="ds">${esc(ds(p))}</p>${low?`<span class="tag num">${p.stock} ${t.left}</span>`:""}<div class="ft"><span class="pr"><bdi>${esc(price(p))}</bdi></span>${ctl}</div></div></article>`}).join(""):`<p class="empty">${t.no_products}</p>`}

 function renderCart(){const t=T[lang],ls=lines(),{sum,open}=totals();
  $("#cartlines").innerHTML=ls.length?ls.map(({p,qty})=>`<div class="cl"><div><b>${esc(nm(p))}</b><div class="sub2 num">${qty} x <bdi>${esc(price(p))}</bdi></div></div><b class="num"><bdi>${p.price==null?"":money(p.price*qty)}</bdi></b>
   <span class="qty"><button type="button" data-a="dec" data-id="${esc(p.id)}" aria-label="${t.qty_dec}">-</button><output>${qty}</output><button type="button" data-a="inc" data-id="${esc(p.id)}" aria-label="${t.qty_inc}">+</button></span>
   <button type="button" class="btn sm" data-a="del" data-id="${esc(p.id)}">${t.remove}</button></div>`).join(""):`<p class="empty">${t.empty_cart}</p>`;
  const totalText=!ls.length?money(0):open&&sum===0?t.on_request:money(sum);
  $("#ctotal").innerHTML=`<bdi>${esc(totalText)}</bdi>`;const cn=$("#cnote");cn.hidden=!(open&&sum>0);cn.textContent=t.priced_later;
  const n=count();$("#ocount").hidden=!n;$("#ocount").textContent=n;
  $("#barn").textContent=n+" "+t.items_n;$("#bart").innerHTML=`<bdi>${esc(totalText)}</bdi>`}
 const renderAll=()=>{renderGrid();renderCart()};
 async function load(){try{items=await HydroStore.products()}catch(e){items=[]}
  Object.keys(cart).forEach(id=>{if(!items.some(p=>p.id===id))delete cart[id]});save();renderAll()}

 function change(id,d){const p=items.find(x=>x.id===id);if(!p)return;const n=Math.max(0,Math.min(avail(p),(cart[id]||0)+d,99));n?cart[id]=n:delete cart[id];save();renderAll();
  const f=shop.querySelector(`[data-id="${CSS.escape(id)}"][data-a="${d>0?"inc":"dec"}"]`)||shop.querySelector(`[data-id="${CSS.escape(id)}"]`);if(f)f.focus()}
 shop.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(b){const a=b.dataset.a,id=b.dataset.id;
   if(a==="add"||a==="inc")change(id,1);else if(a==="dec")change(id,-1);else if(a==="del"){delete cart[id];save();renderAll()}return}
  const c=e.target.closest("[data-cat]");if(c){cat=c.dataset.cat;renderGrid();$("#pcats [aria-pressed=true]").focus()}});
 $("#psearch").addEventListener("input",e=>{q=e.target.value.trim();renderGrid()});
 $("#review").onclick=()=>$("#shopside").scrollIntoView({behavior:"smooth",block:"start"});
 $("#shopquote").onclick=e=>{e.preventDefault();closeShop();location.hash="#contact"};

 /* open and close */
 function resetPane(){$("#orderpane").hidden=false;$("#odone").hidden=true;$("#oerr").hidden=true;
  const c=J(CUST,null);if(c){$("#on").value=c.name||"";$("#op").value=c.phone||"";$("#oe").value=c.email||"";$("#oc").value=c.city||"";$("#oa").value=c.address||""}}
 window.openShop=function(from){opener=from||document.activeElement;shop.hidden=false;document.body.classList.add("lock");$("#orderbtn").setAttribute("aria-pressed","true");
  if(location.hash!=="#order")history.replaceState(null,"","#order");resetPane();load();shop.scrollTop=0;$("#shopx").focus()};
 function closeShop(){if(shop.hidden)return;shop.hidden=true;document.body.classList.remove("lock");$("#orderbtn").setAttribute("aria-pressed","false");
  if(location.hash==="#order")history.replaceState(null,"",location.pathname+location.search);if(opener&&opener.focus&&document.contains(opener))opener.focus()}
 $("#orderbtn").onclick=e=>openShop(e.currentTarget);$("#heroorder").onclick=e=>{e.preventDefault();openShop(e.currentTarget)};$("#shopx").onclick=closeShop;$("#okeep").onclick=()=>{resetPane();$("#shopx").focus();renderAll()};
 shop.addEventListener("keydown",e=>{if(e.key==="Escape"){e.stopPropagation();closeShop();return}
  if(e.key==="Tab"){const f=$$("#shop button:not([disabled]),#shop input:not([hidden]),#shop textarea,#shop a[href],#shop select").filter(x=>x.offsetParent!==null);
   if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
 addEventListener("hashchange",()=>{if(location.hash==="#order"&&shop.hidden)openShop()});

 /* checkout */
 function validate(){const t=T[lang];let first=null;
  [["on","e_on",v=>v.length>0,"e_name"],["op","e_op",v=>v.replace(/\D/g,"").length>=6,"e_phone"],["oe","e_oe",v=>/^\S+@\S+\.\S+$/.test(v),"e_email"]].forEach(([i,e,ok,k])=>{
   const el=$("#"+i);el.value=el.value.trim();const bad=!ok(el.value);$("#"+e).textContent=bad?t[k]:"";el.setAttribute("aria-invalid",bad);if(bad&&!first)first=el});
  return first}
 const showErr=m=>{const e=$("#oerr");e.textContent=m;e.hidden=!m};
 $("#oform").addEventListener("submit",async e=>{e.preventDefault();const b=$("#osend");if(b.getAttribute("aria-busy"))return;
  const bad=validate();if(bad){bad.focus();return}
  const ls=lines();if(!ls.length){showErr(T[lang].empty_cart);return}
  showErr("");b.setAttribute("aria-busy","true");const {sum,open}=totals();
  const cust={name:$("#on").value,phone:$("#op").value,email:$("#oe").value,city:$("#oc").value.trim(),address:$("#oa").value.trim()};
  try{const rec=await HydroStore.placeOrder({kind:"order",customer:cust,items:ls.map(l=>({id:l.p.id,name:l.p.name,price:l.p.price,qty:l.qty})),total:sum,priceOnRequest:open,currency:cur()});
   if($("#orem").checked)W(CUST,cust);else try{localStorage.removeItem(CUST)}catch(x){}
   const msg=`${CONFIG.name}: order ${rec.id}\n`+ls.map(l=>`${l.qty} x ${nm(l.p)}`).join("\n")+`\n${T[lang].total}: ${$("#ctotal").textContent}\n${cust.name}`;
   cart={};save();renderAll();$("#orderpane").hidden=true;const d=$("#odone");d.hidden=false;$("#oref").textContent=rec.id;
   const w=waHref(msg),a=$("#owa");a.hidden=!w;if(w)a.href=w;d.focus();toast(T[lang].od_h);$("#oform").reset();$("#orem").checked=true;shop.scrollTop=0}
  catch(err){showErr(T[lang].oerr_send)}
  finally{b.removeAttribute("aria-busy")}});
 $("#ocopy").onclick=()=>copyText($("#oref").textContent,T[lang].ref_copied);

 window.langHooks.push(()=>{renderAll()});
 load();
 if(location.hash==="#order")openShop();
})();
