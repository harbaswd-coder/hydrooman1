"use strict";
/* Edit every [PLACEHOLDER] here. null numbers show as editable placeholders on the page. */
const CROPS=HydroStore.CROPS;
window.langHooks=[];
const CONFIG={
 name:"Hydro",email:"[EMAIL]",city:"[CITY]",
 specs:{height:"[HEIGHT]",slots:"[SLOTS]",water:"[WATER USE]",power:"[POWER USE]",crops:"[CROPS]",cycle:"[HARVEST CYCLE]"},
 perTower:{waterLPerDay:null,areaM2:null},
 yields:{}
};
const T={en:{
 skip:"Skip to content",n8:"Crops",order:"Order",close:"Close",h_crops:"Plant more than greens",crops_p:"Strawberries, tomatoes, peppers and cucumbers grow in the same tower as lettuce and herbs. Pick what you want to eat and ask us how to space it.",crops_cta:"Ask About Your Crop",f_all:"All",ty:{leafy:"Leafy greens",herbs:"Herbs",fruiting:"Fruiting crops"},
 shop_h:"Order",shop_sub:"Choose your products, then tell us where to deliver.",search_ph:"Search products…",your_order:"Your order",empty_cart:"Nothing here yet. Add a product to start your order.",add:"Add to Order",qty_dec:"Decrease quantity",qty_inc:"Increase quantity",remove:"Remove",total:"Total",on_request:"Price on request",out:"Out of stock",left:"left",no_products:"No products match your search.",details:"Your details",o_name:"Full name",o_phone:"Phone",o_email:"Email",o_city:"City",o_addr:"Address or delivery notes",remember:"Remember my details on this device",place:"Place Order",review:"Review Order",e_phone:"Enter a phone number we can reach you on.",oerr_send:"We could not send this. Check your connection and try again.",od_h:"Order received",od_b:"We will contact you to confirm the details.",copy_ref:"Copy Reference",wa:"Send on WhatsApp",keep:"Keep Browsing",ref_copied:"Reference copied.",priced_later:"plus items priced on request",items_n:"items",quote_link:"Need a custom setup? Tell us what you need",
 tag:"Hydroponics",made:"Made in Oman",n1:"Home",n2:"Product",n3:"Specs",n4:"Contact",n5:"Savings",n6:"Who it’s for",n7:"FAQ",langbtn:"العربية",theme:"Theme",pal:"Quick Jump",pal_t:"Switch theme",pal_l:"Switch language",pal_ph:"Jump to…",
 h1:"Grow Upward",sub:"Hydroponic Towers",lead:"One tower turns a small corner into a steady harvest, with no soil. Plant greens, herbs, strawberries, tomatoes and more.",cta:"Order",seegrow:"See How It Grows",
 prev:"Previous Stage",next:"Next Stage",r_stage:"Stage",r_plants:"Plants",r_prog:"Progress",
 st:["Seed","Roots","Water flow","Light","Canopy","Harvest"],
 sh:["","The roots find the water","The pump keeps it moving","Light sets the pace","Each level fills in turn","Harvest from the tower"],
 sb:["","The roots reach the nutrient flow and stop searching for soil.","A pump lifts the nutrient solution to the top and lets it fall past every root.","A light along the column feeds each level evenly.","The lowest level fills first, then every level above it, one after another.","Cut what you need and the plant keeps growing."],
 fl:["","Plant slots","Water use","Power use","Height","Harvest cycle"],fk:[null,"slots","water","power","height","cycle"],
 h_specs:"Tower specifications",k:{height:"Height",slots:"Plant slots",water:"Water use",power:"Power use",crops:"Crops",cycle:"Harvest cycle"},
 h_est:"Estimate your tower",towers:"Number of towers",crop:"Crop",r_water:"Water per day",r_area:"Floor area",r_yield:"Yield per month",
 a_pre:"Assumptions: each tower uses",a_mid:"of water per day, takes",a_end:"of floor area, and yields",a_post:"per month for the selected crop. Results scale linearly with tower count.",
 empty:"Figures for this crop are not set yet. Add them to the CONFIG object at the top of the file.",set:"[SET]",
 h_how:"How it works",hw:[["Order","Place your order and tell us how many towers you need."],["Install","We place the tower and connect the reservoir and pump."],["Plant","Seat one seed in each net cup and fill the reservoir."],["Harvest","Cut what you need, again and again."]],
 h_who:"Who it’s for",who:[["homes","Homes","Grow herbs and greens on a balcony or in a kitchen corner."],["schools","Schools","Give a class a living system to measure, tend, and eat from."],["restaurants","Restaurants","Cut fresh greens minutes before they reach the plate."],["farms","Farms","Add vertical rows where field space runs out."]],
 h_faq:"Questions",faq:[["Do I need soil?","No. The roots sit in a circulating nutrient solution."],["What can I grow?","Leafy greens, herbs, and fruiting crops such as strawberries, tomatoes, peppers, and cucumbers. See the crop list on this page."],["Where does it go?","Anywhere you have power, light, and room for the reservoir."]],
 h_contact:"Order by message",contact_note:"Tell us what you want to grow and how many towers you need. We reply by email.",f_name:"Name",f_email:"Email",f_phone:"Phone (optional)",f_towers:"Number of towers",f_msg:"Message (optional)",send:"Order",
 e_name:"Enter your name.",e_email:"Enter a valid email, like name@example.com.",e_towers:"Enter at least 1 tower.",done_h:"Order received",done_b:"We will reply to your email soon.",
 copy:"Copy Email",top:"Back to Top",copied:"Email copied.",sent:"Order sent.",title:"Hydro: Hydroponic Towers"},
ar:{
 skip:"انتقل إلى المحتوى",n8:"المحاصيل",order:"اطلب",close:"إغلاق",h_crops:"ازرع أكثر من الورقيات",crops_p:"الفراولة والطماطم والفلفل والخيار تنمو في البرج نفسه مع الخس والأعشاب. اختر ما تحب أن تأكله واسألنا عن أفضل توزيع للنباتات.",crops_cta:"اسأل عن محصولك",f_all:"الكل",ty:{leafy:"الورقيات",herbs:"الأعشاب",fruiting:"المحاصيل المثمرة"},
 shop_h:"اطلب",shop_sub:"اختر منتجاتك ثم أخبرنا أين نوصّلها.",search_ph:"ابحث عن منتج…",your_order:"طلبك",empty_cart:"لا شيء هنا بعد. أضف منتجاً لتبدأ طلبك.",add:"أضف إلى الطلب",qty_dec:"إنقاص الكمية",qty_inc:"زيادة الكمية",remove:"إزالة",total:"المجموع",on_request:"السعر عند الطلب",out:"نفد من المخزون",left:"متبقية",no_products:"لا توجد منتجات مطابقة لبحثك.",details:"بياناتك",o_name:"الاسم الكامل",o_phone:"الهاتف",o_email:"البريد الإلكتروني",o_city:"المدينة",o_addr:"العنوان أو ملاحظات التوصيل",remember:"تذكّر بياناتي على هذا الجهاز",place:"أرسل الطلب",review:"راجع الطلب",e_phone:"أدخل رقم هاتف يمكننا الاتصال بك عليه.",oerr_send:"تعذّر الإرسال. تحقق من الاتصال وحاول مرة أخرى.",od_h:"وصل طلبك",od_b:"سنتواصل معك لتأكيد التفاصيل.",copy_ref:"انسخ الرقم المرجعي",wa:"أرسل عبر واتساب",keep:"تابع التصفح",ref_copied:"تم نسخ الرقم المرجعي.",priced_later:"إضافة إلى منتجات سعرها عند الطلب",items_n:"عناصر",quote_link:"تحتاج تجهيزاً مخصصاً؟ أخبرنا بما تحتاجه",
 tag:"زراعة مائية",made:"صنع في عُمان",n1:"الرئيسية",n2:"المنتج",n3:"المواصفات",n4:"تواصل",n5:"التوفير",n6:"لمن البرج",n7:"الأسئلة",langbtn:"English",theme:"المظهر",pal:"انتقال سريع",pal_t:"تبديل المظهر",pal_l:"تبديل اللغة",pal_ph:"انتقل إلى…",
 h1:"ازرع للأعلى",sub:"أبراج الزراعة المائية",lead:"برج واحد يحوّل زاوية صغيرة إلى حصاد منتظم دون تربة. ازرع الورقيات والأعشاب والفراولة والطماطم وغيرها.",cta:"اطلب",seegrow:"شاهد كيف تنمو",
 prev:"المرحلة السابقة",next:"المرحلة التالية",r_stage:"المرحلة",r_plants:"النباتات",r_prog:"التقدم",
 st:["البذرة","الجذور","تدفق الماء","الإضاءة","المجموع الورقي","الحصاد"],
 sh:["","الجذور تصل إلى الماء","المضخة تُبقي الماء يتحرك","الضوء يحدد الإيقاع","كل طابق يمتلئ بدوره","احصد من البرج"],
 sb:["","تصل الجذور إلى المحلول المغذي وتتوقف عن البحث عن التربة.","ترفع المضخة المحلول المغذي إلى الأعلى ليسقط على كل جذر.","مصدر ضوء بمحاذاة العمود يغذي كل طابق بالتساوي.","يمتلئ الطابق الأدنى أولاً ثم كل طابق فوقه تباعاً.","اقطف ما تحتاجه وتواصل النبتة نموها."],
 fl:["","عدد الفتحات","استهلاك الماء","استهلاك الطاقة","الارتفاع","دورة الحصاد"],fk:[null,"slots","water","power","height","cycle"],
 h_specs:"مواصفات البرج",k:{height:"الارتفاع",slots:"عدد الفتحات",water:"استهلاك الماء",power:"استهلاك الطاقة",crops:"المحاصيل",cycle:"دورة الحصاد"},
 h_est:"قدّر احتياجك من الأبراج",towers:"عدد الأبراج",crop:"المحصول",r_water:"الماء يومياً",r_area:"المساحة",r_yield:"الإنتاج شهرياً",
 a_pre:"الافتراضات: يستهلك كل برج",a_mid:"من الماء يومياً، ويشغل",a_end:"من المساحة، وينتج",a_post:"شهرياً للمحصول المحدد. تتناسب النتائج طردياً مع عدد الأبراج.",
 empty:"لم تُضبط أرقام هذا المحصول بعد. أضفها في كائن CONFIG أعلى الملف.",set:"[حدد]",
 h_how:"كيف يعمل",hw:[["اطلب","قدّم طلبك وأخبرنا بعدد الأبراج التي تحتاجها."],["ركّب","نضع البرج ونوصل الخزان والمضخة."],["ازرع","ضع بذرة في كل كوب شبكي واملأ الخزان."],["احصد","اقطف ما تحتاجه مرة بعد مرة."]],
 h_who:"لمن البرج",who:[["homes","المنازل","ازرع الأعشاب والورقيات في شرفة أو زاوية مطبخ."],["schools","المدارس","امنح الصف نظاماً حياً يقيسه ويرعاه ويأكل منه."],["restaurants","المطاعم","اقطف الورقيات الطازجة قبل دقائق من وصولها إلى الطبق."],["farms","المزارع","أضف صفوفاً رأسية حيث تنتهي مساحة الحقل."]],
 h_faq:"أسئلة شائعة",faq:[["هل أحتاج إلى تربة؟","لا. تنمو الجذور في محلول مغذي يدور باستمرار."],["ماذا أستطيع أن أزرع؟","الورقيات والأعشاب والمحاصيل المثمرة مثل الفراولة والطماطم والفلفل والخيار. راجع قائمة المحاصيل في هذه الصفحة."],["أين أضع البرج؟","في أي مكان تتوفر فيه الكهرباء والضوء ومساحة للخزان."]],
 h_contact:"اطلب برسالة",contact_note:"أخبرنا بما تريد زراعته وبعدد الأبراج. سنرد عليك عبر البريد الإلكتروني.",f_name:"الاسم",f_email:"البريد الإلكتروني",f_phone:"الهاتف (اختياري)",f_towers:"عدد الأبراج",f_msg:"الرسالة (اختياري)",send:"اطلب",
 e_name:"أدخل اسمك.",e_email:"أدخل بريداً إلكترونياً صحيحاً، مثل name@example.com.",e_towers:"أدخل برجاً واحداً على الأقل.",done_h:"وصل طلبك",done_b:"سنرد على بريدك الإلكتروني قريباً.",
 copy:"انسخ البريد",top:"إلى الأعلى",copied:"تم نسخ البريد.",sent:"تم إرسال الطلب.",title:"Hydro: أبراج الزراعة المائية"}};

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const reduce=matchMedia("(prefers-reduced-motion: reduce)");
let lang="en",stage=0,tab="homes",prog=0;
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};

