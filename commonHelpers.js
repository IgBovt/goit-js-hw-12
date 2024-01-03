import{i as l,S as y}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const u=c();function h(){return u.span.classList.add("loader")}function g(){return u.span.classList.remove("loader")}function v(){u.pagBtn.classList.add("btn-showed")}function d(){u.pagBtn.classList.remove("btn-showed")}function w(){const n=c();return n.container.innerHTML=""}const p="/goit-js-hw-12/assets/2-26327b7f.svg";function L(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${p}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function b(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${p}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function E(){l.warning({title:"Caution",message:"You forgot important data",position:"center"})}function x(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}class S{constructor(){this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.itemCount=40,this.orientation="horizontal",this.imageType="photo",this.total=null}async getPhoto(){try{const t=await fetch(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`);if(!t.ok)throw new Error(t.status);const s=await t.json();return this.incrementPage(),this.total=s.totalHits,s}catch{b()}}incrementPage(){this.page+=1}resetPage(){this.page=1}resetTotal(){this.total=null}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}c();function $(n){const t=c(),s=n.hits.map(o=>`   <li class="item">
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
            </li>`).join("");t.container.insertAdjacentHTML("beforeend",s)}function C(){new y(".gallery a",{captionsData:"alt",captionDelay:250})}const a=c();a.form.addEventListener("submit",R);a.pagBtn.addEventListener("click",q);const i=new S;function m(){i.getPhoto().then(n=>{$(n),g(),C(),a.container.childElementCount>19&&v(),a.container.childElementCount<=0&&L(),i.page*40>=i.total&&a.container.childElementCount>1&&(d(),x()),i.page>2&&window.scrollBy({top:a.container.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})})}function R(n){if(n.preventDefault(),d(),h(),w(),i.resetPage(),i.resetTotal(),i.query=n.currentTarget.elements.delay.value.trim(),i.query==="")return E(),g(),d();m(),n.currentTarget.reset()}function q(){h(),m()}
//# sourceMappingURL=commonHelpers.js.map
