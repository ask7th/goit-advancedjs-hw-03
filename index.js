import{a as m,S as u,i as n}from"./assets/vendor-sgVy0kkG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="58027101-8436ffa8ff8504f480371d17b",g=i=>{const t={image_type:"photo",orientation:"horizontal",safesearch:!0,key:p,q:i};return m.get(d,{params:t}).then(s=>s.data)},l={loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},h=new u(".gallery a"),y=i=>{const t=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:o,comments:c,downloads:f})=>`
    <li class="gallery-card">

        <a href="${a}" class="gallery-link"><img class="gallery-img" src="${s}" alt="${e}" /></a>              

        <div class="box-info">
            <ul class="card-infor">
                <li class="item-infor">
                    <p class="item-infor-name">Likes</p>
                    <p class="item-infor-value">${r}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Views</p>
                    <p class="item-infor-value">${o}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Comments</p>
                    <p class="item-infor-value">${c}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Downloads</p>
                    <p class="item-infor-value">${f}</p>
                </li>
            </ul>
        </div>
    </li>
  `).join("");l.gallery.innerHTML=t,h.refresh()};function L(){l.gallery.innerHTML=""}function b(){l.loader.classList.remove("hidden")}function v(){l.loader.classList.add("hidden")}const P={form:document.querySelector(".form")},S=i=>{i.preventDefault();const{currentTarget:t}=i,s=t.elements["search-text"].value.trim();if(!s){n.warning({message:"The search field should be filled in!"}),t.reset();return}t.reset(),L(),b(),g(s).then(a=>{if(a.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(a.hits)}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{v()})};P.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