/* Tower: 14 cups measured from the supplied illustration (crop offset applied), 12 plant cut-outs. */
const POTS=[[521,258],[731,258],[625,318],[521,410],[733,410],[625,487],[521,566],[731,565],[625,647],[521,726],[731,726],[625,808],[522,866],[730,866]].map(([x,y])=>[x-300,y-60]);
const PW=[[186.0, 144.0, 86.4], [171.6, 153.6, 83.5], [190.8, 140.4, 83.3], [192.0, 138.0, 89.9], [178.8, 153.6, 86.2], [188.4, 135.6, 95.5], [187.2, 147.6, 84.2], [183.6, 147.6, 84.2], [186.0, 150.0, 82.0], [178.8, 144.0, 95.0], [180.0, 147.6, 81.4], [178.8, 156.0, 95.3]],SEQ=[0,5,2,8,1,6,3,10,4,7,9,11,2,6],JIT=[0,.01,-.005,.008,.002,-.008,.01,0,.006,-.004,.01,0,.004,-.006];
const starts=[],durs=[];
(function(){
 const byY=POTS.map((p,i)=>i).sort((i,j)=>POTS[j][1]-POTS[i][1]),rank=[];byY.forEach((pi,r)=>rank[pi]=r);
 let se="",ro="",pl="";
 POTS.forEach(([x,y],i)=>{
  starts[i]=.42+rank[i]*.03+JIT[rank[i]];durs[i]=.14+(rank[i]%3)*.01;
  se+=`<ellipse class="seed" cx="${x}" cy="${y+8}" rx="7" ry="4.5" fill="#6b5535"/>`;
  const d=x<325?1:x>325?-1:0,sx=x+d*40;
  ro+=d?`<g class="roots"><path d="M${sx} ${y+20}q${d*18} 16 ${d*32} 38M${sx} ${y+20}q${d*4} 22 ${d*10} 52M${sx} ${y+20}q${d*26} 6 ${d*40} 24"/></g>`
      :`<g class="roots"><path d="M${x} ${y+64}q-14 20-10 48M${x} ${y+64}q4 26-2 56M${x} ${y+64}q18 18 14 44"/></g>`;
 });
 POTS.map((p,i)=>i).sort((i,j)=>POTS[i][1]-POTS[j][1]).forEach(i=>{
  const [x,y]=POTS[i],k=SEQ[rank[i]],[w,h,ax]=PW[k];
  pl+=`<g class="pl" style="--s:${starts[i].toFixed(3)};--d:${durs[i].toFixed(3)};transform-origin:${(ax/w*100).toFixed(1)}% 100%"><use href="#p${k}" x="${(x-ax).toFixed(1)}" y="${(y+12-h).toFixed(1)}"/></g>`;
 });
 $("#seeds").innerHTML=se;$("#roots").innerHTML=ro;$("#plants").innerHTML=pl;
})();

