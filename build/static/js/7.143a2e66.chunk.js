(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{245:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(62);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},258:function(e,t,a){e.exports={usersRow:"UsersRow_usersRow__2FdwW"}},259:function(e,t,a){e.exports={userItem:"UserItem_userItem__1OE2P",left:"UserItem_left__3XODb",right:"UserItem_right__2YycU",wrapAvatar:"UserItem_wrapAvatar__Z9HmK"}},260:function(e,t,a){e.exports={wrapPagination:"Paginator_wrapPagination__1q1vS",active:"Paginator_active__28aoS"}},318:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(32),o=a(34),i=a(33),s=a(0),l=a.n(s),c=a(16),u=a(83),m=a(258),f=a.n(m),g=a(259),p=a.n(g),h=(a(46),a(15)),P=a(61),d=function(e){var t=e.user,a=e.onFollowBtnClick,n=e.followBtnDisabled,r=t.id,o=t.name,i=t.status,s=t.followed,c=t.photos,u="/profile/".concat(r),m=c.small,f=c.large,g=m||f,d=s?"Unfollow":"Follow";return l.a.createElement("div",{className:p.a.userItem},l.a.createElement("div",{className:p.a.left},l.a.createElement("div",{className:p.a.wrapAvatar},l.a.createElement(h.b,{to:u},l.a.createElement(P.a,{image:g}))),l.a.createElement("div",{className:p.a.actions},l.a.createElement("button",{disabled:n,onClick:function(){a(t)}},d))),l.a.createElement("div",{className:p.a.right},l.a.createElement(h.b,{to:u},l.a.createElement("span",{className:p.a.fullname},o)),l.a.createElement("div",{className:p.a.status},i)))},v=a(36),w=a(245),b=a(260),E=a.n(b),C=function(e){var t=e.totalItemsCount,a=e.itemsPerPage,n=e.currentPage,r=e.onPageClick,o=e.pagesPerPortion,i=void 0===o?5:o,c=e.currentPortion,u=void 0===c?0:c,m=Object(s.useState)(u),f=Object(w.a)(m,2),g=f[0],p=f[1],h=Math.ceil(t/a),P=Math.ceil(h/i),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=e===n?E.a.active:"";return l.a.createElement("li",{key:e},l.a.createElement("button",{className:a,onClick:function(){t(e)}},e))},v=function(){var e=[];e.length=0;for(var t=g*i,a=t+=2,n=1;a<h&&n<=i;a++,n++)e.push(a);return e}().map((function(e){return d(e)}));return l.a.createElement("div",{className:E.a.wrapPagination},l.a.createElement("ul",null,d(1),g>0&&d("PREV",(function(){p(g-1)})),v,g<P-1&&d("NEXT",(function(){p(g+1)})),d(h)))},y=function(e){var t=e.users,a=e.totalItemsCount,n=e.itemsPerPage,r=e.currentPage,o=e.onPageClick,i=e.onFollowBtnClick,s=e.isDataFetching,c=e.followingFetchingList,u=t.map((function(e,t){var a=c.includes(e.id);return l.a.createElement(d,{key:t,user:e,followBtnDisabled:a,onFollowBtnClick:i})}));return l.a.createElement("div",{className:f.a.usersRow},l.a.createElement("h3",null,"Users"),l.a.createElement(C,{currentPage:r,itemsPerPage:n,totalItemsCount:a,onPageClick:o}),s?l.a.createElement(v.a,null):l.a.createElement("ul",null,u))},F=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onPageClick=function(t){e.props.fetchUsers(e.props.itemsPerPage,t)},e.onFollowBtnClick=function(t){var a=t.id;t.followed?e.props.unfollow(a):e.props.follow(a)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUsers(this.props.itemsPerPage,this.props.currentPage)}},{key:"render",value:function(){var e=this.props,t=e.users,a=e.totalItemsCount,n=e.itemsPerPage,r=e.currentPage,o=e.setUsers,i=e.isDataFetching,s=e.isFollowingFetching,c=e.followingFetchingList;return l.a.createElement(y,{users:t,totalItemsCount:a,itemsPerPage:n,currentPage:r,onPageClick:this.onPageClick,setUsers:o,onFollowBtnClick:this.onFollowBtnClick,isDataFetching:i,isFollowingFetching:s,followingFetchingList:c})}}]),a}(l.a.Component);t.default=Object(c.b)((function(e){return{users:(i=e,i.usersReducer.users),currentPage:(o=e,o.usersReducer.currentPage),itemsPerPage:(r=e,r.usersReducer.itemsPerPage),totalItemsCount:(n=e,n.usersReducer.totalItemsCount),isDataFetching:(a=e,a.usersReducer.isDataFetching),followingFetchingList:(t=e,t.usersReducer.followingFetchingList)};var t,a,n,r,o,i}),{follow:u.c,unfollow:u.e,setCurrentPage:u.d,fetchUsers:u.b})(F)}}]);
//# sourceMappingURL=7.143a2e66.chunk.js.map