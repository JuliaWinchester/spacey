(window.webpackJsonpdopey=window.webpackJsonpdopey||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},3:function(e){e.exports=JSON.parse('{"coverImg":"./images/logo-smaller.png","subtitleImg":"./images/below-title.jpg","title":"NO SUCH THING AS LUCK","subtitle":"A Mash-Up of Lost Mines of Phandelver and Dragon of Icespire Peak","copy":"The galaxy is aflame with civil war, and there are credits to be made! Between the oppressive Empire and the idealistic but probably doomed Rebel Alliance, there is opportunity out there among the stars for scoundrels who are clever enough to find it and wise enough to choose exactly the right laws to break. Fortune and glory await!<br><br>Of course, if you hope to be able to sleep at night, your job as a career criminal becomes that much harder. You can\'t make a hyperspace jump without meeting a person in need or a cause worth getting mixed up in. But you\'ve got debts to pay, and the ship always needs fueling, and maybe a vicious Hutt gangster has decided that you\'re an employee for life, whether you like it or not. So many choices, what\'s an honest thief to do?","characterListTitle":"CREW MEMBERS","graveyardTitle":"FORMER MEMBERS","sessionsListTitle":"LOGS","shipTitle":"THE SHIP","author":"Julie Winchester","authorEmail":"julia.m.winchester@gmail.com","characters":[],"graveyard":["Chappy Quickstep. Level 5 Halfling Bard. Retired to Butterskull.","Enoch the Swordsman. Level 4 Human Fighter. Lost in Time and Space.","Friendly. Level 2 Firbolg Druid. Not as Friendly as Advertised."],"sessions":[{"name":"Episode I: ESCAPE FROM MOS SHUUTA","number":1}]}')},32:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),c=a.n(s),l=(a(32),a(33),a(12)),i=a(13),o=a(19),u=a(14),m=a(20);var h=function(e){return 1===e.session?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,'"... difficult to see. Always in motion is the future ..."'))):null},d=a(9),E=a.n(d),p=a(26),f=a.n(p),y=a(17),g=a.n(y),v=a(18),k=a.n(v),b=a(2),N=a.n(b),C=a(15),j=a.n(C),w=a(24),T=a(25),S=a(3);a(43);function L(e){return r.a.createElement(E.a,{key:e.name,className:"character-portrait-container",sm:4,xs:6},r.a.createElement("a",{href:"#card",onClick:e.onClick},r.a.createElement(g.a,{src:e.img,className:"character-portrait img-shadow",alt:e.name})),r.a.createElement("a",{href:"#card",onClick:e.onClick,className:"character-portrait-name text-info"},e.name))}function O(e){for(var t=e.slice(),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t}function I(e){var t=e.characters.map(function(t,a){return r.a.createElement(L,{key:t.name,name:t.name,img:t.imgpixel,onClick:function(t){return e.onClick(a,t)}})});return e.characters.length?r.a.createElement(N.a,{className:"justify-content-center character-portrait-grid"},t):r.a.createElement("div",null,r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("p",null,r.a.createElement("i",null,"\u201cSomebody has to save our skins! Into the garbage chute, flyboy.\u201d"))),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("p",null,"No characters yet.")))}function M(e){return e.character?r.a.createElement(N.a,{className:"justify-content-center media-container"},r.a.createElement(E.a,{xs:11},r.a.createElement(k.a,{className:""},r.a.createElement(k.a.Body,{className:"align-self-center"},r.a.createElement("h5",null,e.character.name),r.a.createElement("p",null,e.character.desc)),r.a.createElement(g.a,{className:"align-self-center media-image",src:e.character.img,alt:e.character.name,rounded:!0}))),r.a.createElement(E.a,{xs:.5,className:"icon-container"},r.a.createElement(w.a,{icon:T.a,size:"lg",onClick:e.onClick}))):null}function x(e){return r.a.createElement("div",{className:"session"},r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("h4",null,e.session.name)),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("a",{className:"return-link",href:"#session",onClick:e.onClick},"Return To List of Sessions")),r.a.createElement(N.a,{className:"justify-content-center",noGutters:!0},r.a.createElement(h,{session:e.session.number})))}function A(e){var t=e.sessions.map(function(t,a){return r.a.createElement(N.a,{key:a,className:"justify-content-center"},r.a.createElement("a",{className:"text-info",href:"#session",onClick:function(t){return e.onClick(a,t)}},t.name))});return r.a.createElement("div",null,t)}var R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={current:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e,t){this.setState({current:e})}},{key:"handleReturnClick",value:function(e){this.setState({current:null})}},{key:"render",value:function(){var e=this;return null===this.state.current?r.a.createElement("div",null,r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("h4",null,this.props.title)),r.a.createElement(A,{sessions:this.props.sessions,onClick:function(t,a){return e.handleClick(t,a)}})):r.a.createElement("div",null,r.a.createElement(x,{session:this.props.sessions[this.state.current],onClick:function(t){return e.handleReturnClick(t)}}))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={currentCharacter:null,characters:O(S.characters),sessions:S.sessions,coverImg:S.coverImg,subtitleImg:S.subtitleImg,title:S.title,subtitle:S.subtitle,copy:S.copy,characterListTitle:S.characterListTitle,sessionsListTitle:S.sessionsListTitle,shipTitle:S.shipTitle,graveyardTitle:S.graveyardTitle,graveyard:S.graveyard,author:S.author,authorEmail:S.authorEmail,testVar:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e,t){this.setState({currentCharacter:this.state.characters[e]})}},{key:"handleCardCloseClick",value:function(e){e.preventDefault(),this.setState({currentCharacter:null})}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{className:"App"},r.a.createElement("img",{src:this.state.coverImg,className:"App-logo",alt:"Star Wars Edge of the Empire: No Such Thing As Luck"}),r.a.createElement("img",{src:this.state.subtitleImg,className:"App-logo",alt:"Two scoundrels blasting stormtroopers in a landspeeder"}),r.a.createElement(N.a,{className:"justify-content-center top-spacing-6",noGutters:!0},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.copy}})),r.a.createElement(N.a,{className:"justify-content-center middle-divider",noGutters:!0}),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("h4",null,this.state.characterListTitle)),r.a.createElement(I,{characters:this.state.characters,onClick:function(t,a){return e.handleClick(t,a)}}),r.a.createElement(j.a,{id:"card"},r.a.createElement(N.a,{className:"justify-content-center top-spacing bottom-spacing"},r.a.createElement(M,{character:this.state.currentCharacter,onClick:function(t){return e.handleCardCloseClick(t)}}))),r.a.createElement(N.a,{className:"justify-content-center middle-divider",noGutters:!0}),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("h4",null,this.state.shipTitle)),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("p",null,r.a.createElement("i",null,"\u201cShe may not look like much, but she's got it where it counts, kid.\u201d"))),r.a.createElement(N.a,{className:"justify-content-center"},r.a.createElement("p",null,"No ship yet.")),r.a.createElement(j.a,{id:"session"},r.a.createElement(N.a,{className:"justify-content-center middle-divider",noGutters:!0})),r.a.createElement(R,{sessions:this.state.sessions,title:this.state.sessionsListTitle}),r.a.createElement(N.a,{className:"justify-content-center bottom-divider",noGutters:!0}),r.a.createElement(N.a,{className:"footer justify-content-center"},r.a.createElement(E.a,null,r.a.createElement("span",null,this.state.author)),r.a.createElement(E.a,null,r.a.createElement("span",null,this.state.authorEmail))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.4c53c4d9.chunk.js.map