(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),s=(n(15),n(2)),o=n(3),i=n(6),u=n(4),m=n(5),h=n(1),v=function(e){var t=e.events;return r.a.createElement("section",null,r.a.createElement("h3",null,"Events"),r.a.createElement(r.a.Fragment,null,t.map(function(e,t){var n=e.address1,a=e.dateTime,l=e.eventUrl,c=e.name;return r.a.createElement("div",{key:t},r.a.createElement("h4",{className:"event"},r.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank"},c)),r.a.createElement("p",{className:"address1"},n),r.a.createElement("p",{className:"dateTime"},a))})))};function d(e){if(e.status>=200&&e.status<300)return e;var t=new Error("HTTP Error ".concat(e.statusText));throw t.status=e.statusText,t.response=e,console.log(t),t}function b(e){return 204===e.status?null:e.json()}var f={search:function(e,t){return fetch("free-beer-events?city=".concat(e),{accept:"application/json"}).then(d).then(b).then(t)}},p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n.state={value:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"handleSubmit",value:function(e){var t=this,n=this.state.value;console.log("A location was submitted: "+n),f.search(n,function(e){t.setState({value:"",events:e})}),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"City:",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Find free beer"}))),this.state.events&&r.a.createElement(v,{events:this.state.events}))}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"BeerStalker"),r.a.createElement("main",null,r.a.createElement(p,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ec6c34b6.chunk.js.map