(this.webpackJsonpcases7days=this.webpackJsonpcases7days||[]).push([[0],{139:function(e,t,s){"use strict";s.r(t);var a=s(4),r=s(0),c=s.n(r),n=s(29),i=s.n(n),o=(s(112),s(35)),d=s(36),j=s(47),l=s(44),h=s(153),p=s(93),b=s(74),u=s(159),O=s(155),x=s(49),k=s(160),m=s(156),P=s(154),g=s(158),f=s(53),y=s(94),v=s.n(y),U=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(o.a)(this,s),a=t.call(this,e),f.locale("de-german",v.a),a}return Object(d.a)(s,[{key:"render",value:function(){var e;if(this.props.promiseInProgress)e=Object(a.jsx)(m.a,{size:"huge",children:Object(a.jsx)(P.a,{style:{width:220},children:Object(a.jsxs)(P.a.Header,{children:[Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{}),Object(a.jsx)(P.a.Line,{})]})})});else{var t="green";this.props.cases7Per100k>=200?t="red":this.props.cases7Per100k>=100?t="orange":this.props.cases7Per100k>=50&&this.props.cases7Per100k<100&&(t="yellow"),e=Object(a.jsxs)(m.a,{size:"huge",color:t,children:[Object(a.jsx)(m.a.Label,{children:this.props.city}),Object(a.jsxs)("p",{children:["Daten vom: ",""===this.props.lastUpdated?"unbekannt":f(this.props.lastUpdated).format("dd. DD.MM.YYYY")]}),Object(a.jsx)(m.a.Value,{children:Math.round(this.props.cases7Per100k)})]})}return Object(a.jsx)(g.a,{raised:!0,style:{minWidth:250,maxWidth:630,height:166},children:e})}}]),s}(c.a.Component),I=s(96),C=s.n(I).a.create({baseURL:"https://api.corona-zahlen.org/"}),w=function(e){return C.get("districts/".concat(e))},L=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleClick=function(){a.queryApi()},a.state={"05111":{lastUpdated:"",cases7Per100k:0},"05113":{lastUpdated:"",cases7Per100k:0},"05114":{lastUpdated:"",cases7Per100k:0},"05162":{lastUpdated:"",cases7Per100k:0},"05122":{lastUpdated:"",cases7Per100k:0}},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.queryApi(),setInterval((function(){return e.queryApi()}),216e5)}},{key:"queryApi",value:function(){var e=this;Object.keys(this.state).forEach((function(t){Object(b.trackPromise)(w(t).then((function(e){return e.data})).then((function(s){var a={};a.cases7Per100k=s.data[t].weekIncidence,a.lastUpdated=s.meta.lastUpdate,e.setState(Object(p.a)({},"".concat(t),a))})).catch((function(e){console.error(e)})))}))}},{key:"render",value:function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(u.a,{as:"h1",children:"COVID-19-Erkrankung"}),Object(a.jsx)(u.a,{as:"h5",dividing:!0,children:"pro 100.000 Einwohner in den letzten 7 Tagen"}),Object(a.jsx)(O.a,{icon:!0,className:"ui right floated button",title:"aktualisieren",onClick:this.handleClick,children:Object(a.jsx)(x.a,{name:"refresh"})}),Object(a.jsx)("div",{className:"ui centered grid",children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(k.a.Row,{children:Object(a.jsx)(k.a.Column,{children:Object(a.jsx)(U,{city:"D\xfcsseldorf",cases7Per100k:this.state["05111"].cases7Per100k,lastUpdated:this.state["05111"].lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(k.a.Row,{children:Object(a.jsx)(k.a.Column,{children:Object(a.jsx)(U,{city:"Essen",cases7Per100k:this.state["05113"].cases7Per100k,lastUpdated:this.state["05113"].lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(k.a.Row,{children:Object(a.jsx)(k.a.Column,{children:Object(a.jsx)(U,{city:"Krefeld",cases7Per100k:this.state["05114"].cases7Per100k,lastUpdated:this.state["05114"].lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(k.a.Row,{children:Object(a.jsx)(k.a.Column,{children:Object(a.jsx)(U,{city:"Kreis Neuss",cases7Per100k:this.state["05162"].cases7Per100k,lastUpdated:this.state["05162"].lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(k.a.Row,{children:Object(a.jsx)(k.a.Column,{children:Object(a.jsx)(U,{city:"Solingen",cases7Per100k:this.state["05122"].cases7Per100k,lastUpdated:this.state["05122"].lastUpdated,promiseInProgress:this.props.promiseInProgress})})})]})})]})}}]),s}(c.a.Component),D=Object(b.promiseTrackerHoc)(L),R=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)(h.a,{style:{margin:20},children:Object(a.jsx)(D,{})})}}]),s}(c.a.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.2dbdbbb9.chunk.js.map