/* Leaves: four hand-built shapes (tea leaf, broad, curled, sprig) in three tones, shaded and veined.
   Depth comes from blur: soft focus for foreground leaves, directional blur along the leaf for motion. */
(function(){
 const tones=[["#d6ef7c","#74b940","#1c6b34"],["#a4d65c","#33903f","#0d4a26"],["#c2e46a","#4c9c3a","#14582c"]];
 const SH={
  T:{o:"M0 0C18-30 70-52 150-34C172-28 186-14 196-2C150 24 60 40 0 0Z",lo:"M0 0C60 40 150 24 196-2Q100-9 0 0Z",up:"M0 0C18-30 70-52 150-34Q80-24 0 0Z",rib:"M0 0Q95-13 194-3",
     v:"M28-5Q42-22 66-31M62-8Q80-26 108-34M100-10Q122-26 146-30M140-8Q156-18 176-14M26-3Q42 12 64 20M60-6Q80 10 104 16M98-8Q122 8 148 10M136-6Q156 4 178 2"},
  B:{o:"M0 0C8-42 86-64 150-32C172-20 182-8 186 0C130 44 36 46 0 0Z",lo:"M0 0C36 46 130 44 186 0Q95-8 0 0Z",up:"M0 0C8-42 86-64 150-32Q75-22 0 0Z",rib:"M0 0Q92-12 184-1",
     v:"M30-5Q44-26 70-36M64-8Q84-30 112-38M104-10Q128-28 152-30M30-3Q46 16 70 26M64-6Q86 16 114 24M104-8Q128 14 152 14"},
  C:{o:"M0 0C30-24 100-30 188-6C100 14 36 20 0 0Z",lo:"M0 0C36 18 100 12 188-6Q100 2 0 0Z",up:"M0 0C30-24 100-30 188-6Q100-12 0 0Z",rib:"M0 0Q100-10 186-6",
     v:"M40-4Q60-16 86-20M90-8Q112-18 140-18M40-2Q62 8 90 10M92-5Q116 6 146 2"}
 };
 const leaf=(k,t)=>{const d=SH[k];return `<g id="lf${k}${t}"><path d="${d.o}" fill="url(#lg${t})"/>`+
  (k==="C"?`<path d="${d.lo}" fill="#eefab0" opacity=".5"/>`:`<path d="${d.lo}" fill="#06301a" opacity=".3"/><path d="${d.up}" fill="#f6ffd2" opacity=".24"/>`)+
  `<path d="${d.v}" stroke="#eaffc8" stroke-opacity=".32" stroke-width="1.2" fill="none"/><path d="${d.rib}" stroke="#f1ffc4" stroke-opacity=".7" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="${d.o}" stroke="#08331b" stroke-opacity=".4" stroke-width="1.2" fill="none"/><ellipse cx="86" cy="-20" rx="30" ry="2.6" transform="rotate(-10 86 -20)" fill="#fff" opacity=".2"/></g>`};
 const sprig=t=>`<g id="lfS${t}"><path d="M0 0Q60 6 120-16Q150-28 178-42" stroke="#6b4a24" stroke-width="3.2" fill="none" stroke-linecap="round"/><use href="#lfT${t}" transform="translate(38 3) rotate(-55) scale(.38)"/><use href="#lfT${t}" transform="translate(38 3) rotate(38) scale(.32)"/><use href="#lfT${t}" transform="translate(88 -9) rotate(-48) scale(.42)"/><use href="#lfB${t}" transform="translate(88 -9) rotate(42) scale(.3)"/><use href="#lfT${t}" transform="translate(140 -26) rotate(-32) scale(.4)"/><use href="#lfT${t}" transform="translate(178 -42) rotate(-52) scale(.3)"/></g>`;
 $("#gdefs").innerHTML=tones.map((c,i)=>`<linearGradient id="lg${i}" x1="0" y1="${i==1?1:0}" x2="1" y2="${i==1?0:1}"><stop offset="0" stop-color="${c[0]}"/><stop offset=".5" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>`).join("")
  +'<filter id="mb" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6 1"/></filter><filter id="mb2" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="11 1.6"/></filter>'
  +[0,1,2].map(t=>leaf("T",t)+leaf("B",t)+leaf("C",t)+sprig(t)).join("");
 const F=["","blur(1.5px)","blur(3px)","blur(6px)","url(#mb)","url(#mb2)"];
 /* shape+tone, blur code, x, y, length in px at 1356px wide, rotation, drift on scroll */
 const hl=L=>L.map(([st,bl,x,y,len,rot,dy])=>`<svg class="hl" viewBox="-6 -56 208 112" aria-hidden="true" style="--x:${x}%;--y:${y}%;--rot:${rot}deg;--dy:${dy};inline-size:min(${len}px,${(len/13.56).toFixed(2)}vw)${bl?`;filter:${F[bl]}`:""}"><use href="#lf${st}"/></svg>`).join("");
 /* Hero cluster, composed from the reference: a soft foreground leaf at the corner, crisp mid leaves, motion-blurred strays, one sprig. All sit below the buttons. */
 $("#leaves").innerHTML=hl([
  ["T0",3,10,86,190,36,40],["T1",0,32,96,170,-34,-30],["B0",5,57,72,150,-64,50],["T2",0,78,70,140,24,-40],["S1",0,90,77,84,-72,30],
  ["T0",4,74,84,160,10,40],["T2",0,19,90,92,32,-50],["B1",2,3,90,50,56,20],["T0",0,35,84,54,-12,40],["B1",0,52,82,66,34,-30],
  ["T2",0,43,87,36,10,20],["T0",2,66,69,46,-28,-20],["T1",0,89,60,36,-8,30],["B2",3,18,98,46,12,-30],["C1",2,9,70,58,-38,30],
  ["T0",3,60,60,56,-34,-40],["B1",3,86,52,40,58,30],["T2",1,95,82,70,-110,20]
 ]);
 /* Behind the tower card: a leaf crossing into the card, one at the lower corner, one past the right edge, one above. */
 $("#leaves2").innerHTML=hl([["T0",0,22,20,210,-12,30],["T1",2,10,80,160,58,-20],["B2",0,92,90,190,-150,-30],["T2",0,90,5,130,-30,20],["S0",0,6,52,110,-100,25]]);
 /* Scattered leaves: section padding and gutters, never under copy. x%, offset, anchor, width, rotation, shape+tone, blur, parallax, opacity */
 const mk=L=>L.map(([x,y,a,w,r,st,b,k,o])=>`<svg class="dl" viewBox="-6 -56 208 112" aria-hidden="true" style="inset-inline-start:${x}%;${a}:${y};inline-size:${w}px;--rot:${r}deg;--k:${k};opacity:${o}${b?`;filter:${F[b]}`:""}"><use href="#lf${st}"/></svg>`).join("");
 const S={
  specs:[[4,"-6px","top",170,-24,"T0",0,.06,1],[30,"-4px","top",70,18,"B1",2,-.07,.9],[78,"-8px","top",200,-160,"T1",4,-.05,.85],[56,"2px","bottom",120,12,"C2",0,.08,.95],[90,"-7px","bottom",180,-200,"T0",0,-.07,1],[14,"-6px","bottom",84,-14,"S1",0,.05,.95]],
  savings:[[88,"-6px","top",170,-190,"T2",0,.07,1],[6,"-9px","top",200,-10,"B1",3,-.06,.8],[34,"-6px","bottom",150,20,"T0",0,.05,.95],[70,"-10px","bottom",200,-170,"T1",1,-.08,.9],[52,"-3px","top",60,-30,"T2",2,.07,.9]],
  how:[[2,"-6px","top",130,-40,"T1",0,.07,1],[62,"-8px","top",180,-150,"B0",4,-.05,.85],[92,"-9px","bottom",200,-200,"T2",3,.06,.8],[22,"-4px","bottom",110,30,"T0",0,-.06,.95],[44,"-5px","bottom",64,-22,"C1",2,.05,.9]],
  who:[[40,"-6px","top",140,-15,"T0",1,.06,.95],[94,"-6px","top",200,-175,"T2",0,-.07,1],[8,"-9px","bottom",190,15,"B1",3,.05,.85],[68,"-4px","bottom",130,-30,"T2",0,-.05,1],[26,"-4px","top",60,22,"B0",2,.06,.9]],
  faq:[[84,"-6px","top",180,-165,"T1",0,.06,1],[10,"-7px","top",120,-25,"T2",1,-.06,.95],[52,"-9px","bottom",200,-10,"B0",4,.05,.75],[90,"-4px","bottom",90,-150,"S2",0,.06,.95]],
  contact:[[3,"-9px","top",200,-30,"T2",3,.06,.85],[48,"-6px","top",120,-60,"T1",0,-.05,1],[90,"-8px","bottom",190,-170,"T0",1,.07,.95],[24,"-6px","bottom",150,15,"B1",0,-.06,.95],[64,"-3px","bottom",70,-18,"T0",2,.05,.9]],
  foot:[[8,"-8px","bottom",190,-20,"T0",1,.06,.95],[44,"-4px","bottom",110,-60,"T2",0,-.05,.95],[88,"-9px","bottom",200,-170,"B1",2,.07,.85],[66,"-3px","bottom",70,10,"C2",3,.05,.9]],
  story:[[80,"22%","top",130,-155,"T1",0,.04,.95],[84,"39%","top",100,-200,"B0",2,-.04,.9],[78,"55%","top",140,-165,"T2",0,.05,.95],[86,"71%","top",95,-190,"S1",0,-.05,.95],[80,"87%","top",130,-150,"T0",1,.04,.95]]
 };
 Object.keys(S).forEach(k=>{const el=k==="foot"?$("footer"):k==="story"?$("#blocks"):$("#"+k);if(el)el.insertAdjacentHTML("beforeend",mk(S[k]))});
})();

