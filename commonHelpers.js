import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function f(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=f(t);fetch(t.href,r)}})();function s(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const c="/goit-js-hw-12/assets/2-26327b7f.svg";function p(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${c}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function h(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${c}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}const u=s();function m(){return u.span.classList.add("loader")}function g(){return u.span.classList.remove("loader")}function y(){const o=s();return o.container.innerHTML=""}function v(){new d(".gallery a",{captionsData:"alt",captionDelay:250})}const L="41531809-f9219a766117007ff116a3463",i=s();i.form.addEventListener("submit",b);function b(o){o.preventDefault(),m(),y();const e=o.currentTarget.elements.delay.value.trim();x(e),o.currentTarget.reset()}function x(o){fetch(`https://pixabay.com/api/?key=${L}&q=${o}&image_type=photo&orientation=horizontal&per_page=21`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length<=0&&p(),S(e),g(),v(),i.pagBtn.classList.add("btn-showed")}).catch(e=>h())}function S(o){return i.container.innerHTML=o.hits.map(e=>`   <li>
            <a class="link" href="${e.largeImageURL}">
            <img
                class="img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${e.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${e.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${e.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${e.downloads}</p>
                </div>
            </div> </a
            >
            </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
