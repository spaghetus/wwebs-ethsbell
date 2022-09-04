const o=new URL(document.referrer||"https://example.com");if(window.location.origin!==o.origin&&!window.location.search.includes("no_default"))try{const o=JSON.parse(localStorage.getItem("schedule")).default_page||"/";!window.location.pathname!==o&&(window.location.href=`${o}${window.location.search}`)}catch{}
//# sourceMappingURL=index.dd29a461.js.map
