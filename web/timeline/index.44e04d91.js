go((async function(e){var n,t;getel("prev_start").innerHTML=e[0]?`from ${human_time(e[0].start)}`:"",getel("prev_end").innerHTML=e[0]?`until ${human_time(e[0].end)}`:"",getel("prev_name").innerHTML=period_html(e[0]),getel("next_start").innerHTML=e[2]?`at ${human_time(null===(n=e[2])||void 0===n?void 0:n.start)}`:"",getel("next_end").innerHTML=e[2]?`until ${human_time(null===(t=e[2])||void 0===t?void 0:t.end)}`:"",getel("next_name").innerHTML=period_html(e[2]);const r=[],i=[];for(const n of e[1]){const e=getel("current").innerHTML;r.push(e.replace("CURR_START",human_time(n.start)).replace("CURR_NAME",period_html(n)).replace("CURR_END",human_time(n.end))),i.push(human_time_left(n.end))}getel("current_parent").innerHTML=r.join(getel("current_separator").innerHTML),getel("time_left").innerHTML=`Ending in ${human_list(i)}${i.length>1?", respectively.":"."}`,window.all_data=await get("api/v1/today").then((e=>e.periods)),place_boxes(all_data)}));
//# sourceMappingURL=index.44e04d91.js.map
