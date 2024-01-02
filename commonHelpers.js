import{i as u,S as w}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();function a(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const f=a();function d(){return f.span.classList.add("loader")}function l(){return f.span.classList.remove("loader")}function L(){const r=a();return r.container.innerHTML=""}const h="/goit-js-hw-12/assets/2-26327b7f.svg";function b(){return u.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${h}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function x(){return u.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${h}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function S(){u.warning({title:"Caution",message:"You forgot important data",position:"center"})}class g{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.total=null}async getPhoto(){try{const e=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=40&page=${this.page}`);if(!e.ok)throw new Error(e.status);const s=await e.json();return s.hits.length<=0&&b(),this.incrementPage(),this.total=s.totalHits,s}catch(e){console.error(e),x(),removeLoader()}}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get query(){return this.searchQuery}set query(e){return this.searchQuery=e}}function $(){new w(".gallery a",{captionsData:"alt",captionDelay:250})}const p=a();new g;function m(r){const e=a();if(r.hits.length<=0)return y(),l();const s=r.hits.map(o=>`   <li>
            <a class="link" href="${o.largeImageURL}">
            <img
                class="img"
                src="${o.webformatURL}"
                alt="${o.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${o.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${o.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${o.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${o.downloads}</p>
                </div>
            </div> </a
            >
            </li>`).join("");e.container.insertAdjacentHTML("beforeend",s),$(),q(),l()}function q(){p.pagBtn.classList.add("btn-showed")}function y(){p.pagBtn.classList.remove("btn-showed")}const v=a();v.form.addEventListener("submit",E);v.pagBtn.addEventListener("click",R);const i=new g;function E(r){if(r.preventDefault(),d(),L(),i.resetPage(),i.query=r.currentTarget.elements.delay.value.trim(),i.query==="")return S(),l(),y();i.getPhoto().then(e=>m(e)),r.currentTarget.reset()}function R(){d(),i.getPhoto().then(r=>m(r))}
//# sourceMappingURL=commonHelpers.js.map