/* Story blocks 1 to 5 */
(function(){const p=$("#product");
 for(let i=1;i<6;i++){const d=document.createElement("div");d.className="blk";d.dataset.stage=i;
  d.innerHTML=`<h2></h2><p></p><p class="fact"><span></span><b></b></p>`;p.appendChild(d)}})();
const blocks=[$("#top"),...$$("#product .blk")];
const DRIFT=$$(".sec,footer,#blocks");

function setLang(l,persist){
 lang=l;const t=T[l];
 root.lang=l;root.dir=l==="ar"?"rtl":"ltr";document.title=t.title;
 $$("[data-t]").forEach(e=>{const v=t[e.dataset.t];if(typeof v==="string")e.textContent=v});
 $("#brand").textContent=CONFIG.name;$$(".brandf").forEach(e=>e.textContent=CONFIG.name);
 {const l=$("#loc");l.textContent=CONFIG.email;l.append(document.createElement("br"),CONFIG.city)}
 blocks.forEach((e,i)=>{if(!i)return;const p=e.querySelectorAll("p"),f=e.querySelector(".fact");
  e.querySelector("h2").textContent=t.sh[i];p[0].textContent=t.sb[i];
  f.children[0].textContent=t.fl[i]+":";f.children[1].textContent=CONFIG.specs[t.fk[i]]});
 $("#spectable").innerHTML=Object.keys(CONFIG.specs).map(k=>`<tr><th scope="row">${t.k[k]}</th><td>${CONFIG.specs[k]}</td></tr>`).join("");
 $("#steps").innerHTML=t.hw.map((s,i)=>`<li data-n="${i+1}"><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join("");
 $("#faqs").innerHTML=t.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");
 $("#tabs").innerHTML=t.who.map(w=>`<button role="tab" type="button" id="tab-${w[0]}" data-k="${w[0]}">${w[1]}</button>`).join("");
 const cs=$("#crop"),cur=cs.value||CROPS[0].id;
 cs.innerHTML=CROPS.map(c=>`<option value="${c.id}">${c[l]}</option>`).join("");cs.value=cur;
 $$("[data-ph]").forEach(e=>e.placeholder=t[e.dataset.ph]);renderCrops();
 $("#pq").placeholder=t.pal_ph;buildPalette();
 showTab(tab);estimate();paintStage();
 window.langHooks.forEach(f=>f());
 if(persist){store.set("lang",l);const u=new URL(location.href);u.searchParams.set("lang",l);history.replaceState(null,"",u)}
 $$(".lang").forEach(b=>b.setAttribute("lang",l==="ar"?"en":"ar"));
}
let cropFilter="all";
function renderCrops(){const t=T[lang];
 $("#cropf").innerHTML=["all","leafy","herbs","fruiting"].map(k=>`<button type="button" class="btn sm" data-f="${k}" aria-pressed="${k===cropFilter}">${k==="all"?t.f_all:t.ty[k]}</button>`).join("");
 $("#chips").innerHTML=CROPS.filter(c=>cropFilter==="all"||c.type===cropFilter).map(c=>`<li class="chip">${c[lang]}</li>`).join("")}
$("#cropf").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(b){cropFilter=b.dataset.f;renderCrops();$("#cropf [aria-pressed=true]").focus()}});
function applySettings(s){CONFIG.name=s.brand||CONFIG.name;if(s.email)CONFIG.email=s.email;if(s.city)CONFIG.city=s.city;
 CONFIG.phone=s.phone||"";CONFIG.whatsapp=s.whatsapp||"";CONFIG.currency=s.currency||"OMR";
 Object.keys(CONFIG.specs).forEach(k=>{if(s.specs&&s.specs[k])CONFIG.specs[k]=s.specs[k]});
 CONFIG.perTower.waterLPerDay=s.perTower?s.perTower.waterLPerDay??null:null;CONFIG.perTower.areaM2=s.perTower?s.perTower.areaM2??null:null;
 CONFIG.yields=s.yields||{};const w=waHref("");const f=$("#fwa");f.hidden=!w;if(w)f.href=w;setLang(lang)}
function waHref(msg){const n=(CONFIG.whatsapp||"").replace(/\D/g,"");return n?`https://wa.me/${n}?text=${encodeURIComponent(msg)}`:""}
async function copyText(v,m){try{await navigator.clipboard.writeText(v);toast(m)}catch(e){toast(v)}}
function showTab(k){const w=T[lang].who.find(x=>x[0]===k)||T[lang].who[0];tab=w[0];
 $$("[role=tab]").forEach(b=>{const on=b.dataset.k===tab;b.setAttribute("aria-selected",on);b.tabIndex=on?0:-1});
 $("#panel").textContent=w[2];$("#panel").setAttribute("aria-labelledby","tab-"+tab);}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("[role=tab]");if(b){showTab(b.dataset.k);history.replaceState(null,"","#who-"+b.dataset.k)}});
