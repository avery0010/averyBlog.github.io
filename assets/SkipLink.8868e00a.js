import{j as c,m as p,n as u,p as l,i as o}from"./app.96a1d48d.js";var d=c({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(s){const r=p(),t=u();l(()=>r.path,()=>t.value.focus());const a=({target:i})=>{const e=document.querySelector(i.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};return()=>[o("span",{ref:t,tabindex:"-1"}),o("a",{href:`#${s.content}`,class:"skip-link sr-only",onClick:a},"Skip to content")]}});export{d as S};
