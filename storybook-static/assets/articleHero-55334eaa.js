import{o as e,c as n,r as f,m as o,t as p,h as g,n as x,j as z,f as v,a as l,F as h,g as y,u as s,b as q,w as P}from"./vue.esm-bundler-1f3dc028.js";import{B as b,s as S}from"./basecomponent.esm-3953ba16.js";import{s as j}from"./tag.esm-5987e4b0.js";var E=`
@layer primevue {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }

    .p-avatar.p-avatar-image {
        background-color: transparent;
    }

    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }
}
`,I={root:function(r){var i=r.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},O=b.extend({name:"avatar",css:E,classes:I}),B={name:"BaseAvatar",extends:S,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:O,provide:function(){return{$parentInstance:this}}},$={name:"Avatar",extends:B,emits:["error"],methods:{onError:function(r){this.$emit("error",r)},getPTOptions:function(r){return this.ptm(r,{parent:{instance:this.$parent}})}}},L=["aria-labelledby","aria-label"],A=["src","alt"];function C(a,r,i,c,u,t){return e(),n("div",o({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},t.getPTOptions("root"),{"data-pc-name":"avatar"}),[f(a.$slots,"default",{},function(){return[a.label?(e(),n("span",o({key:0,class:a.cx("label")},t.getPTOptions("label")),p(a.label),17)):a.$slots.icon?(e(),g(z(a.$slots.icon),{key:1,class:x(a.cx("icon"))},null,8,["class"])):a.icon?(e(),n("span",o({key:2,class:[a.cx("icon"),a.icon]},t.getPTOptions("icon")),null,16)):a.image?(e(),n("img",o({key:3,src:a.image,alt:a.ariaLabel,onError:r[0]||(r[0]=function(){return t.onError&&t.onError.apply(t,arguments)})},t.getPTOptions("image")),null,16,A)):v("",!0)]})],16,L)}$.render=C;var N=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,T={root:"p-avatar-group p-component"},_=b.extend({name:"avatargroup",css:N,classes:T}),D={name:"BaseAvatarGroup",extends:S,style:_,provide:function(){return{$parentInstance:this}}},k={name:"AvatarGroup",extends:D};function G(a,r,i,c,u,t){return e(),n("div",o({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[f(a.$slots,"default")],16)}k.render=G;const F={class:"flex gap-8 mb-8"},V={class:"flex justify-between"},W={class:"flex"},M={class:"m-0"},R={class:"text-5xl"},H={key:0,class:"flex"},K={key:0,class:"hidden lg:block p-0 m-0 min-w-fit"},U=["alt","src"],w={__name:"index",props:{date:{required:!0,type:String},title:{required:!0,type:String},tagList:{required:!0,type:Array},authors:{type:Object,required:!1},postImage:{url:String,alt:String}},setup(a){const r=a,{date:i,title:c,tagList:u,authors:t}=r;return(J,Q)=>(e(),n("div",F,[l("div",null,[l("div",V,[l("div",W,[(e(!0),n(h,null,y(s(u),(d,m)=>(e(),g(s(j),{class:"mr-2",key:m,value:d},null,8,["value"]))),128))]),l("p",M,p(s(i)),1)]),l("h1",R,p(s(c)),1),s(t)?(e(),n("div",H,[q(s(k),null,{default:P(()=>[(e(!0),n(h,null,y(s(t).avatars,(d,m)=>(e(),g(s($),{key:m,image:d,shape:"circle"},null,8,["image"]))),128))]),_:1}),l("p",null,p(s(t).title),1)])):v("",!0)]),a.postImage?(e(),n("figure",K,[l("img",{alt:a.postImage.alt,class:"h-auto w-full",src:a.postImage.url},null,8,U)])):v("",!0)]))}},aa=w;w.__docgenInfo={exportName:"default",displayName:"hero",description:"",tags:{},props:[{name:"date",type:{name:"string"},required:!0},{name:"title",type:{name:"string"},required:!0},{name:"tagList",type:{name:"array"},required:!0},{name:"authors",type:{name:"object"},required:!1},{name:"postImage"}],sourceFiles:["/Users/robson.junior/dev/azion-web-kit/src/templates/post/hero/index.vue"]};const ea={date:"NOV, 24, 2022 • 10 min read",title:"Women in Tech: Celebrating the Women's Month With a Conversation on Equity, Diversity and Opportunity",tagList:["Featured","Edge"],authors:{avatars:["https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg","https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg","https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg"],title:"Writted by Rachel Kempf (Editor-in-Chief), Giovani Rinaldi (Developer & Systems Specialist), Nick Sandoval (Product Marketing Manager), and Giovani Rinaldi (Developer & Systems Specialist)."},postImage:{alt:"abc",url:"https://www.azion.com/static/images/uploads/thumb-blog-let-s-encrypt-kv.png?ims=478x"}};export{aa as P,ea as h};
//# sourceMappingURL=articleHero-55334eaa.js.map
