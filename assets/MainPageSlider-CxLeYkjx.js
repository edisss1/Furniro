import{j as e,L as m,r as c,q as u,g as f,o as b,h as j}from"./index-DG0TFJNY.js";const y=()=>e.jsxs("div",{className:"max-w-[430px] flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"font-bold text-[40px] text-[#3A3A3A]",children:["50+ Beautiful room ",e.jsx("br",{})," inspiration"]}),e.jsx("p",{className:"text-[1rem] text-[#616161]",children:"Our designer already made a lot of beautiful prototype of rooms that inspire you"})]}),e.jsx(m,{"aria-label":"Link to shop page",to:"/shop",className:"text-white  max-w-[11rem] bg px-8 py-3 bg-primary font-bold",children:"Explore More"})]}),w="data:image/svg+xml,%3csvg%20width='9'%20height='16'%20viewBox='0%200%209%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.00006%201L8.00006%208L1.00006%2015'%20stroke='%23B88E2F'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20width='20'%20height='14'%20viewBox='0%200%2020%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%207H1M19%207L13%201M19%207L13%2013'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",k=()=>{const[i,x]=c.useState(0),[a,g]=c.useState([]);c.useEffect(()=>{(async()=>{const s=u(f(j,"sliderImages"));return b(s,o=>{const l=[];o.forEach(r=>{const n=r.data();l.push({...n,id:r.id})}),l.sort((r,n)=>r.order-n.order),g(l)},o=>{console.error("Error fetching slider images ",o)})})()},[]);const p=()=>{x(t=>(t+1)%a.length)},h=()=>{const t=[...a],s=t.slice(i),d=t.slice(0,i);return[...s,...d]};return e.jsxs("div",{className:"ps-[10%] max-md:hidden max-lg:flex-col max-lg:gap-5 max-lg:justify-center max-lg:items-center  bg-secondary flex justify-center items-center relative overflow-hidden py-8 ",children:[e.jsx(y,{}),e.jsxs("div",{className:"flex gap-6 overflow-hidden ",children:[h().map((t,s)=>e.jsxs("div",{className:`relative transition-transform duration-500 ${s===0?"transform scale-100":"transform scale-95"} ${s===a.length-1?"-mr-24":""}`,children:[e.jsx("img",{src:t.url,alt:"",className:`bg-white block ${s!==0?"h-[90%]":"h-[100%]"} object-contain`}),e.jsxs("div",{className:"absolute bottom-[10%] left-[5%] grid grid-cols-3 items-end ",children:[e.jsxs("div",{className:` bg-[#FFFFFF] bg-opacity-50 ps-6 max-lg:ps-2 py-6 max-lg:py-2 pe-4 max-lg:pe-1 col-span-2 ${s!==0?"hidden opacity-0":"block opacity-100 transition-opacity duration-500"}`,children:[e.jsx("p",{className:"max-xl:text-sm",children:t.imageSubHeader}),e.jsx("h3",{className:"font-bold text-[1.7rem] max-xl:text-base text-[#3A3A3A]",children:t.imageHeader})]}),e.jsx("div",{className:`aspect-square w-[3rem] bg-primary flex justify-center items-center ${s!==0?"hidden opacity-0":"block opacity-100 transition-opacity duration-500"} `,children:e.jsx(m,{"aria-label":"Blank link",to:"/",children:e.jsx("img",{src:v,alt:""})})})]})]},t.id)),e.jsx("button",{className:"w-fit h-fit top-[50%] right-[5%] transform -translate-y-1/2 rounded-full z-30 bg-white absolute py-4 px-4 flex justify-center items-center",onClick:p,children:e.jsx("img",{src:w,className:"w-[14px] h-[14px]",alt:""})})]}),e.jsx("div",{className:"absolute bottom-8 flex justify-center w-full z-20 left-44 gap-4",children:a.map((t,s)=>e.jsx("div",{className:`w-3 h-3 rounded-full transition-all duration-300 ${s===i?"bg-primary outline outline-offset-4 outline-primary outline-1 ":"bg-gray-300 "}`},s))})]})};export{k as default};