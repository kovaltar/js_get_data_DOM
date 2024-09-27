var e=document.querySelectorAll(".population"),t=[],n=document.querySelector(".total-population"),o=document.querySelector(".average-population");e.forEach(function(e,n){t.push(+e.innerText.split(",").join(""))});var r=t.reduce(function(e,t){return e+t},0),u=Math.round(r/t.length);n.innerText=r.toLocaleString(),o.innerText=u.toLocaleString();
//# sourceMappingURL=index.2de62056.js.map
