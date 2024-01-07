var w=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var g=(e,t,r)=>(w(e,t,"read from private field"),r?r.call(e):t.get(e)),p=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};import{a as S,i as d,S as q}from"./assets/vendor-a65ea867.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function f(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn"),totalCount:document.querySelector(".js-count"),textRequest:document.querySelector(".js-request"),searchText:document.querySelector(".js-search-text")}}const c=f();function x(){return c.span.classList.add("loader")}function v(){return c.span.classList.remove("loader")}function C(){c.pagBtn.classList.add("btn-showed")}function m(){c.pagBtn.classList.remove("btn-showed")}function R(){c.searchText.classList.add("is-showed")}function y(){c.searchText.classList.remove("is-showed")}function E(){const e=f();return e.container.innerHTML=""}var l,u;class P{constructor(){p(this,l,"https://pixabay.com/api/");p(this,u,"41531809-f9219a766117007ff116a3463");this.searchQuery=null,this.page=1,this.itemCount=40,this.total=null}async getPhoto(){const r=(await S.get(`${g(this,l)}`,{params:{q:this.searchQuery,image_type:"photo",orientation:"horizontal",page:this.page,per_page:this.itemCount,key:g(this,u),safesearch:!0}})).data;return this.incrementPage(),this.total=r.totalHits,r}incrementPage(){this.page+=1}resetPage(){this.page=1}resetTotal(){this.total=null}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}l=new WeakMap,u=new WeakMap;function T(e){const t=f(),r=e.hits.map(a=>`   <li class="item">
            <a class="link" href="${a.largeImageURL}">
            <img
                class="img"
                src="${a.webformatURL}"
                alt="${a.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${a.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${a.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${a.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${a.downloads}</p>
                </div>
            </div> </a
            >
            </li>`).join("");t.container.insertAdjacentHTML("beforeend",r),R()}const b="/goit-js-hw-12/assets/2-26327b7f.svg";function $(){return d.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${b}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function j(){return d.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${b}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function k(){d.warning({title:"Caution",message:"You forgot important data",position:"center"})}function A(){d.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function B(){new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const i=f(),n=new P;i.form.addEventListener("submit",I);i.pagBtn.addEventListener("click",O);function I(e){if(e.preventDefault(),m(),y(),x(),E(),n.resetPage(),n.resetTotal(),n.query=e.currentTarget.elements.delay.value.trim(),n.query==="")return k(),v(),m(),y();L(),e.currentTarget.reset()}function O(){x(),L()}function L(){n.getPhoto().then(e=>{T(e),v(),B(),i.textRequest.textContent=`"${n.searchQuery}"`,i.totalCount.textContent=`"${n.total}"`,n.total>40&&C(),i.container.childElementCount<=0&&$(),(n.page-1)*40>=n.total&&i.container.childElementCount>1&&n.page>2&&(m(),A()),n.page>2&&window.scrollBy({top:i.container.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})}).catch(j)}
//# sourceMappingURL=commonHelpers.js.map
