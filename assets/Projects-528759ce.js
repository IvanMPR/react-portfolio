import{j as e}from"./index-e23d1485.js";import{F as N}from"./Footer-c822d1e2.js";import{F as d}from"./index.es-375a1ad7.js";import{e as v,g as P,h as S}from"./index-de425f2c.js";import{u as i,M as C,P as k}from"./Modal-f11d7de1.js";import{S as I,a as b,b as Z}from"./SectionContent-836bde1d.js";function w({imageSrc:t,title:r,alt:s,setIsZoomed:o,setZoomedImageSrc:c}){function a(n){o(l=>!l),c(n.target.src)}return e.jsx("img",{className:"project-left__image",src:t,title:r,alt:s,onClick:a})}function F(t){const{isZoomed:r,setIsZoomed:s,zoomedImageSrc:o,setZoomedImageSrc:c,currentImage:a}=i(),{shortTitle:n,imageSrc:l,title:j="Click to zoom the image",alt:m,fullTitle:x,demoHref:h,demoTitle:f="Link to live demo page",codeHref:u,codeTitle:p="Link to source code page",description:g}=t.project,{i:_}=t;return e.jsxs("div",{className:`project project-${n}`,style:{transform:`translateX(${100*(_-a)}%)`},children:[e.jsx("div",{className:"project-left",children:e.jsx("div",{className:"project-left__image-container wrapper",children:e.jsx(w,{imageSrc:l,title:j,alt:m,isZoomed:r,setIsZoomed:s,zoomedImageSrc:o,setZoomedImageSrc:c})})}),e.jsxs("div",{className:"project-right",children:[e.jsx("h3",{className:"project-right__title",children:x}),e.jsxs("div",{className:"project-right__container",children:[e.jsx("a",{rel:"noreferrer",target:"_blank",href:h,title:f,className:"project-right__container-link project-right__demo",children:"Demo"}),e.jsx("a",{rel:"noreferrer",href:u,target:"_blank",title:p,className:"project-right__container-link project-right__code",children:"Source code"})]}),e.jsx("p",{className:"project-right__description",children:g})]})]})}function z({dotNum:t,currentImage:r,setCurrentImage:s}){function o(){s(t)}return e.jsx("span",{className:`dot ${t===r?"dot-active":""}`,onClick:o})}function T(){const{currentImage:t,setCurrentImage:r,arrayOfProjects:s}=i();return e.jsx("div",{className:"dots-container",children:s.map((o,c)=>e.jsx(z,{dotNum:c,setCurrentImage:r,currentImage:t},c))})}function D(){const{arrayOfProjects:t,isZoomed:r,setIsZoomed:s,zoomedImageSrc:o,setZoomedImageSrc:c,currentImage:a,handleLeftArrowClick:n,handleRightArrowClick:l}=i();return e.jsxs("div",{className:"frame",children:[e.jsx("div",{className:"frame-arrow__left",onClick:n,children:e.jsx(d,{icon:v,className:"fa-solid",size:"5x"})}),e.jsx("div",{className:"frame-arrow__right",onClick:l,children:e.jsx(d,{icon:P,className:"fa-solid",size:"5x"})}),t.map((j,m)=>e.jsx(F,{project:j,i:m,currentImage:a,isZoomed:r,setIsZoomed:s,zoomedImageSrc:o,setZoomedImageSrc:c},m)),e.jsx(T,{})]})}function L(){const{heading:t}=i();return e.jsx("div",{className:"subtitle-text",children:e.jsx("p",{className:"subtitle-text__heading",children:t})})}function y({icon:t}){return e.jsx("div",{className:"subtitle-icon",children:e.jsx("img",{src:t.src,alt:t.alt,title:t.title,className:t.className})})}function A(){const{iconsSet:t}=i();return e.jsx("div",{className:"subtitle-icon__wrapper",children:t.map((r,s)=>e.jsx(y,{icon:r},s))})}function H(){return e.jsxs("div",{className:"subtitle",children:[e.jsx(L,{}),e.jsx(A,{})]})}function M(){const{isZoomed:t}=i();return t?e.jsx(C,{}):e.jsxs(I,{prefix:"projects",children:[e.jsx(b,{title:"Projects",icon:e.jsx(d,{icon:S,className:"section__title--icon"})}),e.jsxs(Z,{prefix:"projects",children:[e.jsx(H,{}),e.jsx(D,{})]})]})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(M,{})}),e.jsx(N,{})]})}export{q as default};
