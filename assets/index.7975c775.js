var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,c=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&s(e,a,t[a]);return e},m=(e,l)=>t(e,a(l));import{R as o,a as u,b as i,L as p,r as E,B as h,S as g,c as b}from"./vendor.7e41de1f.js";const _=({children:e,isAuthenticated:t})=>o.createElement(u,{render:({location:a})=>t?e:o.createElement(i,{to:{pathname:"/login"}})});var d="_header_ix18c_1";const f=({setAuth:e,isAuth:t})=>o.createElement("header",{className:d},o.createElement("h3",null,o.createElement("i",{className:"fab fa-github-alt"})),o.createElement("nav",null,o.createElement("ul",null,t&&o.createElement("li",null,o.createElement(p,{to:"login",onClick:()=>e(!1)},"Logout")),o.createElement("li",null,o.createElement("a",{href:"https://github.com/abelfubu",target:"_blank"},o.createElement("i",{className:"fab fa-github-alt"}))),o.createElement("li",null,o.createElement("a",{href:"https://www.linkedin.com/in/abelfubu/",target:"_blank"},o.createElement("i",{className:"fab fa-linkedin"}))),o.createElement("li",null,o.createElement("a",{href:"https://twitter.com/abelfubu",target:"_blank"},o.createElement("i",{className:"fab fa-twitter-square"}))))));var v="_input_4mr9y_1";const y=({type:e,onChange:t,value:a,name:l,label:r})=>o.createElement(o.Fragment,null,o.createElement("label",{htmlFor:"github-user"},r),o.createElement("input",{className:v,type:e,onChange:t,name:l,value:a,id:"github-user"}));var N="_repoCard_p5ael_1",w="_language_p5ael_18",x="_repoId_p5ael_22";const C=({repo:e})=>o.createElement("div",{className:N},o.createElement("h3",null,e.name),e.language&&o.createElement("p",{className:w},e.language),o.createElement("p",{className:x},"ID: ",e.id));var k="_header_1srue_1",A="_grid_1srue_7";const S=({repos:e})=>o.createElement(o.Fragment,null,o.createElement("h2",{className:k},"Repos"),o.createElement("section",{className:A},e.map(((e,t)=>o.createElement(C,{key:t,repo:e})))));var O="_user_dzrfi_1";const P=({user:e,count:t})=>o.createElement("section",{className:O},o.createElement("img",{src:e.avatar_url,alt:"Github Profile"}),o.createElement("div",{className:"content"},o.createElement("h1",null,e.login.toUpperCase()),o.createElement("p",null,"📙 Repositories: ",t),o.createElement("p",null,"👨‍🎓 Type: ",e.type),o.createElement("p",null,"😁"," ",o.createElement("a",{href:e.url,target:"_blank"},"Link to Profile")))),j=()=>{const[e,t]=E.exports.useState(null),[a,l]=E.exports.useState("abelfubu");E.exports.useEffect((()=>{const e=setTimeout((async()=>{if(!a)return;const e=await fetch(`https://api.github.com/users/${a}/repos?per_page=200`),r=await e.json();t(r),l("")}),400);return()=>clearTimeout(e)}),[a]);const r=E.exports.useCallback((e=>{l(e.currentTarget.value)}),[]);return o.createElement("div",{className:"App"},o.createElement(y,{label:"Github's username",type:"text",onChange:r,value:a}),(null==e?void 0:e.length)?o.createElement(o.Fragment,null,o.createElement(P,{user:e[0].owner,count:e.length}),o.createElement(S,{repos:e})):o.createElement("h1",null,"User not found..."))};var G="_header_8x90g_1",I="_login_8x90g_8",R="_form_8x90g_14",L="_button_8x90g_23";const T=({setAuth:e,history:t})=>{const[a,l]=E.exports.useState({email:"",password:""}),r=E.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>m(c({},e),{[t]:a})))}),[]),n=E.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return o.createElement("section",{className:I},o.createElement("form",{className:R,onSubmit:n},o.createElement("h1",{className:G},"Login"),o.createElement(y,{label:"Email",value:a.email,type:"email",name:"email",onChange:r}),o.createElement(y,{label:"Password",value:a.password,type:"password",name:"password",onChange:r}),o.createElement("button",{className:L},"LOGIN"),o.createElement(p,{to:"/register"},"Not registered yet - Go to sign up")))};var D="_header_vao77_1",F="_register_vao77_8",U="_form_vao77_14",B="_button_vao77_23";const q=({setAuth:e,history:t})=>{const[a,l]=E.exports.useState({email:"",password:"",username:""}),r=E.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>m(c({},e),{[t]:a})))}),[]),n=E.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return o.createElement("section",{className:F},o.createElement("form",{className:U,onSubmit:n},o.createElement("h1",{className:D},"Register"),o.createElement(y,{label:"Email",value:a.email,type:"email",name:"email",onChange:r}),o.createElement(y,{label:"Username",value:a.username,type:"username",name:"username",onChange:r}),o.createElement(y,{label:"Password",value:a.password,type:"password",name:"password",onChange:r}),o.createElement("button",{className:B},"REGISTER"),o.createElement(p,{to:"/login"},"Already registered? - Go to sign in")))};function z(){const[e,t]=E.exports.useState(!1);return o.createElement(h,{basename:"/nuwev3"},o.createElement(f,{setAuth:t,isAuth:e}),o.createElement(g,null,o.createElement(u,{exact:!0,path:"/login",render:e=>o.createElement(T,c({setAuth:t},e))}),o.createElement(u,{exact:!0,path:"/register",render:e=>o.createElement(q,c({setAuth:t},e))}),o.createElement(_,{isAuthenticated:e},o.createElement(u,{exact:!0,path:"/github",component:j}))))}b.render(o.createElement(o.StrictMode,null,o.createElement(z,null)),document.getElementById("root"));