$("#tabs").addEventListener("keydown",e=>{const ks=T[lang].who.map(w=>w[0]),i=ks.indexOf(tab),r=root.dir==="rtl";
 const d=e.key==="ArrowRight"?(r?-1:1):e.key==="ArrowLeft"?(r?1:-1):0;
 if(d){e.preventDefault();showTab(ks[(i+d+ks.length)%ks.length]);$("#tab-"+tab).focus()}});

/* Growth */
function paintStage(){const t=T[lang],n=starts.filter((s,i)=>clamp((prog-s)/durs[i],0,1)>.5).length;
 $("#cnt").textContent="0"+(stage+1)+" / 06";$("#svgt").textContent=t.title;
 $("#svgd").textContent=t.st[stage]+", "+n+" / "+starts.length;}
let ticking=false;
function update(){ticking=false;
 const s=$("#story").getBoundingClientRect(),span=s.height-innerHeight;
 let p=clamp(-s.top/Math.max(span,1),0,1);
 const st=clamp(Math.round(p*5),0,5);
 if(reduce.matches)p=st/5;
 $("header").classList.toggle("solid",scrollY>8);prog=p;root.style.setProperty("--progress",p.toFixed(4));
 $("#bar").classList.toggle("on",s.top<innerHeight*.5&&s.bottom>innerHeight*.5);
 if(st!==stage){stage=st;$("#live").textContent=T[lang].st[st]}
 if(!reduce.matches)DRIFT.forEach(e=>{const r=e.getBoundingClientRect();if(r.bottom<-300||r.top>innerHeight+300)return;e.style.setProperty("--sy",clamp(r.top+r.height/2-innerHeight/2,-600,600).toFixed(0)+"px")});
 paintStage();
}
addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});
addEventListener("resize",update);
function go(i){i=clamp(i,0,5);blocks[i].scrollIntoView({behavior:reduce.matches?"auto":"smooth",block:"center"})}
["","2"].forEach(x=>{$("#prev"+x).onclick=()=>go(stage-1);$("#next"+x).onclick=()=>go(stage+1)});
addEventListener("keydown",e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openPal();return}
 if(e.target.closest("input,select,textarea,details,[role=tab],dialog"))return;
 const r=root.dir==="rtl";
 if(e.key==="ArrowRight")go(stage+(r?-1:1));else if(e.key==="ArrowLeft")go(stage+(r?1:-1))});

