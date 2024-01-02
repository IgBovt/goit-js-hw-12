import{i as d,S as y}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();function s(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const l=s();function g(){return l.span.classList.add("loader")}function f(){return l.span.classList.remove("loader")}function v(){l.pagBtn.classList.add("btn-showed")}function h(){l.pagBtn.classList.remove("btn-showed")}function w(){const r=s();return r.container.innerHTML=""}const p="/goit-js-hw-12/assets/2-26327b7f.svg";function L(){return d.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${p}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function b(){return d.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${p}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function x(){d.warning({title:"Caution",message:"You forgot important data",position:"center"})}class E{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.itemCount=40,this.orientation="horizontal",this.imageType="photo"}async getPhoto(){try{const t=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`);if(!t.ok)throw new Error(t.status);const i=await t.json();return this.incrementPage(),i}catch{b()}}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}s();function S(r){const t=s(),i=r.hits.map(o=>`   <li>
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
            </li>`).join("");t.container.insertAdjacentHTML("beforeend",i)}function $(){new y(".gallery a",{captionsData:"alt",captionDelay:250})}const c=s();c.form.addEventListener("submit",R);c.pagBtn.addEventListener("click",q);const a=new E;function m(){a.getPhoto().then(r=>{S(r),f(),$(),c.container.childElementCount>19&&v(),c.container.childElementCount<=0&&(L(),f())})}function R(r){if(r.preventDefault(),h(),g(),w(),a.resetPage(),a.query=r.currentTarget.elements.delay.value.trim(),a.query==="")return x(),f(),h();m(),r.currentTarget.reset()}function q(){g(),m()}
//# sourceMappingURL=commonHelpers.js.map
