import{l as r,r as l,j as a}from"./index-CPdV1hel.js";import{P as n}from"./ProductCard-DQYhv7Li.js";const g=({currentProduct:e})=>{const{data:t,isLoading:i}=r(e?.category),[d,o]=l.useState([]),c=4;return l.useEffect(()=>{if(!i&&t&&t.length>0&&e){const s=t.filter(m=>m.docId!==e.docId).sort(()=>.5-Math.random()).slice(0,c);o(s)}},[t,e,i]),a.jsxs("div",{className:"flex flex-col items-center mt-[10%]",children:[a.jsx("h1",{className:"font-medium text-2xl",children:"Related Products"}),a.jsx("div",{className:"grid grid-cols-4 gap-8 max-lg:grid-cols-2 mt-6",children:d.map(s=>a.jsx(n,{id:s.docId,title:s.name,smallDescription:s.smallDescription,imgURL:s.imageURL,price:s.price},s.docId))})]})};export{g as default};