/* Estimator */
function estimate(){
 const t=T[lang],n=+$("#n").value,c=CROPS.find(x=>x.id===$("#crop").value)||CROPS[0],P=CONFIG.perTower,y=CONFIG.yields[c.id]??null;
 $("#nout").textContent=n;
 const f=(v,u)=>v==null?t.set:(v*n).toLocaleString("en-US",{maximumFractionDigits:1})+"\u00a0"+u;
 const wu=lang==="ar"?"لتر":"L",au=lang==="ar"?"م²":"m²",yu=lang==="ar"?"كغ":"kg";
 $("#res").innerHTML=`<div><span>${t.r_water}</span><b class="num">${f(P.waterLPerDay,wu)}</b></div><div><span>${t.r_area}</span><b class="num">${f(P.areaM2,au)}</b></div><div><span>${t.r_yield}</span><b class="num">${f(y,yu)}</b></div>`;
 const v=(x,u)=>x==null?t.set:x+"\u00a0"+u;
 $("#assume").textContent=`${t.a_pre} ${v(P.waterLPerDay,wu)} ${t.a_mid} ${v(P.areaM2,au)} ${t.a_end} ${v(y,yu)} ${t.a_post}`;
 const miss=P.waterLPerDay==null||P.areaM2==null||y==null;
 $("#empty").hidden=!miss;$("#empty").textContent=t.empty;
}
$("#n").addEventListener("input",estimate);$("#crop").addEventListener("change",estimate);

