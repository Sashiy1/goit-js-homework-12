import{S as h,i as m}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");n.addEventListener("submit",L);const g="https://pixabay.com/api/",y="41967229-af64f083e47c21f795887158a",F="horizontal",v="photo",$="true";function E(o){return fetch(`${g}?key=${y}&q=${o}&orientation=${F}&image_type=${v}&safesearch=${$}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function L(o){o.preventDefault(),a.classList.remove("hidden");const s=o.currentTarget.elements.serching.value;E(s).then(S).catch(c).finally(()=>{a.classList.add("hidden"),n.reset()})}function S({hits:o}){const s=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});if(o.length===0)c();else{const l=o.map(({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:f})=>` <li class="gallery-item">
  <a class="gallery-link" href="${e}">
  <img class="gallery-image"
  src="${r}"
  alt="${t}" /></a>
  <container class="details-container">
  <div class="details">
 <h3 class="details-title">Likes</h3>
 <p class="details-text">${i}</p>
</div>
<div class="details">
 <h3 class="details-title">Views</h3>
 <p class="details-text">${d}</p>
</div>
<div class="details">
 <h3 class="details-title">Comments</h3>
 <p class="details-text">${u}</p>
</div>
<div class="details">
 <h3 class="details-title">Downloads</h3>
 <p class="details-text">${f}</p>
</div></container>

  

 
</li>`);p.innerHTML=l.join(""),s.refresh()}}function c(o){console.log(o),m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF"})}
//# sourceMappingURL=commonHelpers.js.map
