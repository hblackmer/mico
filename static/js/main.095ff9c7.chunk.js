(this.webpackJsonpmico=this.webpackJsonpmico||[]).push([[0],{38:function(e,t,s){},47:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(20),r=s.n(c),i=(s(47),s(9)),o=s(10),l=s(12),j=s(11),d=s(18),b=s(26),h=s(25),u={javascript:[{id:0,question:"Explain 'this' keyword.",answer:"The JavaScript 'this' keyword refers to the object it belongs to.",source:"https://www.w3schools.com/js/js_this.asp"},{id:1,question:"Explain Higher Order Functions in JavaScript.",answer:"Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.",source:"https://eloquentjavascript.net/05_higher_order.html"},{id:2,question:"What are callbacks?",answer:"A callback is a function that will be executed after another function gets executed.",source:"https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"},{id:3,question:"What are object prototypes?",answer:"Prototypes are the mechanism by which JavaScript objects inherit features from one another",source:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes"}],react:[{id:0,question:"What are the advantages of React?",answer:"[See Source]",source:"https://da-14.com/blog/its-high-time-reactjs-ten-reasons-give-it-try"},{id:1,question:"What is JSX?",answer:"JSX is an optional syntax extension to JavaScript that makes writing your own components much easier. It accepts HTML quoting and makes a subcomponent rendering easier.",source:"https://eloquentjavascript.net/05_higher_order.html"},{id:2,question:"What are the differences between functional and class components?",answer:"[See Source]",source:"https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return e},m=s(19),p=s(13),g=s(76),x=s(77),f=s(78),v=s(79),N=s(80),y=s(81),w=s(75),k=s(82),q=s(91),S=s(70),C=s(71),M=s(72),D=s(73),A=s(74),_=s(16),T=(s(52),s(2)),F=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={tasks:[{name:"HTML",category:"list1",bgcolor:"#96D1CD"},{name:"CSS",category:"list1",bgcolor:"#96D1CD"},{name:"JavaScript",category:"list1",bgcolor:"#96D1CD"},{name:"React",category:"list1",bgcolor:"#96D1CD"}]},e.onDragOver=function(e){e.preventDefault()},e.onDrop=function(t,s){var a=t.dataTransfer.getData("id"),n=e.state.tasks.filter((function(e){return e.name===a&&(e.category=s),e}));e.setState(Object(_.a)(Object(_.a)({},e.state),{},{tasks:n}))},e.onDragStart=function(e,t){console.log("dragstart:",t),e.dataTransfer.setData("id",t)},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t={list1:[],list2:[]};return this.state.tasks.forEach((function(s){t[s.category].push(Object(T.jsx)("div",{onDragStart:function(t){return e.onDragStart(t,s.name)},draggable:!0,className:"draggable",style:{backgroundColor:s.bgcolor},children:s.name},s.name))})),Object(T.jsxs)("div",{className:"container-drag",children:[Object(T.jsxs)("div",{className:"list1",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"list1")},children:[Object(T.jsx)("span",{className:"task-header",children:"Not Selected"}),t.list1]}),Object(T.jsxs)("div",{className:"list2",onDrop:function(t){return e.onDrop(t,"list2")},onDragOver:function(t){return e.onDragOver(t)},children:[Object(T.jsx)("span",{className:"task-header",children:"Selected"}),t.list2]})]})}}]),s}(a.Component),J=F,z=(s(54),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsxs)(q.a,{isOpen:this.props.isModalOpen,toggleModal:this.props.toggleModal,children:[Object(T.jsx)(S.a,{toggle:this.props.toggleModal,children:Object(T.jsx)("h3",{children:"Test Customization"})}),Object(T.jsx)(C.a,{children:Object(T.jsxs)(M.a,{id:"regForm",children:[Object(T.jsxs)("div",{className:"tab",children:[Object(T.jsx)("h4",{className:"categories-header",children:"CATEGORIES"}),Object(T.jsx)("lead",{className:"categories-subtitle",children:"Drag and drop item(s) to be tested on:"}),Object(T.jsx)(J,{})]}),Object(T.jsxs)("div",{className:"tab",children:[Object(T.jsx)("h4",{className:"length-header",children:"LENGTH"}),Object(T.jsxs)("div",{className:"toggle-radio mb-5",children:[Object(T.jsx)(D.a,{type:"radio",className:"toggle-option",id:"first-toggle",name:"toggle-option"}),Object(T.jsx)(D.a,{type:"radio",checked:!0,className:"toggle-option",id:"second-toggle",name:"toggle-option"}),Object(T.jsx)(D.a,{type:"radio",className:"toggle-option",id:"third-toggle",name:"toggle-option"}),Object(T.jsx)(A.a,{for:"first-toggle",children:Object(T.jsx)("h5",{children:"Short"})}),Object(T.jsx)(A.a,{for:"second-toggle",children:Object(T.jsx)("h5",{children:"Medium"})}),Object(T.jsx)(A.a,{for:"third-toggle",children:Object(T.jsx)("h5",{children:"Long"})}),Object(T.jsx)("div",{className:"toggle-option-slider"})]})]}),Object(T.jsx)("div",{className:"tab text-center",children:Object(T.jsx)(d.b,{to:"/mico/test",children:Object(T.jsx)(w.a,{color:"primary",id:"customize-button",onClick:this.props.toggleModal,children:"Start"})})})]})})]})}}]),s}(a.Component)),E=z,I=(s(63),[{href:"/about",text:"About"},{href:"/contribute",text:"Contribute"}]),L=function(e){var t=e.href,s=e.text,a=e.className;return Object(T.jsx)(g.a,{children:Object(T.jsx)(x.a,{className:a,children:Object(T.jsx)(d.c,{to:"/mico"+t,children:s})})})},P=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsxs)(f.a,{dark:!0,expand:"md",children:[Object(T.jsx)(v.a,{className:"text-primary ml-2",href:"/mico/",children:Object(T.jsx)("strong",{children:"MICO"})}),Object(T.jsx)(N.a,{onClick:this.props.toggleNav}),Object(T.jsxs)(y.a,{isOpen:this.props.isNavOpen,navbar:!0,children:[Object(T.jsx)(w.a,{outline:!0,onClick:this.props.toggleModal,id:"start-button",className:"text-primary ml-auto",children:"Start"}),Object(T.jsx)(k.a,{navbar:!0,children:I.map(L)})]})]}),Object(T.jsx)(E,{isModalOpen:this.props.isModalOpen,toggleModal:this.props.toggleModal})]})}}]),s}(a.Component),W=P,G=s(42),H=(s(64),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"Showcase",children:[Object(T.jsx)("div",{id:"overlay"}),Object(T.jsxs)("div",{id:"header",children:[Object(T.jsx)("h1",{id:"header-name",children:"MICO"}),Object(T.jsx)("subtitle",{id:"subtitle",className:"d-none d-md-block",children:"a study tool for web developers"}),Object(T.jsx)(d.b,{to:"/mico/start",children:Object(T.jsx)(G.a,{className:"test-button",onClick:this.props.toggleModal,children:"Get Started"})})]}),Object(T.jsx)(E,{isModalOpen:this.props.isModalOpen,toggleModal:this.props.toggleModal})]})}}]),s}(a.Component)),R=H,B=s(83),U=s(84),X=s(85),Y=s(86),K=s(87),Q=s(88),V=s(89),Z=(s(65),s.p+"static/media/flash.bdb3c9f1.png"),$=s.p+"static/media/test.1403cdc2.png",ee=s.p+"static/media/select.b84ec410.png",te=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsxs)(B.a,{className:"About px-lg-5",children:[Object(T.jsx)("h2",{className:"text-white text-center",id:"about",children:"What is Mico?"}),Object(T.jsxs)(U.a,{children:[Object(T.jsx)(X.a,{md:"4",className:"about-cards",children:Object(T.jsx)(Y.a,{className:"about-bg",children:Object(T.jsxs)(K.a,{className:"about-body",children:[Object(T.jsx)("div",{className:"about-icons",children:Object(T.jsx)("img",{src:Z,className:"about-img",alt:"A cartoon drawing of a girl sitting on a stool and picking different sticky notes."})}),Object(T.jsx)(Q.a,{tag:"h2",children:"A study tool"}),Object(T.jsx)(V.a,{tag:"h6",children:"Interview style questions geared for web developers."})]})})}),Object(T.jsx)(X.a,{md:"4",className:"about-cards",children:Object(T.jsx)(Y.a,{className:"about-bg",children:Object(T.jsxs)(K.a,{className:"about-body",children:[Object(T.jsx)("div",{className:"about-icons",children:Object(T.jsx)("img",{src:$,className:"about-img",alt:"A cartoon character deciding between different notes."})}),Object(T.jsx)(Q.a,{tag:"h2",children:"Flash cards"}),Object(T.jsx)(V.a,{tag:"h6",children:"Customizable and randomized flash card style questions."})]})})}),Object(T.jsx)(X.a,{md:"4",className:"about-cards",children:Object(T.jsx)(Y.a,{className:"about-bg",children:Object(T.jsxs)(K.a,{className:"about-body",children:[Object(T.jsx)("div",{className:"about-icons",children:Object(T.jsx)("img",{src:ee,className:"about-img",alt:"A cartoon drawing of someone checking a list."})}),Object(T.jsx)(Q.a,{tag:"h2",children:"Test report"}),Object(T.jsx)(V.a,{tag:"h6",children:"Comprehensive report of your question/answers for review at the end of your test."})]})})})]})]})}}]),s}(a.Component),se=te,ae=(s(66),s.p+"static/media/logo_circle.e4097773.png"),ne=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsx)("footer",{class:"Footer",children:Object(T.jsx)("div",{class:"container",children:Object(T.jsx)("div",{class:"row",children:Object(T.jsxs)("div",{class:"col d-inline-flex justify-content-center mt-3",children:[Object(T.jsx)("a",{href:"https://heleneblackmer.com",target:"_blank",children:Object(T.jsx)("img",{class:"footer_icons hb_logo",src:ae})}),Object(T.jsx)("a",{href:"https://github.com/hblackmer",target:"_blank",children:Object(T.jsx)("i",{class:"fab fa-github media_icons"})}),Object(T.jsx)("a",{href:"https://www.linkedin.com/in/hblackmer",target:"_blank",children:Object(T.jsx)("i",{class:"fab fa-linkedin media_icons"})})]})})})})}}]),s}(a.Component),ce=ne,re=s(90),ie=s(40),oe=s(41),le=(s(67),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsx)(a.Fragment,{children:Object(T.jsx)("p",{className:"question text-white",children:this.props.question})})}}]),s}(a.Component)),je=le,de=(s(38),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsx)(a.Fragment,{children:Object(T.jsxs)(M.a,{id:"answer-textarea",children:[Object(T.jsx)(U.a,{className:"form-group mt-3",children:Object(T.jsxs)(X.a,{className:"answer-text",children:[Object(T.jsx)(A.a,{for:"feedback",className:"col-form-label fs-3",children:"Your Answer:"}),Object(T.jsx)("textarea",{className:"form-control",id:"answer",name:"answer",rows:"6"})]})}),Object(T.jsx)(U.a,{className:"form-group mt-3",children:Object(T.jsxs)(X.a,{children:[Object(T.jsx)(w.a,{type:"button",color:"primary",className:"answer-submit",onClick:this.props.submit,children:"Submit"}),Object(T.jsx)(w.a,{type:"button",className:"answer-arrow bg-transparent text-success",onClick:this.props.next,children:Object(T.jsx)("i",{className:"far fa-caret-square-right"})}),Object(T.jsx)(w.a,{type:"button",className:"answer-arrow bg-transparent text-success",onClick:this.props.prev,children:Object(T.jsx)("i",{className:"far fa-caret-square-left"})})]})})]})})}}]),s}(a.Component)),be=de,he=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={showAnswer:!1,timerActive:!1,questionNum:0,questionMax:3},a.questionSubmitted=a.questionSubmitted.bind(Object(m.a)(a)),a.questionPrev=a.questionPrev.bind(Object(m.a)(a)),a.questionNext=a.questionNext.bind(Object(m.a)(a)),a.hideComponent=a.hideComponent.bind(Object(m.a)(a)),a}return Object(o.a)(s,[{key:"questionSubmitted",value:function(){this.setState((function(e){return{questionNum:e.questionNum+1}}))}},{key:"questionPrev",value:function(){this.state.questionNum>0&&this.setState((function(e){return{questionNum:e.questionNum-1}}))}},{key:"questionNext",value:function(){this.state.questionNum<this.state.questionMax&&this.setState((function(e){return{questionNum:e.questionNum+1}}))}},{key:"hideComponent",value:function(){this.setState({showAnswer:!this.state.showAnswer,timerActive:!0})}},{key:"render",value:function(){var e=this,t=this.state,s=t.showAnswer,a=t.timerActive,c=t.questionMax,r=t.questionNum,i=[],o=r/c*100;return Object(T.jsx)("div",{className:"test",children:Object(T.jsxs)(B.a,{children:[Object(T.jsx)("div",{className:"dark-overlay"}),Object(T.jsx)(U.a,{children:Object(T.jsxs)(X.a,{sm:{size:10,offset:1},children:[Object(T.jsx)(U.a,{children:Object(T.jsx)(X.a,{className:"test-timer",children:Object(T.jsxs)(ie.a,{active:a,duration:null,className:"h4",children:[Object(T.jsx)("i",{className:"fas fa-stopwatch"}),Object(T.jsx)("span",{children:"  "}),Object(T.jsx)(oe.a,{})]})})}),Object(T.jsx)(U.a,{children:Object(T.jsx)(X.a,{sm:{size:10,offset:1},children:Object(T.jsxs)(re.a,{animated:!0,className:"progress",color:"success",value:o,children:[r,"/",c]})})}),s?Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)(U.a,{children:Object(T.jsxs)(X.a,{className:"test-category",children:[Object(T.jsx)("i",{className:"fab fa-js-square"})," JavaScript"]})}),function(){for(;i.length<c;){var t=Math.floor(Math.random()*e.props.javascript.length),s=e.props.javascript[t];-1===i.indexOf(s)&&i.push(e.props.javascript[t])}}(),function(){if(r!==c){var e=i[r].question;return Object(T.jsx)("div",{children:Object(T.jsx)(je,{question:e})})}return Object(T.jsx)("div",{})}(),Object(T.jsx)(be,{submit:this.questionSubmitted,prev:this.questionPrev,next:this.questionNext})]}):Object(T.jsx)(w.a,{color:"primary",onClick:function(){return e.hideComponent()},children:"START"})]})})]})})}}]),s}(a.Component),ue=Object(p.g)(Object(b.b)((function(e){return{javascript:e.javascript,react:e.react}}))(he)),Oe=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},a.toggleNav=a.toggleNav.bind(Object(m.a)(a)),a.toggleModal=a.toggleModal.bind(Object(m.a)(a)),a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:"Main",children:[Object(T.jsx)(W,{isNavOpen:this.state.isNavOpen,isModalOpen:this.state.isModalOpen,toggleNav:this.toggleNav,toggleModal:this.toggleModal}),Object(T.jsxs)(p.d,{children:[Object(T.jsx)(p.b,{exact:!0,path:"/mico/",render:function(){return Object(T.jsx)(R,{toggleNav:e.toggleNav,toggleModal:e.toggleModal})}}),Object(T.jsx)(p.b,{exact:!0,path:"/mico/about",component:se}),Object(T.jsx)(p.b,{exact:!0,path:"/mico/test",component:ue}),Object(T.jsx)(p.a,{to:"/mico/"}),Object(T.jsx)(R,{})]}),Object(T.jsx)(ce,{})]})}}]),s}(a.Component),me=Object(h.b)(O,u),pe=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(T.jsx)(b.a,{store:me,children:Object(T.jsx)(d.a,{basename:"window.location.pathname || ''",children:Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(Oe,{})})})})}}]),s}(a.Component),ge=pe,xe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,92)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};s(68);r.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(ge,{})}),document.getElementById("root")),xe()}},[[69,1,2]]]);
//# sourceMappingURL=main.095ff9c7.chunk.js.map