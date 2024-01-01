import{i as c,S as p}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function s(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const u=s();function m(){return u.span.classList.add("loader")}function f(){return u.span.classList.remove("loader")}function y(){const o=s();return o.container.innerHTML=""}const d="/goit-js-hw-12/assets/2-26327b7f.svg";function v(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${d}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function L(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${d}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function w(){c.warning({title:"Caution",message:"You forgot important data",position:"center"})}class b{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1}async getPhoto(){try{const e=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=21`);if(!e.ok)throw new Error(e.status);const r=await e.json();return r.hits.length<=0&&v(),r}catch(e){console.error(e),L(),removeLoader()}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get query(){return this.searchQuery}set query(e){return this.searchQuery=e}}function S(){new p(".gallery a",{captionsData:"alt",captionDelay:250})}const h=s();function x(o){const e=s();e.container.innerHTML=o.hits.map(r=>`   <li>
            <a class="link" href="${r.largeImageURL}">
            <img
                class="img"
                src="${r.webformatURL}"
                alt="${r.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${r.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${r.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${r.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${r.downloads}</p>
                </div>
            </div> </a
            >
            </li>`).join(""),S(),q(),f()}function q(){h.pagBtn.classList.add("btn-showed")}function E(){h.pagBtn.classList.remove("btn-showed")}const g=s();g.form.addEventListener("submit",$);g.pagBtn.addEventListener("click",R);const a=new b;function $(o){if(o.preventDefault(),m(),y(),a.query=o.currentTarget.elements.delay.value.trim(),a.query==="")return w(),f(),E();a.getPhoto().then(e=>x(e)),o.currentTarget.reset()}function R(){console.log("message")}
//# sourceMappingURL=commonHelpers.js.map
