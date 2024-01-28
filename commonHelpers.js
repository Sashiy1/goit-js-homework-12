import{S as L,i as v,a as b}from"./assets/vendor-990f3500.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const d=document.querySelector(".form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),o=document.querySelector(".loading-button"),F="https://pixabay.com/api/",i={query:"",apiKey:"41967229-af64f083e47c21f795887158a",orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:3,page:1},q=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",x);async function x(s){if(s.preventDefault(),u.innerHTML="",i.page=1,i.query=s.currentTarget.elements.serching.value.trim(),c.classList.remove("hidden"),!(!i.query&&i.query!==""))try{const{hits:t,totalHits:r}=await f(i);i.maxPage=Math.ceil(r/i.per_page),h(t,r),c.classList.add("hidden"),t.length>0&&t.length!==r?(S(o),o.addEventListener("click",m)):(v.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF"}),p(o))}catch(t){console.log(t)}finally{d.reset()}}async function f({query:s,page:t=1,per_page:r}){return await b.get(`${F}`,{params:{key:"41967229-af64f083e47c21f795887158a",q:s,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:r,page:t}}).then(({data:n})=>n)}function h(s){const t=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:a,views:l,comments:g,downloads:y})=>`<li class="gallery-item">
         <a class="gallery-link" href="${n}">
         <img class="gallery-image"
         src="${r}"
         alt="${e}" /></a>
         <container class="details-container">
         <div class="details">
         <h3 class="details-title">Likes</h3>
         <p class="details-text">${a}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Views</h3>
         <p class="details-text">${l}</p>
         </div>
         <div class="details">
         <h3 class="details-title">Comments</h3>
        <p class="details-text">${g}</p>
        </div>
        <div class="details">
        <h3 class="details-title">Downloads</h3>
        <p class="details-text">${y}</p>
        </div></container> 
        </li>`);u.insertAdjacentHTML("beforeend",t),q.refresh()}async function m(){i.page+=1,k();try{const{hits:s}=await f(i);h(s)}catch(s){console.log(s)}finally{w(),i.page===i.maxPage&&(p(),o.removeEventListener("click",m))}}function p(){o.classList.add("hidden")}function S(){o.classList.remove("hidden")}function w(){c.classList.add("hidden"),o.disabled=!1}function k(){c.classList.remove("hidden"),o.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map
