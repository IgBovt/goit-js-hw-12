import{i as c}from"./assets/vendor-4d6948b9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function s(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const u=s();function h(){return u.span.classList.add("loader")}function g(){return u.span.classList.remove("loader")}function p(){const n=s();return n.container.innerHTML=""}const f="/goit-js-hw-12/assets/2-26327b7f.svg";function m(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${f}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function y(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${f}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function v(){c.warning({title:"Caution",message:"You forgot important data",position:"center"})}class w{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1}async getPhoto(){try{const e=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=21`);if(!e.ok)throw new Error(e.status);const r=await e.json();return r.hits.length<=0&&m(),r}catch(e){console.error(e),y(),removeLoader()}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get query(){return this.searchQuery}set query(e){return this.searchQuery=e}}const L=s();function q(n){const e=s();return e.container.innerHTML=n.hits.map(r=>`   <li>
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
            </li>`).join(""),S(),g()}function S(){L.pagBtn.classList.add("btn-showed")}const d=s();d.form.addEventListener("submit",b);d.pagBtn.addEventListener("click",x);const a=new w;function b(n){if(n.preventDefault(),h(),p(),a.query=n.currentTarget.elements.delay.value.trim(),a.query==="")return v();a.getPhoto().then(e=>q(e)),n.currentTarget.reset()}function x(){console.log("message")}
//# sourceMappingURL=commonHelpers.js.map
