var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&s(e,a,t[a]);return e},o=(e,l)=>t(e,a(l));import{R as m,L as i,r as u,a as d,b as E,B as p,S as h,c as _}from"./vendor.7e41de1f.js";var g="_header_ix18c_1";const b=({setAuth:e,isAuth:t})=>m.createElement("header",{className:g},m.createElement("h3",null,m.createElement("i",{className:"fab fa-github-alt"})),m.createElement("nav",null,m.createElement("ul",null,t&&m.createElement("li",null,m.createElement(i,{to:"login",onClick:()=>e(!1)},"Logout")),m.createElement("li",null,m.createElement("a",{href:"https://github.com/abelfubu",target:"_blank"},m.createElement("i",{className:"fab fa-github-alt"}))),m.createElement("li",null,m.createElement("a",{href:"https://www.linkedin.com/in/abelfubu/",target:"_blank"},m.createElement("i",{className:"fab fa-linkedin"}))),m.createElement("li",null,m.createElement("a",{href:"https://twitter.com/abelfubu",target:"_blank"},m.createElement("i",{className:"fab fa-twitter-square"}))))));var v="_label_okhk2_1",f="_input_okhk2_5";const y=({type:e,onChange:t,value:a,name:l,label:n})=>m.createElement(m.Fragment,null,m.createElement("label",{className:v,htmlFor:n},n),m.createElement("input",{className:f,type:e,onChange:t,name:l,value:a,id:n}));var N="_header_8x90g_1",w="_login_8x90g_8",x="_form_8x90g_14",k="_button_8x90g_23";const C=({setAuth:e,history:t})=>{const[a,l]=u.exports.useState({email:"",password:""}),n=u.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>o(c({},e),{[t]:a})))}),[]),r=u.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return m.createElement("section",{className:w},m.createElement("form",{className:x,onSubmit:r},m.createElement("h1",{className:N},"Login"),m.createElement(y,{label:"Email",value:a.email,type:"email",name:"email",onChange:n}),m.createElement(y,{label:"Password",value:a.password,type:"password",name:"password",onChange:n}),m.createElement("button",{className:k},"LOGIN"),m.createElement(i,{to:"/register"},"Not registered yet - Go to sign up")))};var A="_header_vao77_1",S="_register_vao77_8",O="_form_vao77_14",T="_button_vao77_23";const j=({setAuth:e,history:t})=>{const[a,l]=u.exports.useState({email:"",password:"",username:""}),n=u.exports.useCallback((e=>{const{name:t,value:a}=e.target;l((e=>o(c({},e),{[t]:a})))}),[]),r=u.exports.useCallback((a=>{a.preventDefault(),e(!0),t.push("github")}),[]);return m.createElement("section",{className:S},m.createElement("form",{className:O,onSubmit:r},m.createElement("h1",{className:A},"Register"),m.createElement(y,{label:"Email",value:a.email,type:"email",name:"email",onChange:n}),m.createElement(y,{label:"Username",value:a.username,type:"username",name:"username",onChange:n}),m.createElement(y,{label:"Password",value:a.password,type:"password",name:"password",onChange:n}),m.createElement("button",{className:T},"REGISTER"),m.createElement(i,{to:"/login"},"Already registered? - Go to sign in")))};var R="_link_55vvs_1",I="_repoCard_55vvs_11",P="_language_55vvs_29",G="_repoId_55vvs_33";const L=({repo:e})=>m.createElement("a",{className:R,href:e.html_url,target:"_blank"},m.createElement("div",{className:I},m.createElement("h3",null,e.name),e.language&&m.createElement("p",{className:P},e.language),m.createElement("p",{className:G},"ID: ",e.id)));var D="_header_133cp_1",F="_grid_133cp_7";const M=({repos:e})=>m.createElement(m.Fragment,null,m.createElement("h2",{className:D},"Repos"),m.createElement("section",{className:F},e.map(((e,t)=>m.createElement(L,{key:t,repo:e})))));var U="_user_1d7ca_1";const B=({user:e})=>m.createElement("section",{className:U},m.createElement("img",{src:e.avatar_url,alt:"Github Profile"}),m.createElement("div",{className:"content"},m.createElement("a",{href:e.html_url,target:"_blank"},m.createElement("h1",null,e.login.substring(0,1).toUpperCase()+e.login.substring(1))),m.createElement("h3",null,e.bio),m.createElement("p",null,"📙 Repositories"),m.createElement("h3",null,e.public_repos),m.createElement("p",null,"🤟 Name"),m.createElement("h3",null,e.name),m.createElement("p",null,"💻 Company"),m.createElement("h3",null,e.company),m.createElement("p",null,"🌍 Location"),m.createElement("h3",null,e.location),m.createElement("p",null,"🕵️‍♂️ Followers"),m.createElement("h3",null,e.followers))),J=()=>{const[e,t]=u.exports.useState("abelfubu"),{payload:a,owner:l,error:n}=(e=>{const[t,a]=u.exports.useState(null),[l,n]=u.exports.useState(null),[r,s]=u.exports.useState(null),c=u.exports.useCallback((async e=>{try{const t=await fetch(`https://api.github.com/users/${e}`);return s(null),t.json()}catch(t){s(t)}}),[]);return u.exports.useEffect((()=>{const t=setTimeout((async()=>{if(!e)return;const t=await c(`${e}/repos?per_page=200`),l=await c(e);a(t),n(l)}),400);return()=>clearTimeout(t)}),[e]),{payload:t,owner:l,error:r}})(e),r=u.exports.useCallback((e=>{t(e.currentTarget.value)}),[]);return m.createElement("div",{className:"App"},m.createElement(y,{label:"Github's username",type:"text",onChange:r,value:e}),(null==a?void 0:a.length)&&(null==l?void 0:l.name)&&m.createElement(m.Fragment,null,m.createElement(B,{user:l}),m.createElement(M,{repos:a})),!(null==a?void 0:a.length)&&m.createElement("h1",null,"User not found..."))},$=({children:e,isAuthenticated:t})=>m.createElement(d,{render:({location:a})=>t?e:m.createElement(E,{to:{pathname:"/login"}})});var q="_container_1ti6y_1",Q="_grid_1ti6y_9",z="_elementos_1ti6y_15",H="_tarjeta_1ti6y_30";const K=()=>{let e;return e=[{id:1,name:"Auriculares",creditos:"20",cantidad:50},{id:2,name:"Teclado",creditos:"25",cantidad:0},{id:3,name:"Raton",creditos:"10",cantidad:10},{id:4,name:"Lampara",creditos:"5",cantidad:10},{id:5,name:"Monitor",creditos:"120",cantidad:10},{id:6,name:"Consoloa",creditos:"200",cantidad:10},{id:7,name:"Television",creditos:"250",cantidad:10},{id:8,name:"Movil",creditos:"200",cantidad:10},{id:9,name:"Auriculares",creditos:"20",cantidad:10},{id:10,name:"Auriculares",creditos:"20",cantidad:10},{id:11,name:"Auriculares",creditos:"20",cantidad:10}].map((e=>m.createElement("div",{key:e.id,className:z},m.createElement("div",null,m.createElement("h4",null,e.name),m.createElement("p",null,e.creditos," creditos")),m.createElement("button",{onClick:()=>{console.log("comprando")}},"comprar")))),m.createElement("div",{className:q},m.createElement("h1",null,"CANJEA TUS CREDITOS"),m.createElement("div",{className:H},"AQUI METEMOS TARJETA"),m.createElement("div",{className:Q},e))};function V(){const[e,t]=u.exports.useState(!1);return m.createElement(p,{basename:"/nuwev3"},m.createElement(b,{setAuth:t,isAuth:e}),m.createElement(h,null,m.createElement(d,{exact:!0,path:"/login",render:e=>m.createElement(C,c({setAuth:t},e))}),m.createElement(d,{exact:!0,path:"/register",render:e=>m.createElement(j,c({setAuth:t},e))}),m.createElement(d,{exact:!0,path:"/credits",component:K}),m.createElement($,{isAuthenticated:e},m.createElement(d,{exact:!0,path:"/github",component:J}))))}_.render(m.createElement(m.StrictMode,null,m.createElement(V,null)),document.getElementById("root"));
