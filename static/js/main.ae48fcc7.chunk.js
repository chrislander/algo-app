(this["webpackJsonpalgo-app"]=this["webpackJsonpalgo-app"]||[]).push([[0],{13:function(e,t,r){e.exports=r(21)},19:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(11),o=r.n(i),c=(r(18),r(19),r(9)),s=r.n(c),l=r(12),u=r(2),h=r(3),p=r(5),d=r(4),m=r(23),b=r(24),f=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return this.props.arr.length<1?n.a.createElement("div",{id:"lines-container"}):n.a.createElement("div",{id:"lines-container"},this.props.arr.map((function(e,t){return n.a.createElement("div",{className:"bar",key:t,style:{height:e}})})))}}]),r}(n.a.Component),v=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e=this.props.rtype;return"createArray"===e?n.a.createElement("button",{onClick:this.props.handleClick,className:"btn btn-primary",variant:"primary"},this.props.title):"sortArray"===e?n.a.createElement("button",{onClick:this.props.handleArr,className:"btn btn-secondary",variant:"secondary"},this.props.title):void 0}}]),r}(a.Component);var y=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={arr:""},e}return Object(h.a)(r,[{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"handleClick",value:function(){var e=function(e){for(var t=[],r=0;r<e;r++)t.push(Math.floor(250*Math.random()+1));return t}(100);this.setState({arr:e})}},{key:"handleArr",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,r,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.state.arr),r=this.state.arr;case 2:t=!1,a=0;case 4:if(!(a<r.length)){e.next=17;break}if(!(r[a]>r[a+1])){e.next=14;break}return e.next=8,this.sleep(25);case 8:n=r[a+1],r[a+1]=r[a],r[a]=n,t=!0,this.setState({arr:r}),console.log("redrawn");case 14:a++,e.next=4;break;case 17:if(!0===t){e.next=2;break}case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement(b.a,null,n.a.createElement("div",null,n.a.createElement("h3",null,"The App"),n.a.createElement(v,{title:"Create Array",rtype:"createArray",handleClick:this.handleClick.bind(this)}),n.a.createElement(v,{title:"BubbleSort",rtype:"sortArray",handleArr:this.handleArr.bind(this)}),n.a.createElement(f,{title:"Scoreboard",arr:this.state.arr}))))}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.ae48fcc7.chunk.js.map