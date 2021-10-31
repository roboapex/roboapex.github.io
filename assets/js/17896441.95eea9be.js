"use strict";(self.webpackChunkroboapex_github_io=self.webpackChunkroboapex_github_io||[]).push([[918],{9362:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(7294),l=a(6010),i=a(3783),s=a(6742),r=a(4973);const o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(3773);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:i}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,m.J)(i),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,d.Jo)(i),u=null!=r?r:(p=o).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:o.label,to:u.path,onClick:()=>s(o.name)})))}const h=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)};var E=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(6146),k=a(7682);const Z="lastUpdated_13-_";function L(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k.Z,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:i,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||i)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i})))}function T(e){const{content:t}=e,{metadata:a}=t,{editUrl:i,lastUpdatedAt:s,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(i||s||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(L,{tags:c}),u&&n.createElement(U,{editUrl:i,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}var C=a(7588);const M="tocCollapsible_1PrD",y="tocCollapsibleButton_2O1e",w="tocCollapsibleContent_2Ydz",A="tocCollapsibleExpanded_3GYr";var x=a(5002);function H(e){let{toc:t,className:a,minHeadingLevel:i,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(M,{[A]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",y),onClick:c},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:w,collapsed:o},n.createElement(x.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:s})))}var B=a(6159);const S="docItemContainer_33ec",D="docItemCol_3FnS",F="tocMobile_3Hoh";function O(e){const{content:t,versionMetadata:a}=e,{metadata:s,frontMatter:r}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:g,toc_max_heading_level:p}=r,{description:b,title:f}=s,_=!u&&void 0===t.contentTitle,N=(0,i.Z)(),k=!v&&t.toc&&t.toc.length>0,Z=k&&("desktop"===N||"ssr"===N);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:f,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[D]:!v})},n.createElement(h,{versionMetadata:a}),n.createElement("div",{className:S},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),k&&n.createElement(H,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:p,className:(0,l.Z)(m.kM.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},_&&n.createElement(B.N,null,f),n.createElement(t,null)),n.createElement(T,e)),n.createElement(o,{metadata:s}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(C.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:p,className:m.kM.docs.docTocDesktop}))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(4973),i=a(7462),s=a(6010);const r="iconEdit_2_ui",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(r,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(3773);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),i=a(6010),s=a(4973),r=a(3773);const o="anchorWithStickyNavbar_31ik",c="anchorWithHideOnScrollNavbar_3R7-",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,i.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},7588:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),i=a(6010),s=a(5002);const r="tableOfContents_35-E";const o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,i.Z)(r,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294),i=a(3773);function s(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?l.createElement("ul",{className:i?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function r(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,i.LU)(),v=null!=c?c:u.tableOfContents.minHeadingLevel,g=null!=d?d:u.tableOfContents.maxHeadingLevel,p=(0,i.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:g}),h=(0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:g}}),[r,o,v,g]);return(0,i.Si)(h),l.createElement(s,(0,n.Z)({toc:p,className:a,linkClassName:r},m))}},7211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),i=a(6742);const s="tag_1Okp",r="tagRegular_3MiF",o="tagWithCount_1HU1";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(s,{[r]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},7682:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),i=a(4973),s=a(7211);const r="tags_2ga9",o="tag_11ep";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);