(this["webpackJsonpbulls-n-cows"]=this["webpackJsonpbulls-n-cows"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),u=n(11),a=n.n(u),r=(n(18),n(13)),c=n(12),l=n(6),h=n(7),o=n(3),b=n(9),d=n(8),m=(n(19),n(0)),j=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("ul",{children:this.props.items.map((function(t){return Object(m.jsxs)("li",{children:[t.text," : ",t.result]},t.id)}))})}}]),n}(i.a.Component),g=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(l.a)(this,n),(s=e.call(this,t)).state={items:[],text:"",number:s.getNumber()},s.handleChange=s.handleChange.bind(Object(o.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(o.a)(s)),s}return Object(h.a)(n,[{key:"getNumber",value:function(){return function(t){for(var e,n,s=t.length;0!==s;)n=Math.floor(Math.random()*s),e=t[s-=1],t[s]=t[n],t[n]=e;return t}([0,1,2,3,4,5,6,7,8,9]).slice(0,4).join("")}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h3",{children:"Answers"}),Object(m.jsx)(j,{items:this.state.items}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("label",{htmlFor:"new-guess",children:"Your guess?"}),Object(m.jsx)("input",{id:"new-guess",autoFocus:!0,type:"number",min:"0000",max:"9999",minLength:"4",maxLength:"4",pattern:"^\\d{4}$",size:"4",placeholder:"\u2219\u2219\u2219\u2219",required:!0,onChange:this.handleChange,value:this.state.text}),Object(m.jsxs)("button",{className:"App-button",children:["Check #",this.state.items.length+1]})]})]})})}},{key:"handleChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),this.state.text.match(/^\d{4}$/)){var e={text:this.state.text,id:Date.now(),result:this.getGuessResult(this.state.number,this.state.text)};this.setState((function(t){return{items:t.items.concat(e),text:"",number:t.number}})),console.log("Number:",this.state.number,e)}}},{key:"getExistingDigits",value:function(t,e){var n=e.split("");return Object(c.a)(new Set(n)).reduce((function(e,n){return t.match(n.toString())?e+1:e}),0)}},{key:"getBulls",value:function(t,e){return e.split("").reduce((function(t,e){var n=Object(r.a)(t.s),s=n[0];return{s:n.slice(1),bulls:t.bulls+(e===s?1:0)}}),{s:t.split(""),bulls:0}).bulls}},{key:"getGuessResult",value:function(t,e){return this.getExistingDigits(t,e)+"-"+this.getBulls(t,e)}}]),n}(i.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,u=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),u(t),a(t)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.ae9a353b.chunk.js.map