/* Theme */
function setTheme(m){root.dataset.theme=m;store.set("theme",m);$('meta[name=theme-color]').content=m==="light"?"#f2f7f3":"#003a22"}
const toggleTheme=()=>setTheme(root.dataset.theme==="light"?"dark":"light");
$("#theme").onclick=toggleTheme;
setTheme(store.get("theme")||"dark");

/* Toast and copy */
let tt;function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),2600)}
$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(CONFIG.email);toast(T[lang].copied)}catch(e){toast(CONFIG.email)}};

/* Quick navigation palette */
const pal=$("#palette");
function buildPalette(q){const t=T[lang];q=(q||"").toLowerCase();
 const items=[["n1",()=>location.hash="#top"],["n2",()=>location.hash="#product"],["n8",()=>location.hash="#crops"],["order",()=>window.openShop&&openShop()],["n3",()=>location.hash="#specs"],["n5",()=>location.hash="#savings"],["n6",()=>location.hash="#who"],["n7",()=>location.hash="#faq"],["n4",()=>location.hash="#contact"],["pal_t",toggleTheme],["pal_l",()=>setLang(lang==="ar"?"en":"ar",true)]];
 const ul=$("#pl");ul.innerHTML="";
 items.filter(i=>t[i[0]].toLowerCase().includes(q)).forEach(i=>{const li=document.createElement("li"),b=document.createElement("button");b.type="button";b.textContent=t[i[0]];b.onclick=()=>{pal.close();i[1]()};li.appendChild(b);ul.appendChild(li)})}
