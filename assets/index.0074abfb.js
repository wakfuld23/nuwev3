var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&s(e,a,t[a]);return e},m=(e,l)=>t(e,a(l));import{R as o,L as u,r as i,a as p,b as E,B as h,S as g,c as b}from"./vendor.7e41de1f.js";var _="_header_ix18c_1";const d=({setAuth:e,isAuth:t})=>o.createElement("header",{className:_},o.createElement("h3",null,o.createElement("i",{className:"fab fa-github-alt"})),o.createElement("nav",null,o.createElement("ul",null,t&&o.createElement("li",null,o.createElement(u,{to:"login",onClick:()=>e(!1)},"Logout")),o.createElement("li",null,o.createElement("a",{href:"https://github.com/abelfubu",target:"_blank"},o.createElement("i",{className:"fab fa-github-alt"}))),o.createElement("li",null,o.createElement("a",{href:"https://www.linkedin.com/in/abelfubu/",target:"_blank"},o.createElement("i",{className:"fab fa-linkedin"}))),o.createElement("li",null,o.createElement("a",{href:"https://twitter.com/abelfubu",target:"_blank"},o.createElement("i",{className:"fab fa-twitter-square"}))))));var v="_label_okhk2_1",f="_input_okhk2_5";const N=({type:e,onChange:t,value:a,name:l,label:n})=>o.createElement(o.Fragment,null,o.createElement("label",{className:v,htmlFor:"github-user"},n),o.createElement("input",{className:f,type:e,onChange:t,name:l,value:a,id:"github-user"}));var w="_header_8x90g_1",y="_login_8x90g_8",x="_form_8x90g_14",k="_button_8x90g_23";const C=({setAuth:e,history:t})=>{const[a,l]=i.exports.useState({email:"",password:""}),n=i.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>m(c({},e),{[t]:a})))}),[]),r=i.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return o.createElement("section",{className:y},o.createElement("form",{className:x,onSubmit:r},o.createElement("h1",{className:w},"Login"),o.createElement(N,{label:"Email",value:a.email,type:"email",name:"email",onChange:n}),o.createElement(N,{label:"Password",value:a.password,type:"password",name:"password",onChange:n}),o.createElement("button",{className:k},"LOGIN"),o.createElement(u,{to:"/register"},"Not registered yet - Go to sign up")))};var A="_header_vao77_1",S="_register_vao77_8",O="_form_vao77_14",j="_button_vao77_23";const P=({setAuth:e,history:t})=>{const[a,l]=i.exports.useState({email:"",password:"",username:""}),n=i.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>m(c({},e),{[t]:a})))}),[]),r=i.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return o.createElement("section",{className:S},o.createElement("form",{className:O,onSubmit:r},o.createElement("h1",{className:A},"Register"),o.createElement(N,{label:"Email",value:a.email,type:"email",name:"email",onChange:n}),o.createElement(N,{label:"Username",value:a.username,type:"username",name:"username",onChange:n}),o.createElement(N,{label:"Password",value:a.password,type:"password",name:"password",onChange:n}),o.createElement("button",{className:j},"REGISTER"),o.createElement(u,{to:"/login"},"Already registered? - Go to sign in")))};var G="_link_55vvs_1",I="_repoCard_55vvs_11",R="_language_55vvs_29",F="_repoId_55vvs_33";const L=({repo:e})=>o.createElement("a",{className:G,href:e.html_url,target:"_blank"},o.createElement("div",{className:I},o.createElement("h3",null,e.name),e.language&&o.createElement("p",{className:R},e.language),o.createElement("p",{className:F},"ID: ",e.id)));var D="_header_133cp_1",T="_grid_133cp_7";const U=({repos:e})=>o.createElement(o.Fragment,null,o.createElement("h2",{className:D},"Repos"),o.createElement("section",{className:T},e.map(((e,t)=>o.createElement(L,{key:t,repo:e})))));var B="_user_1nr1o_1";const $=({user:e})=>o.createElement("section",{className:B},o.createElement("img",{src:e.avatar_url,alt:"Github Profile"}),o.createElement("div",{className:"content"},o.createElement("a",{href:e.html_url,target:"_blank"},o.createElement("h1",null,e.login.substring(0,1).toUpperCase()+e.login.substring(1))),o.createElement("h3",null,e.bio),o.createElement("p",null,"📙 Repositories"),o.createElement("h3",null,e.public_repos),o.createElement("p",null,"🤟 Name"),o.createElement("h3",null,e.name),o.createElement("p",null,"💻 Company"),o.createElement("h3",null,e.company),o.createElement("p",null,"🌍 Location"),o.createElement("h3",null,e.location),o.createElement("p",null,"🕵️‍♂️ Followers"),o.createElement("h3",null,e.followers))),q=()=>{const[e,t]=i.exports.useState(null),[a,l]=i.exports.useState("abelfubu"),[n,r]=i.exports.useState(null);i.exports.useEffect((()=>{const e=setTimeout((async()=>{if(!a)return;const e=await fetch(`https://api.github.com/users/${a}/repos?per_page=200`),n=await fetch(`https://api.github.com/users/${a}`);t(await e.json()),r(await n.json()),l("")}),400);return()=>clearTimeout(e)}),[a]);const s=i.exports.useCallback((e=>{l(e.currentTarget.value)}),[]);return o.createElement("div",{className:"App"},o.createElement(N,{label:"Github's username",type:"text",onChange:s,value:a}),(null==e?void 0:e.length)&&n?o.createElement(o.Fragment,null,o.createElement($,{user:n}),o.createElement(U,{repos:e})):o.createElement("h1",null,"User not found..."))},M=({children:e,isAuthenticated:t})=>o.createElement(p,{render:({location:a})=>t?e:o.createElement(E,{to:{pathname:"/login"}})});function z(){const[e,t]=i.exports.useState(!1);return o.createElement(h,null,o.createElement(d,{setAuth:t,isAuth:e}),o.createElement(g,null,o.createElement(p,{exact:!0,path:"/login",render:e=>o.createElement(C,c({setAuth:t},e))}),o.createElement(p,{exact:!0,path:"/register",render:e=>o.createElement(P,c({setAuth:t},e))}),o.createElement(M,{isAuthenticated:e},o.createElement(p,{exact:!0,path:"/github",component:q}))))}b.render(o.createElement(o.StrictMode,null,o.createElement(z,null)),document.getElementById("root"));
