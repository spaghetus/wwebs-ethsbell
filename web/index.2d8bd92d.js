let e,t,r,n,o,i=[];function l(e){if(!e)return;for(const e of i)clearInterval(e);i=[],!e[2]||e[1]&&e[1][0]&&"BeforeSchool"===e[1][0].kind?getel("next_parent").style.display="none":(getel("next_period").innerHTML=getel("next_period_template").innerHTML,put_period_to_element(getel("next_period"),e[2]),getel("next_parent").style.display="block");const t=getel("current_period_time_template"),r=getel("current_parent");if(r.innerHTML="",e[1][0]){if(o){const t=o.flat().filter((e=>e)).map((e=>e.friendly_name)),r=new Set(e[1].filter((e=>e)).map((e=>e.friendly_name)));t.every((e=>!r.has(e)))&&c()}for(const n of e[1]){const e=document.createElement("div");e.innerHTML=t.innerHTML;const o=put_period_to_element(e,n);if(r.append(e),o){const t=Number.parseFloat(document.defaultView.getComputedStyle(e,null).fontSize.slice(0,-2)),r=e.querySelector(".progress-ring");r.setAttribute("width",t),r.setAttribute("height",t);const o=e.querySelector(".progress-ring__circle"),l=e.querySelector(".progress-ring__border");o.setAttribute("cx",t/2),o.setAttribute("cy",t/2),o.setAttribute("r",t/4-1),o.setAttribute("stroke-width",t/2-2),l.setAttribute("cx",t/2),l.setAttribute("cy",t/2),l.setAttribute("r",t/2-2),i.push(setInterval((()=>{update_progress_circular(n,e)}),1e3)),update_progress_circular(n,e)}}}else{const e=document.createElement("div");e.innerHTML=t.innerHTML,put_period_to_element(e,null),r.append(e)}o=e}async function c(){const e=await get("/api/v1/today");e&&(s(bytes_to_color(e.color)),e.periods.length>0?(n.innerHTML=`${e.friendly_name}`,n.style.display="inline-block"):(n.innerHTML="",n.style.display="none"))}function s(e){config.use_schedule_color&&(null!=e||(e=getCookie("schedule_color")),e&&setCookie("schedule_color",e,(new Date).setHours(24,0,0,0)),document.body.style.setProperty("--background_color",e||config.background_color),document.body.style.setProperty("--background_text_color",e?black_or_white(e):config.background_text_color))}window.addEventListener("resize",(()=>l(o))),s(),window.addEventListener("load",(()=>{e=document.querySelector("#period"),t=document.querySelector("#end_time"),r=document.querySelector("#next"),n=document.querySelector("#schedulename"),go(l),c()}));
//# sourceMappingURL=index.2d8bd92d.js.map
