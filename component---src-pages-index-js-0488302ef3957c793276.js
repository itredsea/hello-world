(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return c});var r=t(1),n=t.n(r),l=t(219);a.default=function(e){var a=e.data;return n.a.createElement(l.a,null,n.a.createElement("div",{className:"animated fadeInRight"},a.allMarkdownRemark.edges.map(function(e){var a=e.node;return n.a.createElement("div",{key:a.id},n.a.createElement("p",{className:"h2 invisible"},a.frontmatter.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}))})))};var c="1331899909"},216:function(e,a,t){var r;e.exports=(r=t(218))&&r.default||r},217:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var r=t(1),n=t.n(r),l=t(0),c=t.n(l),o=t(215),i=t.n(o);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return o.withPrefix}),t(216);var s=n.a.createContext({}),m=function(e){return n.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},218:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(0),c=t.n(l),o=t(42),i=t(3),s=function(e){var a=e.location,t=i.a.getResourcesForPathname(a.pathname);return n.a.createElement(o.a,{location:a,pageResources:t})};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},219:function(e,a,t){"use strict";var r=t(222),n=t(1),l=t.n(n),c=t(0),o=t.n(c),i=t(217),s=t(225),m=t(287),d=t(223),u=t(228),p=t(233),b=t(363),h=(t(232),t(231),t(230),t(221),t(215)),f=t.n(h),v=function(e){var a=e.siteTitle;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center py-3"},l.a.createElement("h1",null,l.a.createElement(f.a,{to:"/"},a.title))),l.a.createElement("div",{className:"text-center py-3"},l.a.createElement(f.a,{to:"/"},l.a.createElement("img",{src:a.avatar,className:"rounded-circle",alt:"avatar",style:{width:"5rem"}})),l.a.createElement("br",null),l.a.createElement(f.a,{to:"/"},a.author),l.a.createElement("br",null),l.a.createElement("blockquote",{className:"blockquote"},a.bio)))},E=(t(224),function(e){e.children;var a=e.postCount,t=e.partners;return l.a.createElement("div",null,l.a.createElement("div",{className:"row d-flex h-100"},l.a.createElement("div",{className:"col-12 mb-5"},l.a.createElement("ul",{className:"nav flex-column p-2"},l.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},l.a.createElement(f.a,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},l.a.createElement(f.a,{className:"nav-link d-flex justify-content-between align-items-center",to:"/blog/"},"Blog ",l.a.createElement("span",{className:"badge badge-light badge-pill"},a," Posts"))),l.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},l.a.createElement(f.a,{className:"nav-link",to:"/githubrepos/"},"GitHub Repositories")),l.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},l.a.createElement(f.a,{className:"nav-link",to:"/contributedrepos/"},"GitHub Contributes")),l.a.createElement("li",{className:"nav-item hoverable border-bottom border-light"},l.a.createElement(f.a,{className:"nav-link",to:"/projects/"},"Projects")))),l.a.createElement("p",{className:"text-left mb-1 mx-3 px-3"},"built with:"),l.a.createElement("div",{className:"d-flex flex-wrap justify-content-center m-auto w-75"},t.edges.map(function(e){var a=e.node;return l.a.createElement("div",{key:a.id,className:"p-1"},l.a.createElement("img",{src:a.publicURL,title:a.name,alt:a.name,style:{height:"1.5rem"}}))}))))}),g=function(e){var a=e.siteTitle;return l.a.createElement("div",{className:"row navtop p-2 mb-3"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("a",{href:"{{ repo_url }}{{ current_page.abs_url.rstrip('index.html').rstrip('/') }}.md",className:"icon icon-github"},l.a.createElement("i",{className:"fa fa-edit"})," Edit")),l.a.createElement("div",{className:"col-sm-6 text-center"},a),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("a",{href:"{{ repo_url }}{{ repo_doc_path }}/{{ current_page.input_path }}",className:"icon icon-github"}," Edit on GitHub")))},w=function(){return l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"footer-copyright py-3 border-top border-light"},l.a.createElement("div",{className:"container text-center"},"© 2018 Copyright: ",l.a.createElement(f.a,{to:"/"},"Ehab Developer"))))},N=t(32),y=t.n(N),j=function(e){function a(){var a;return(a=e.call(this)||this).state={intervalId:0},a}y()(a,e);var t=a.prototype;return t.scrollStep=function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)},t.scrollToTop=function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})},t.render=function(){var e=this;return l.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},l.a.createElement("span",{className:""},l.a.createElement("i",{className:"fa fa-chevron-up","aria-hidden":"true"})))},a}(l.a.Component),k=(t(229),new u.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer c8484a1fdd477a6973c0afb4a1c6af466631100b"}})),x=Object(p.a)(function(e){e.graphQLErrors,e.networkError}),R=d.a.from([x,k]),q=new b.a,P=new m.a({link:R,cache:q}),L=function(e){var a=e.children;return e.data,l.a.createElement(s.ApolloProvider,{client:P},l.a.createElement(i.b,{query:"1251520567",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-sm-3 border-right border-light"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 mb-1"},l.a.createElement(v,{siteTitle:e.site.siteMetadata})),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"row d-flex h-100"},l.a.createElement("div",{className:"col-12 py-3"},l.a.createElement(E,{postCount:e.allMarkdownRemark.totalCount,partners:e.allFile})))))),l.a.createElement("div",{className:"col col-sm-9 px-5"},l.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"row"},a)),l.a.createElement(w,null),l.a.createElement(j,{scrollStepInPx:"50",delayInMs:"16.66"}))))},data:r}))};L.propTypes={children:o.a.node.isRequired},a.a=L},221:function(e,a,t){},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",avatar:"/static/avatar-c6d3c1d6f6f09d95d1a3085435c54c6a.jpeg",author:"Ehab Ashour",bio:"Happy is a man who can make a living by his hobby"}},allMarkdownRemark:{totalCount:1},allFile:{edges:[{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/bootstrap.svg absPath of file",name:"bootstrap",publicURL:"/hello-world/static/bootstrap-ba23603c8668f4fe65dc2c7996053224.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/apollogql.svg absPath of file",name:"apollogql",publicURL:"/hello-world/static/apollogql-69b010268481c2d898aaabaa933da0a1.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/gatsby.svg absPath of file",name:"gatsby",publicURL:"/hello-world/static/gatsby-a0cd0faf3940f8dc7d73411fd0ff53d9.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/graphql.svg absPath of file",name:"graphql",publicURL:"/hello-world/static/graphql-638af725813347ca8c7a6b855f12f1f3.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/html5.svg absPath of file",name:"html5",publicURL:"/hello-world/static/html5-f618641c78751b81086e2cd729ddb296.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/mdb.jpeg absPath of file",name:"mdb",publicURL:"/hello-world/static/mdb-5963e3e9ccca15d54a278c7ac85e115c.jpeg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/github.svg absPath of file",name:"github",publicURL:"/hello-world/static/github-dbdee3b8aeb2ff110ed2dc9941b474a6.svg"}},{node:{id:"/home/ehab/mijnprojecten/Gatsby/new/portfolio/src/static/partners/react.svg absPath of file",name:"react",publicURL:"/hello-world/static/react-fbe47510aadf3c316fc615998bf2b339.svg"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0488302ef3957c793276.js.map