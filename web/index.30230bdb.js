window.update_progress=function(e){const t=getel("progress_parent");if(t)if(e=e[1].filter((e=>!["BeforeSchool","AfterSchool"].includes(e.kind))),t.innerHTML="",0===e.length)t.style.display="none";else{t.style.display="block";for(const r of e){const e=document.createElement("div");e.classList.add("progress_bar"),e.id=`progress_bar_${r.friendly_name.split(" ").join("_")}`;const s=(date_from_api(r.end)-date_from_api(r.start))/1e3,o=(current_date().getTime()-date_from_api(r.start))/1e3/s;e.style.setProperty("--width",100*o+"%"),e.title=`${r.friendly_name} progress`,t.append(e)}}},window.update_progress_circular=function(e,t){const r=function(e){const t=(date_from_api(e.end)-date_from_api(e.start))/1e3;return(current_date().getTime()-date_from_api(e.start))/1e3/t}(e),s=t.querySelector(".progress-ring__circle"),o=2*s.r.baseVal.value*Math.PI;s.style.strokeDasharray=`${o} ${o}`,s.style.strokeDashoffset=`${o}`;const a=o-r*o;s.style.strokeDashoffset=a};
//# sourceMappingURL=index.30230bdb.js.map
