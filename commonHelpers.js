var v=Object.defineProperty;var b=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var h=(e,t,r)=>(b(e,typeof t!="symbol"?t+"":t,r),r);import{i as c,a as L,S as w}from"./assets/vendor-3503c623.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function l(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn")}}const u=l();function g(){return u.span.classList.add("loader")}function p(){return u.span.classList.remove("loader")}function x(){u.pagBtn.classList.add("btn-showed")}function d(){u.pagBtn.classList.remove("btn-showed")}function E(){const e=l();return e.container.innerHTML=""}const m="/goit-js-hw-12/assets/2-26327b7f.svg";function S(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${m}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){return c.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${m}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function C(){c.warning({title:"Caution",message:"You forgot important data",position:"center"})}function R(){c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}class q{constructor(){h(this,"getPhoto",async()=>{try{const r=(await L.get(`https://pixabay.com/api/?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`)).data;return this.incrementPage(),this.total=r.totalHits,r}catch{$()}});this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.itemCount=40,this.orientation="horizontal",this.imageType="photo",this.total=null}incrementPage(){this.page+=1}resetPage(){this.page=1}resetTotal(){this.total=null}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}l();function P(e){const t=l(),r=e.hits.map(i=>`   <li class="item">
            <a class="link" href="${i.largeImageURL}">
            <img
                class="img"
                src="${i.webformatURL}"
                alt="${i.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${i.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${i.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${i.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${i.downloads}</p>
                </div>
            </div> </a
            >
            </li>`).join("");t.container.insertAdjacentHTML("beforeend",r)}function k(){new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=l();a.form.addEventListener("submit",T);a.pagBtn.addEventListener("click",j);const s=new q;function y(){s.getPhoto().then(e=>{P(e),p(),k(),a.container.childElementCount>19&&x(),a.container.childElementCount<=0&&S(),s.page*40>=s.total&&a.container.childElementCount>1&&s.page>2&&(d(),R()),s.page>2&&window.scrollBy({top:a.container.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})})}function T(e){if(e.preventDefault(),d(),g(),E(),s.resetPage(),s.resetTotal(),s.query=e.currentTarget.elements.delay.value.trim(),s.query==="")return C(),p(),d();y(),e.currentTarget.reset()}function j(){g(),y()}
//# sourceMappingURL=commonHelpers.js.map
