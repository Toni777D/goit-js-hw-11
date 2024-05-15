import{S as m,i}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=t=>t.map(({webformatURL:s,largeImageURL:o,tags:l,likes:e,views:r,comments:a,downloads:n})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${l}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes">Likes: ${e}</small>
        <small class="text-body-views">Views: ${r}</small>
        <small class="text-body-comments">Comments: ${a}</small>
        <small class="text-body-downloads">Dowloads: ${n}</small>
    </div>
 
    </li>s
`).join("");new m(".gallery a",{captionsData:"alt",captionDelay:250});const d="https://pixabay.com/api/",y="43896740-362a21d10e9d41ec216c05f15",f=t=>{const s=new URLSearchParams({key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(o=>(o.ok||i.error({title:"Sorry",message:"there are no images matching your search query. Please try again!"}),o.json()))},c=document.querySelector(".js-gallery"),h=document.querySelector(".js-search-form");document.querySelector(".js-loader");function p(t){t.preventDefault(),t.target.elements.searchKeyword.value.trim()===""&&(c.innerHTML="",t.target.reset(),i.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3}))}c.innerHTML="";f(searchQuery).then(t=>{c.innerHTML=u(t.results),console.log(t)}).catch(t=>console.log(t));h.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
