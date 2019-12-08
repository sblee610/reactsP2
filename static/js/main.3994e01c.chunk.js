(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),s=(n(15),n(1)),l=n(2),o=n(4),u=n(3),d=n(5),h=(n(16),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.data,n=0;n<t.length;)e.push(i.a.createElement("li",{key:t[n].id},i.a.createElement("a",{href:"/content/"+t[n].id,"data-id":t[n].id,onClick:function(e){e.preventDefault(),this.props.onChangePage(e.target.dataset.id)}.bind(this)},t[n].title))),n+=1;return i.a.createElement("nav",null,i.a.createElement("ul",null,e))}}]),t}(a.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage()}.bind(this)},this.props.title)),this.props.sub)}}]),t}(a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,this.props.title),this.props.desc)}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,"Create"),i.a.createElement("form",{action:"/create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.decs.value)}.bind(this)},i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",placeholder:"title"})),i.a.createElement("p",null,i.a.createElement("textarea",{name:"decs",placeholder:"description"})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),f=n(9),E=n(6),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={id:n.props.data.id,title:n.props.data.title,desc:n.props.data.desc},n.inputFormHandler=n.inputFormHandler.bind(Object(E.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"inputFormHandler",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,"Update"),i.a.createElement("form",{action:"/create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc)}.bind(this)},i.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:this.inputFormHandler})),i.a.createElement("p",null,i.a.createElement("textarea",{name:"desc",placeholder:"description",value:this.state.desc,onChange:this.inputFormHandler})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",{id:"control"},i.a.createElement("li",null,i.a.createElement("a",{href:"/create",onClick:function(e){e.preventDefault(),this.props.onChangeMode("create")}.bind(this)},"create")),i.a.createElement("li",null,i.a.createElement("a",{href:"/update",onClick:function(e){e.preventDefault(),this.props.onChangeMode("update")}.bind(this)},"update")),i.a.createElement("li",null,i.a.createElement("input",{onClick:function(e){e.preventDefault(),this.props.onChangeMode("delete")}.bind(this),type:"button",value:"delete"})))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).max_content_id=3,n.state={mode:"welcome",selected_content_id:2,subject:{title:"Fun Company",sub:"Fun Startup Embassy LLC"},welcome:{title:"Welcome",desc:"This is Eric's coding playground."},contents:[{id:1,title:"HTML",desc:"HTML is HyperText ..."},{id:2,title:"CSS",desc:"CSS is ... "},{id:3,title:"JavaScript",desc:"JavaScript is ..."}]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getReadContent",value:function(){for(var e=0;e<this.state.contents.length;){var t=this.state.contents[e];if(t.id===this.state.selected_content_id)return t;e+=1}}},{key:"getContent",value:function(){var e,t,n=null;if("welcome"===this.state.mode)e=this.state.welcome.title,t=this.state.welcome.desc,n=i.a.createElement(m,{title:e,desc:t});else if("read"===this.state.mode){var a=this.getReadContent();n=i.a.createElement(m,{title:a.title,desc:a.desc})}else"create"===this.state.mode?n=i.a.createElement(b,{onSubmit:function(e,t){this.max_content_id=this.max_content_id+1;var n=Array.from(this.state.contents);n.push({id:this.max_content_id,title:e,desc:t}),this.setState({contents:n,selected_content_id:this.max_content_id,mode:"read"})}.bind(this)}):"update"===this.state.mode&&(a=this.getReadContent(),n=i.a.createElement(v,{data:a,onSubmit:function(e,t,n){for(var a=Array.from(this.state.contents),i=0;i<a.length;){if(a[i].id===e){a[i]={id:e,title:t,desc:n};break}i+=1}this.setState({contents:a,mode:"read"})}.bind(this)}));return n}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),i.a.createElement(h,{data:this.state.contents,onChangePage:function(e){this.setState({mode:"read",selected_content_id:Number(e)})}.bind(this)}),i.a.createElement(j,{onChangeMode:function(e){if("delete"===e){if(window.confirm("are you sure?")){for(var t=Array.from(this.state.contents),n=0;n<t.length;){if(t[n].id===this.state.selected_content_id){t.splice(n,1);break}n+=1}this.setState({mode:"welcome",contents:t}),alert("deleted!")}}else this.setState({mode:e})}.bind(this)}),this.getContent())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3994e01c.chunk.js.map