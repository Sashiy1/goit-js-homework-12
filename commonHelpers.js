import{S as L,a as v}from"./assets/vendor-e87364b2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const c=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),o=document.querySelector(".loading-button"),b="https://pixabay.com/api/",i={query:"",apiKey:"41967229-af64f083e47c21f795887158a",orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:40,page:1};new L(".gallery-item a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",q);async function q(s){if(s.preventDefault(),d.innerHTML="",i.page=1,i.query=s.currentTarget.elements.serching.value.trim(),!!i.query)try{const{hits:t,totalHits:n}=await f(i);i.maxPage=Math.ceil(n/i.per_page),console.log({hits:t,totalHits:n}),m(t,n),console.log(i.maxPage),t.length>0&&t.length!==n?(x(o),o.addEventListener("click",p)):h(o)}catch(t){console.log(t)}finally{c.reset()}}async function f({query:s,page:t=1,per_page:n}){return await v.get(`${b}`,{params:{key:"41967229-af64f083e47c21f795887158a",q:s,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:n,page:t}}).then(({data:l})=>l)}function m(s){const t=s.map(({webformatURL:n,largeImageURL:l,tags:e,likes:a,views:r,comments:g,downloads:y})=>`<li class="gallery-item">
         <a class="gallery-link" href="${l}">
         <img class="gallery-image"
         src="${n}"
         alt="${e}" /></a>
         <container class="details-container">
         <div class="details">
         <h3 class="details-title">Likes</h3>
         <p class="details-text">${a}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Views</h3>
         <p class="details-text">${r}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Comments</h3>
        <p class="details-text">${g}</p>
        </div>
        <div class="details">
        <h3 class="details-title">Downloads</h3>
        <p class="details-text">${y}</p>
        </div></container> 
        </li>`);d.insertAdjacentHTML("beforeend",t)}async function p(){i.page+=1,w();try{const{hits:s}=await f(i);m(s)}catch(s){console.log(s)}finally{S(),i.page===i.maxPage&&(h(),o.removeEventListener("click",p))}}function h(){o.classList.add("hidden")}function x(){o.classList.remove("hidden")}function S(){u.classList.add("hidden"),o.disabled=!1}function w(){u.classList.remove("hidden"),o.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map
