import{i as l,S as m}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function s(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const f=s();function y(){return f.span.classList.add("loader")}function c(){return f.span.classList.remove("loader")}function v(){const o=s();return o.container.innerHTML=""}const d="/goit-js-hw-12/assets/2-26327b7f.svg";function L(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${d}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function w(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${d}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function b(){l.warning({title:"Caution",message:"You forgot important data",position:"center"})}class S{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1}async getPhoto(){try{const e=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=21`);if(!e.ok)throw new Error(e.status);const r=await e.json();return r.hits.length<=0&&L(),r}catch(e){console.error(e),w(),removeLoader()}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get query(){return this.searchQuery}set query(e){return this.searchQuery=e}}function x(){new m(".gallery a",{captionsData:"alt",captionDelay:250})}const h=s();function q(o){const e=s();if(o.hits.length<=0)return g(),c();e.container.innerHTML=o.hits.map(r=>`   <li>
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
            </li>`).join(""),x(),E(),c()}function E(){h.pagBtn.classList.add("btn-showed")}function g(){h.pagBtn.classList.remove("btn-showed")}const p=s();p.form.addEventListener("submit",$);p.pagBtn.addEventListener("click",R);const a=new S;function $(o){if(o.preventDefault(),y(),v(),a.query=o.currentTarget.elements.delay.value.trim(),a.query==="")return b(),c(),g();a.getPhoto().then(e=>q(e)),o.currentTarget.reset()}function R(){console.log("message")}
//# sourceMappingURL=commonHelpers.js.map
