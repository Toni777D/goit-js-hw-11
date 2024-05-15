import"./assets/vendor-86291ea8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i="https://pixabay.com/api/",n="43896740-362a21d10e9d41ec216c05f15",m=r=>{const s=new URLSearchParams({key:n,q:r,image_type:photo,orientation:horizontal,safesearch:!0});return fetch(`${i}?${s}`).then(o=>(o.ok||iziToast.error({title:"Sorry",message:"there are no images matching your search query. Please try again!"}),o.json()))},u=r=>r.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:l,downloads:c})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${a}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes">Likes: ${e}</small>
        <small class="text-body-views">Views: ${t}</small>
        <small class="text-body-comments">Comments: ${l}</small>
        <small class="text-body-downloads">Dowloads: ${c}</small>
    </div>
 
    </li>s
`).join(""),d=document.querySelector(".js-gallery");document.querySelector(".js-search-form");document.querySelector(".js-loader");m().then(r=>{d.innerHTML=u(r.hits)}).catch(r=>console.log(r));
//# sourceMappingURL=commonHelpers.js.map
