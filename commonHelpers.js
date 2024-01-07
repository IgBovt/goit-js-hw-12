import{a as x,i as l,S as v}from"./assets/vendor-a65ea867.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();function u(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),container:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader"),pagBtn:document.querySelector(".js-pag-btn"),totalCount:document.querySelector(".js-count"),textRequest:document.querySelector(".js-request"),searchText:document.querySelector(".js-search-text")}}const c=u();function g(){return c.span.classList.add("loader")}function p(){return c.span.classList.remove("loader")}function L(){c.pagBtn.classList.add("btn-showed")}function d(){c.pagBtn.classList.remove("btn-showed")}function S(){c.searchText.classList.add("is-showed")}function f(){c.searchText.classList.remove("is-showed")}function b(){const t=u();return t.container.innerHTML=""}class w{constructor(){this.BASE_URL="https://pixabay.com/api/",this.KEY="41531809-f9219a766117007ff116a3463",this.searchQuery="",this.page=1,this.itemCount=40,this.orientation="horizontal",this.imageType="photo",this.total=null}async getPhoto(){const a=(await x.get(`${this.BASE_URL}?key=${this.KEY}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.itemCount}&page=${this.page}`)).data;return this.incrementPage(),this.total=a.totalHits,a}incrementPage(){this.page+=1}resetPage(){this.page=1}resetTotal(){this.total=null}get query(){return this.searchQuery}set query(s){this.searchQuery=s}}function R(t){const s=u(),a=t.hits.map(r=>`   <li class="item">
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
            </li>`).join("");s.container.insertAdjacentHTML("beforeend",a),S()}const m="/goit-js-hw-12/assets/2-26327b7f.svg";function $(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${m}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function q(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${m}`,position:"center",title:"ERROR",message:"SERVER REQUEST IS WRONG"})}function C(){l.warning({title:"Caution",message:"You forgot important data",position:"center"})}function E(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function T(){new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const i=u(),o=new w;i.form.addEventListener("submit",j);i.pagBtn.addEventListener("click",P);function j(t){if(t.preventDefault(),d(),f(),g(),b(),o.resetPage(),o.resetTotal(),o.query=t.currentTarget.elements.delay.value.trim(),o.query==="")return C(),p(),d(),f();y(),t.currentTarget.reset()}function P(){g(),y()}function y(){o.getPhoto().then(t=>{R(t),p(),T(),i.textRequest.textContent=`"${o.searchQuery}"`,i.totalCount.textContent=`"${o.total}"`,o.total>40&&L(),i.container.childElementCount<=0&&$(),(o.page-1)*40>=o.total&&i.container.childElementCount>1&&o.page>2&&(d(),E()),o.page>2&&window.scrollBy({top:i.container.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"})}).catch(q)}
//# sourceMappingURL=commonHelpers.js.map
