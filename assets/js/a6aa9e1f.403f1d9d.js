"use strict";(self.webpackChunkroboapex_github_io=self.webpackChunkroboapex_github_io||[]).push([[89],{6165:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),r=a(6010),n=a(3938),s=a(6742);const i="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",c="sidebarItem_2UVv",g="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";var p=a(4973);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}const h=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},4428:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),r=a(2263),n=a(6165),s=a(4884),i=a(6742),m=a(4973);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.Z,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(i.Z,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(3773);const g=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:m}}=(0,r.Z)(),{blogDescription:g,blogTitle:d,permalink:p}=t,u="/"===p?m:d;return l.createElement(n.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},4884:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(4996),o=a(3773),c=a(6845),g=a(6146);const d="blogPostTitle_GeHD",p="blogPostData_291c",u="blogPostDetailsFull_3kfx";var h=a(7682);const E="image_1yU8";const b=function(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:E,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},v="authorCol_1R69";function _(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>{var n;return l.createElement("div",{className:(0,r.Z)("col col--6",v),key:t},l.createElement(b,{author:{...e,imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL}}))})))}const N=function(e){var t;const a=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:E}=(0,m.C)(),{children:b,frontMatter:v,assets:N,metadata:Z,truncated:f,isBlogPostPage:k=!1}=e,{date:P,formattedDate:T,permalink:w,tags:M,readingTime:x,title:L,editUrl:U,authors:y}=Z,I=null!=(t=N.image)?t:v.image,C=!k&&f,R=M.length>0;return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=k?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:d,itemProp:"headline"},k?L:l.createElement(i.Z,{itemProp:"url",to:w},L)),l.createElement("div",{className:(0,r.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==x&&l.createElement(l.Fragment,null," \xb7 ",a(x))),l.createElement(_,{authors:y,assets:N}))})(),I&&l.createElement("meta",{itemProp:"image",content:E(I,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(n.Zo,{components:c.Z},b)),(R||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[u]:k})},R&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(h.Z,{tags:M})),k&&U&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:U})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},l.createElement(i.Z,{to:Z.permalink,"aria-label":"Read more about "+L},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(4973),n=a(7462),s=a(6010);const i="iconEdit_2_ui",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(3773);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7211:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010),n=a(6742);const s="tag_1Okp",i="tagRegular_3MiF",m="tagWithCount_1HU1";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},7682:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010),n=a(4973),s=a(7211);const i="tags_2ga9",m="tag_11ep";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);