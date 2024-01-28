import{S as L,i as v,a as b}from"./assets/vendor-990f3500.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const d=document.querySelector(".form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),r=document.querySelector(".loading-button"),F="https://pixabay.com/api/",o={query:"",apiKey:"41967229-af64f083e47c21f795887158a",orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:20,page:1},q=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",w);async function w(s){if(s.preventDefault(),u.innerHTML="",o.page=1,o.query=s.currentTarget.elements.serching.value.trim(),c.classList.remove("hidden"),!(!o.query&&o.query!==""))try{const{hits:t,totalHits:i}=await h(o);o.maxPage=Math.ceil(i/o.per_page),f(t,i),c.classList.add("hidden"),t.length>0&&t.length!==i?(S(r),r.addEventListener("click",m)):(v.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF"}),g(r))}catch(t){console.log(t)}finally{d.reset()}}async function h({query:s,page:t=1,per_page:i}){return await b.get(`${F}`,{params:{key:"41967229-af64f083e47c21f795887158a",q:s,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:i,page:t}}).then(({data:n})=>n)}function f(s){const t=s.map(({webformatURL:i,largeImageURL:n,tags:e,likes:a,views:l,comments:p,downloads:y})=>`<li class="gallery-item">
         <a class="gallery-link" href="${n}">
         <img class="gallery-image"
         src="${i}"
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
        <p class="details-text">${p}</p>
        </div>
        <div class="details">
        <h3 class="details-title">Downloads</h3>
        <p class="details-text">${y}</p>
        </div></container> 
        </li>`);u.insertAdjacentHTML("beforeend",t),q.refresh()}async function m(){o.page+=1,k();try{const{hits:s}=await h(o);f(s);const i=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"})}catch(s){console.log(s)}finally{x(),o.page===o.maxPage&&(g(),r.removeEventListener("click",m))}}function g(){r.classList.add("hidden")}function S(){r.classList.remove("hidden")}function x(){c.classList.add("hidden"),r.disabled=!1}function k(){c.classList.remove("hidden"),r.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map
