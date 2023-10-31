import{o as s,c as l,p as m,m as p,t as b,g as $,n as S,l as _,f as w,a as t,b as i,u as o,w as k}from"./vue.esm-bundler-9e96b340.js";import{B as u,s as v}from"./basecomponent.esm-d1a5a44f.js";import{s as d}from"./tag.esm-1f0ab222.js";var x=`
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
`,z={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-text",icon:"p-avatar-icon"},P=u.extend({name:"avatar",css:x,classes:z}),E={name:"BaseAvatar",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:P,provide:function(){return{$parentInstance:this}}},c={name:"Avatar",extends:E,emits:["error"],methods:{onError:function(e){this.$emit("error",e)},getPTOptions:function(e){return this.ptm(e,{parent:{instance:this.$parent}})}}},B=["aria-labelledby","aria-label"],C=["src","alt"];function O(a,e,n,f,y,r){return s(),l("div",p({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},r.getPTOptions("root"),{"data-pc-name":"avatar"}),[m(a.$slots,"default",{},function(){return[a.label?(s(),l("span",p({key:0,class:a.cx("label")},r.getPTOptions("label")),b(a.label),17)):a.$slots.icon?(s(),$(_(a.$slots.icon),{key:1,class:S(a.cx("icon"))},null,8,["class"])):a.icon?(s(),l("span",p({key:2,class:[a.cx("icon"),a.icon]},r.getPTOptions("icon")),null,16)):a.image?(s(),l("img",p({key:3,src:a.image,alt:a.ariaLabel,onError:e[0]||(e[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},r.getPTOptions("image")),null,16,C)):w("",!0)]})],16,B)}c.render=O;var N=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,T={root:"p-avatar-group p-component"},j=u.extend({name:"avatargroup",css:N,classes:T}),A={name:"BaseAvatarGroup",extends:v,style:j,provide:function(){return{$parentInstance:this}}},g={name:"AvatarGroup",extends:A};function D(a,e,n,f,y,r){return s(),l("div",p({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[m(a.$slots,"default")],16)}g.render=D;const G={class:"flex gap-4 mb-8"},V={class:"px-8"},W={class:"flex justify-between"},I={class:"flex"},L=t("p",{class:"m-0"}," NOV, 24, 2022 • 10 min read ",-1),M=t("h1",{class:"text-5xl"}," Women in Tech: Celebrating the Women's Month With a Conversation on Equity, Diversity and Opportunity ",-1),R={class:"flex"},q=t("p",null," Writted by Rachel Kempf (Editor-in-Chief), Giovani Rinaldi (Developer & Systems Specialist), Nick Sandoval (Product Marketing Manager), and Giovani Rinaldi (Developer & Systems Specialist). ",-1),F=t("figure",{class:"hidden lg:block p-0 m-0 min-w-fit"},[t("img",{alt:"",class:"h-auto w-full",src:"https://www.azion.com/static/images/uploads/thumb-blog-let-s-encrypt-kv.png?ims=478x"})],-1),h={__name:"index",setup(a){return(e,n)=>(s(),l("div",G,[t("div",V,[t("div",W,[t("div",I,[i(o(d),{value:"Featured"}),i(o(d),{value:"Edge Computing"})]),L]),M,t("div",R,[i(o(g),null,{default:k(()=>[i(o(c),{image:"https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",shape:"circle"}),i(o(c),{image:"https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",shape:"circle"}),i(o(c),{image:"https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg",shape:"circle"})]),_:1}),q])]),F]))}},J=h;h.__docgenInfo={exportName:"default",displayName:"hero",description:"",tags:{},sourceFiles:["/Users/robson.junior/dev/azion-web-kit/src/templates/article/hero/index.vue"]};export{J as P};
//# sourceMappingURL=index-08c13c3e.js.map
