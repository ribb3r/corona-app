(this.webpackJsonpcases7days=this.webpackJsonpcases7days||[]).push([[0],{139:function(e,s,t){"use strict";t.r(s);var a=t(4),r=t(0),n=t.n(r),c=t(29),i=t.n(c),o=(t(112),t(35)),d=t(36),l=t(47),j=t(44),h=t(153),p=t(93),u=t(74),b=t(159),O=t(155),k=t(49),x=t(160),m=t(156),f=t(154),g=t(158),P=t(53),y=t(94),v=t.n(y),U=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(o.a)(this,t),a=s.call(this,e),P.locale("de-german",v.a),a}return Object(d.a)(t,[{key:"render",value:function(){var e;if(this.props.promiseInProgress)e=Object(a.jsx)(m.a,{size:"huge",children:Object(a.jsx)(f.a,{style:{width:220},children:Object(a.jsxs)(f.a.Header,{children:[Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{}),Object(a.jsx)(f.a.Line,{})]})})});else{var s="green";this.props.cases7Per100k>=200?s="red":this.props.cases7Per100k>=100?s="orange":this.props.cases7Per100k>=50&&this.props.cases7Per100k<100&&(s="yellow"),e=Object(a.jsxs)(m.a,{size:"huge",color:s,children:[Object(a.jsx)(m.a.Label,{children:this.props.city}),Object(a.jsxs)("p",{children:["Daten vom: ",""===this.props.lastUpdated?"unbekannt":P(this.props.lastUpdated).format("dd. DD.MM.YYYY")]}),Object(a.jsx)(m.a.Value,{children:Math.round(this.props.cases7Per100k)})]})}return Object(a.jsx)(g.a,{raised:!0,style:{minWidth:250,maxWidth:630,height:166},children:e})}}]),t}(n.a.Component),I=t(96),C=t.n(I).a.create({baseURL:"https://public.opendatasoft.com/api/records/1.0/search/"}),w=function(e){return C.get("?dataset=covid-19-germany-landkreise",{params:e})},L=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=s.call(this,e)).handleClick=function(){a.queryApi()},a.state={essen:{lastUpdated:"",cases7Per100k:0},krefeld:{lastUpdated:"",cases7Per100k:0},neuss:{lastUpdated:"",cases7Per100k:0},solingen:{lastUpdated:"",cases7Per100k:0}},a}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.queryApi(),setInterval((function(){return e.queryApi()}),216e5)}},{key:"queryApi",value:function(){var e=this;["essen","krefeld","neuss","solingen"].forEach((function(s){var t=new URLSearchParams([["q",s]]);Object(u.trackPromise)(w(t).then((function(e){return e.data.records[0].fields})).then((function(t){var a={};a.cases7Per100k=t.cases7_per_100k,a.lastUpdated=t.last_update,e.setState(Object(p.a)({},"".concat(s),a))})).catch((function(e){console.error(e)})))}))}},{key:"render",value:function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(b.a,{as:"h1",children:"COVID-19-Erkrankung"}),Object(a.jsx)(b.a,{as:"h5",dividing:!0,children:"pro 100.000 Einwohner in den letzten 7 Tagen"}),Object(a.jsx)(O.a,{icon:!0,className:"ui right floated button",title:"aktualisieren",onClick:this.handleClick,children:Object(a.jsx)(k.a,{name:"refresh"})}),Object(a.jsx)("div",{className:"ui centered grid",children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(x.a.Row,{children:Object(a.jsx)(x.a.Column,{children:Object(a.jsx)(U,{city:"Essen",cases7Per100k:this.state.essen.cases7Per100k,lastUpdated:this.state.essen.lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(x.a.Row,{children:Object(a.jsx)(x.a.Column,{children:Object(a.jsx)(U,{city:"Krefeld",cases7Per100k:this.state.krefeld.cases7Per100k,lastUpdated:this.state.krefeld.lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(x.a.Row,{children:Object(a.jsx)(x.a.Column,{children:Object(a.jsx)(U,{city:"Neuss",cases7Per100k:this.state.neuss.cases7Per100k,lastUpdated:this.state.neuss.lastUpdated,promiseInProgress:this.props.promiseInProgress})})}),Object(a.jsx)(x.a.Row,{children:Object(a.jsx)(x.a.Column,{children:Object(a.jsx)(U,{city:"Solingen",cases7Per100k:this.state.solingen.cases7Per100k,lastUpdated:this.state.solingen.lastUpdated,promiseInProgress:this.props.promiseInProgress})})})]})})]})}}]),t}(n.a.Component),R=Object(u.promiseTrackerHoc)(L),q=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(a.jsx)(h.a,{style:{margin:20},children:Object(a.jsx)(R,{})})}}]),t}(n.a.Component);i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.b6d63e48.chunk.js.map