var v=Object.defineProperty;var L=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>(L(e,typeof t!="symbol"?t+"":t,n),n);import{i as l,a as S,S as b}from"./assets/vendor-3503c623.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function u(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn"),totalCount:document.querySelector(".js-count"),textRequest:document.querySelector(".js-request"),searchText:document.querySelector(".js-search-text")}}const c=u();function p(){return c.span.classList.add("loader")}function m(){return c.span.classList.remove("loader")}function w(){c.pagBtn.classList.add("btn-showed")}function d(){c.pagBtn.classList.remove("btn-showed")}function C(){c.searchText.classList.add("is-showed")}function g(){c.searchText.classList.remove("is-showed")}function E(){const e=u();return e.container.innerHTML=""}const y="/goit-js-hw-12/assets/2-26327b7f.svg";function R(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${y}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${y}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function q(){l.warning({title:"Caution",message:"You forgot important data",position:"center"})}function T(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}class j{constructor(){f(this,"getPhoto",async()=>{try{const n=(await S.get(`${this.BASEURL}?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`)).data;return this.incrementPage(),this.total=n.totalHits,n}catch{$()}});this.BASEURL="https://pixabay.com/api/",this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.itemCount=40,this.orientation="horizontal",this.imageType="photo",this.total=null}incrementPage(){this.page+=1}resetPage(){this.page=1}resetTotal(){this.total=null}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}function P(e){const t=u(),n=e.hits.map(i=>`   <li class="item">
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
            </li>`).join("");t.container.insertAdjacentHTML("beforeend",n)}function k(){new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=u();a.form.addEventListener("submit",A);a.pagBtn.addEventListener("click",B);const s=new j;function x(){s.getPhoto().then(e=>{P(e),m(),k(),a.textRequest.textContent=`"${s.searchQuery}"`,a.totalCount.textContent=`"${s.total}"`,a.container.childElementCount>39&&w(),a.container.childElementCount<=0&&R(),s.page*40>=s.total&&a.container.childElementCount>1&&s.page>2&&(d(),T()),s.page>2&&window.scrollBy({top:a.container.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})})}function A(e){if(e.preventDefault(),d(),g(),p(),E(),s.resetPage(),s.resetTotal(),s.query=e.currentTarget.elements.delay.value.trim(),s.query==="")return q(),m(),d(),g();C(),x(),e.currentTarget.reset()}function B(){p(),x()}
//# sourceMappingURL=commonHelpers.js.map
