import{a as p,S as h,i as y}from"./assets/vendor-990f3500.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");n.addEventListener("submit",F);const g=p.create({baseURL:"https://pixabay.com/api/",params:{key:"41967229-af64f083e47c21f795887158a",orientation:"horizontal",image_type:"photo",safesearch:"true"}});async function F(s){s.preventDefault(),l.classList.remove("hidden");const a=s.currentTarget.elements.serching.value;try{const r=await v(a);L(r)}catch{d()}finally{l.classList.add("hidden"),n.reset()}}async function v(s){try{return(await g.get("/",{params:{q:s}})).data}catch(a){console.error(a)}}function L({hits:s}){const a=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});if(s.length===0)d();else{const r=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:u,comments:f,downloads:m})=>`<li class="gallery-item">
         <a class="gallery-link" href="${e}">
         <img class="gallery-image"
         src="${o}"
         alt="${t}" /></a>
         <container class="details-container">
         <div class="details">
         <h3 class="details-title">Likes</h3>
         <p class="details-text">${i}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Views</h3>
         <p class="details-text">${u}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Comments</h3>
        <p class="details-text">${f}</p>
        </div>
        <div class="details">
        <h3 class="details-title">Downloads</h3>
        <p class="details-text">${m}</p>
        </div></container> 
        </li>`);c.innerHTML=r.join(""),a.refresh()}}function d(s){console.log(s),c.innerHTML="",y.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF"})}
//# sourceMappingURL=commonHelpers.js.map