function openPal(){$("#pq").value="";buildPalette();pal.showModal();$("#pq").focus()}
$("#palbtn").onclick=openPal;
$("#pq").addEventListener("input",e=>buildPalette(e.target.value));
$("#pq").addEventListener("keydown",e=>{if(e.key==="Enter"){const b=$("#pl button");if(b)b.click()}});
pal.addEventListener("click",e=>{if(e.target===pal)pal.close()});

/* Order form: validated, then sent through HydroStore (server API or this browser) */
const form=$("#form");
function check(){let first=null;const t=T[lang];
 [["fn","e_fn","e_name"],["fe","e_fe","e_email"],["ft","e_ft","e_towers"]].forEach(([i,e,k])=>{
  const el=$("#"+i);el.value=el.value.trim();const bad=!el.checkValidity()||(i==="fn"&&!el.value);
  $("#"+e).textContent=bad?t[k]:"";el.setAttribute("aria-invalid",bad);if(bad&&!first)first=el});
 return first}
form.addEventListener("submit",async e=>{e.preventDefault();const b=$("#send");if(b.getAttribute("aria-busy"))return;
 const bad=check();if(bad){bad.focus();return}
 const qe=$("#qerr");qe.hidden=true;b.setAttribute("aria-busy","true");
 try{const rec=await HydroStore.placeOrder({kind:"quote",customer:{name:$("#fn").value,email:$("#fe").value,phone:$("#fp").value.trim()},towers:+$("#ft").value,message:$("#fm").value.trim()});
  form.hidden=true;$("#qref").textContent=rec.id;
  const w=waHref(`${CONFIG.name}: order request ${rec.id}`);const a=$("#qwa");a.hidden=!w;if(w)a.href=w;
  const d=$("#done");d.hidden=false;d.focus();toast(T[lang].sent)}
 catch(err){qe.textContent=T[lang].oerr_send;qe.hidden=false}
 finally{b.removeAttribute("aria-busy")}});
$("#qcopy").onclick=()=>copyText($("#qref").textContent,T[lang].ref_copied);

/* Nav active state follows the section in view */
const links=$$("nav a"),io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.setAttribute("aria-current",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
["top","product","crops","specs","contact"].forEach(id=>io.observe($("#"+id)));

/* Language init: URL, then storage, then navigator.languages */
$$(".lang").forEach(b=>b.onclick=()=>setLang(lang==="ar"?"en":"ar",true));
(function(){const q=new URLSearchParams(location.search).get("lang"),s=store.get("lang");
 let l=["ar","en"].includes(q)?q:["ar","en"].includes(s)?s:null;
 if(!l)l=(navigator.languages||[navigator.language||"en"]).some(x=>/^ar/i.test(x))?"ar":"en";
 const h=location.hash.match(/^#who-(\w+)/);if(h)tab=h[1];
 setLang(l,false);update();if(h)$("#who").scrollIntoView();
 const sync=()=>HydroStore.settings().then(x=>{const j=JSON.stringify(x);if(j!==sync.last){sync.last=j;applySettings(x)}}).catch(()=>{});
 sync();HydroStore.onChange(k=>{if(k==="hydro:settings"||k==="poll")sync()})})();
