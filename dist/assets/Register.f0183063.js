import{a5 as u,a6 as p,a7 as d,a8 as l,a9 as g,aa as c,a0 as h,ab as m,a4 as s,U as a,ac as i,F as w}from"./index.4d3d2aa3.js";const f={name:"Register",data(){return{email:"",password:"",router:p()}},components:{},methods:{register(){d(l(),this.email,this.password).then(o=>{console.log("successfully registerd!")}),this.$router.push("/").catch(o=>{console.log(o.code)})},signInwithGoogle(){const o=new g;c(l(),o).then(e=>{console.log(e.user),this.$router.push("/")}).catch(e=>{})}}},G=s("h1",null,"Create an account",-1);function I(o,e,W,b,r,n){return h(),m(w,null,[G,s("p",null,[a(s("input",{type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=t=>r.email=t)},null,512),[[i,r.email]])]),s("p",null,[a(s("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t)},null,512),[[i,r.password]])]),s("p",null,[s("button",{onClick:e[2]||(e[2]=(...t)=>n.register&&n.register(...t))}," Submit ")]),s("p",null,[s("button",{onClick:e[3]||(e[3]=(...t)=>o.signInWithGoogle&&o.signInWithGoogle(...t))}," Sign In With Google ")])],64)}const v=u(f,[["render",I]]);export{v as default};