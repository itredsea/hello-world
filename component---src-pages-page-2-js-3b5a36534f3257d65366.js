(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),n=t(217),c=t(219);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement("h1",null,"Hi from the second page"),l.a.createElement("p",null,"Welcome to page 2"),l.a.createElement(n.a,{to:"/"},"Go back to the homepage"))}},216:function(e,a,t){var r;e.exports=(r=t(218))&&r.default||r},217:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var r=t(1),l=t.n(r),n=t(0),c=t.n(n),o=t(215),i=t.n(o);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return o.withPrefix}),t(216);var s=l.a.createContext({}),m=function(e){return l.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},218:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),n=t(0),c=t.n(n),o=t(42),i=t(3),s=function(e){var a=e.location,t=i.a.getResourcesForPathname(a.pathname);return l.a.createElement(o.a,{location:a,pageResources:t})};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},219:function(e,a,t){"use strict";var r=t(222),l=t(1),n=t.n(l),c=t(0),o=t.n(c),i=t(217),s=t(225),m=t(287),d=t(223),p=t(228),u=t(233),b=t(363),h=(t(232),t(231),t(230),t(221),t(215)),f=t.n(h),v=function(e){var a=e.siteTitle;return n.a.createElement("div",null,n.a.createElement("div",{className:"text-center py-3"},n.a.createElement("h1",null,n.a.createElement(f.a,{to:"/"},a.title))),n.a.createElement("div",{className:"text-center py-3"},n.a.createElement(f.a,{to:"/"},n.a.createElement("img",{src:a.avatar,className:"rounded-circle",alt:"avatar",style:{width:"5rem"}})),n.a.createElement("br",null),n.a.createElement(f.a,{to:"/"},a.author),n.a.createElement("br",null),n.a.createElement("blockquote",{className:"blockquote"},a.bio)))},E=(t(224),function(e){e.children;var a=e.postCount,t=e.partners;return n.a.createElement("div",null,n.a.createElement("div",{className:"row d-flex h-100"},n.a.createElement("div",{className:"col-12 mb-5"},n.a.createElement("ul",{className:"nav flex-column p-2"},n.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},n.a.createElement(f.a,{className:"nav-link",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},n.a.createElement(f.a,{className:"nav-link d-flex justify-content-between align-items-center",to:"/blog/"},"Blog ",n.a.createElement("span",{className:"badge badge-light badge-pill"},a," Posts"))),n.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},n.a.createElement(f.a,{className:"nav-link",to:"/githubrepos/"},"GitHub Repositories")),n.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},n.a.createElement(f.a,{className:"nav-link",to:"/contributedrepos/"},"GitHub Contributes")),n.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},n.a.createElement(f.a,{className:"nav-link",to:"/projects/"},"Projects")))),n.a.createElement("p",{className:"text-left mb-1 mx-3 px-3"},"built with:"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-center m-auto w-75"},t.edges.map(function(e){var a=e.node;return n.a.createElement("div",{key:a.id,className:"p-1"},n.a.createElement("img",{src:a.publicURL,title:a.name,alt:a.name,style:{height:"1.5rem"}}))}))))}),g=function(e){var a=e.siteTitle;return n.a.createElement("div",{className:"row navtop p-2 mb-3"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("a",{href:"{{ repo_url }}{{ current_page.abs_url.rstrip('index.html').rstrip('/') }}.md",className:"icon icon-github"},n.a.createElement("i",{className:"fa fa-edit"})," Edit")),n.a.createElement("div",{className:"col-sm-6 text-center"},a),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("a",{href:"{{ repo_url }}{{ repo_doc_path }}/{{ current_page.input_path }}",className:"icon icon-github"}," Edit on GitHub")))},w=function(){return n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"footer-copyright py-3 border-top border-light"},n.a.createElement("div",{className:"container text-center"},"© 2018 Copyright: ",n.a.createElement(f.a,{to:"/"},"Ehab Developer"))))},N=t(32),y=t.n(N),j=function(e){function a(){var a;return(a=e.call(this)||this).state={intervalId:0},a}y()(a,e);var t=a.prototype;return t.scrollStep=function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)},t.scrollToTop=function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})},t.render=function(){var e=this;return n.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},n.a.createElement("span",{className:""},n.a.createElement("i",{className:"fa fa-chevron-up","aria-hidden":"true"})))},a}(n.a.Component),x=(t(229),new p.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer c8484a1fdd477a6973c0afb4a1c6af466631100b"}})),k=Object(u.a)(function(e){e.graphQLErrors,e.networkError}),q=d.a.from([k,x]),R=new b.a,P=new m.a({link:q,cache:R}),G=function(e){var a=e.children;return e.data,n.a.createElement(s.ApolloProvider,{client:P},n.a.createElement(i.b,{query:"1251520567",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col-sm-3 border-right border-light"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-1"},n.a.createElement(v,{siteTitle:e.site.siteMetadata})),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"row d-flex h-100"},n.a.createElement("div",{className:"col-12 py-3"},n.a.createElement(E,{postCount:e.allMarkdownRemark.totalCount,partners:e.allFile})))))),n.a.createElement("div",{className:"col col-sm-9 px-5"},n.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{className:"row"},a)),n.a.createElement(w,null),n.a.createElement(j,{scrollStepInPx:"50",delayInMs:"16.66"}))))},data:r}))};G.propTypes={children:o.a.node.isRequired},a.a=G},221:function(e,a,t){},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",avatar:"/static/avatar-c6d3c1d6f6f09d95d1a3085435c54c6a.jpeg",author:"Ehab Ashour",bio:"Happy is a man who can make a living by his hobby"}},allMarkdownRemark:{totalCount:1},allFile:{edges:[{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/bootstrap.svg absPath of file",name:"bootstrap",publicURL:"/hello-world/static/bootstrap-ba23603c8668f4fe65dc2c7996053224.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/apollogql.svg absPath of file",name:"apollogql",publicURL:"/hello-world/static/apollogql-69b010268481c2d898aaabaa933da0a1.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/gatsby.svg absPath of file",name:"gatsby",publicURL:"/hello-world/static/gatsby-a0cd0faf3940f8dc7d73411fd0ff53d9.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/graphql.svg absPath of file",name:"graphql",publicURL:"/hello-world/static/graphql-638af725813347ca8c7a6b855f12f1f3.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/html5.svg absPath of file",name:"html5",publicURL:"/hello-world/static/html5-f618641c78751b81086e2cd729ddb296.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/mdb.jpeg absPath of file",name:"mdb",publicURL:"/hello-world/static/mdb-5963e3e9ccca15d54a278c7ac85e115c.jpeg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/github.svg absPath of file",name:"github",publicURL:"/hello-world/static/github-dbdee3b8aeb2ff110ed2dc9941b474a6.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/react.svg absPath of file",name:"react",publicURL:"/hello-world/static/react-fbe47510aadf3c316fc615998bf2b339.svg"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-3b5a36534f3257d65366.js.map