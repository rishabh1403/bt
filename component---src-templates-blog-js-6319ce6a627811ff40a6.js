(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(M,N,D){"use strict";D.r(N),D.d(N,"query",function(){return E});var j=D(0),I=D.n(j),T=D(84),g=D(199),E="3655757794";N.default=function(M){return console.log(M.pageContext),console.log(M.data.markdownRemark),I.a.createElement(g.a,null,I.a.createElement("div",null,M.data.markdownRemark.frontmatter.title,I.a.createElement("div",{dangerouslySetInnerHTML:{__html:M.data.markdownRemark.html}}),M.pageContext.next&&I.a.createElement(T.Link,{to:M.pageContext.next.frontmatter.path},"Next"),M.pageContext.prev&&I.a.createElement(T.Link,{to:M.pageContext.prev.frontmatter.path},M.pageContext.prev.frontmatter.title)))}},199:function(M,N,D){"use strict";var j=D(0),I=D.n(j),T=D(201),g=D.n(T),E=D(178),u=D.n(E),L=D(198),A=[{path:"/",text:"home"},{path:"/blog",text:"blog"},{path:"/contact",text:"contact"}],z=[{icon:I.a.createElement(L.b,null),url:"https://twitter.com"},{icon:I.a.createElement(L.d,null),url:"https://twitter.com"},{icon:I.a.createElement(L.c,null),url:"https://twitter.com"}],y=D(200),x=D.n(y),O=function(){var M=Object(j.useState)(),N=M[0],D=M[1];return I.a.createElement("nav",{className:u.a.navbar},I.a.createElement("div",{className:u.a.navCenter},I.a.createElement("div",{className:u.a.navHeader},I.a.createElement("img",{src:x.a,alt:"backroads logo"}),I.a.createElement("button",{type:"button",className:u.a.logoBtn,onClick:function(){D(function(M){return!M})}},I.a.createElement(L.a,{className:u.a.logoIcon}))),I.a.createElement("ul",{className:N?u.a.navLinks+" "+u.a.showNav:""+u.a.navLinks},A.map(function(M,N){return I.a.createElement("li",{key:N},I.a.createElement(g.a,{fade:!0,to:M.path},M.text))})),I.a.createElement("div",{className:u.a.navSocialLinks},z.map(function(M,N){return I.a.createElement("a",{key:N,href:M.url,target:"_blank",rel:"noopener noreferrer"},M.icon)}))))},Q=D(179),e=D.n(Q),c=D(84),i=function(){return I.a.createElement("footer",{className:e.a.footer},I.a.createElement("div",{className:e.a.links},A.map(function(M,N){return I.a.createElement(c.Link,{key:N,to:M.path},M.text)})),I.a.createElement("div",{className:e.a.icons},z.map(function(M,N){return I.a.createElement("a",{key:N,href:M.url,target:"_blank",rel:"noopener noreferrer"},M.icon)})),I.a.createElement("div",{className:e.a.copyright},"copyright © backroads travel company ",(new Date).getFullYear()," all rights reserved"))};D(180),N.a=function(M){var N=M.children;return I.a.createElement("main",null,I.a.createElement(O,null),N,I.a.createElement(i,null))}},200:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTc1IDE5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNjg4IDkuMzZDMTEuNjY0IDkuNTY4IDEyLjQ0OCAxMC4wNTYgMTMuMDQgMTAuODI0QzEzLjYzMiAxMS41NzYgMTMuOTI4IDEyLjQ0IDEzLjkyOCAxMy40MTZDMTMuOTI4IDE0LjgyNCAxMy40MzIgMTUuOTQ0IDEyLjQ0IDE2Ljc3NkMxMS40NjQgMTcuNTkyIDEwLjA5NiAxOCA4LjMzNiAxOEgwLjQ4OFYxLjE1Mkg4LjA3MkM5Ljc4NCAxLjE1MiAxMS4xMiAxLjU0NCAxMi4wOCAyLjMyOEMxMy4wNTYgMy4xMTIgMTMuNTQ0IDQuMTc2IDEzLjU0NCA1LjUyQzEzLjU0NCA2LjUxMiAxMy4yOCA3LjMzNiAxMi43NTIgNy45OTJDMTIuMjQgOC42NDggMTEuNTUyIDkuMTA0IDEwLjY4OCA5LjM2Wk00LjU5MiA3Ljk2OEg3LjI4QzcuOTUyIDcuOTY4IDguNDY0IDcuODI0IDguODE2IDcuNTM2QzkuMTg0IDcuMjMyIDkuMzY4IDYuNzkyIDkuMzY4IDYuMjE2QzkuMzY4IDUuNjQgOS4xODQgNS4yIDguODE2IDQuODk2QzguNDY0IDQuNTkyIDcuOTUyIDQuNDQgNy4yOCA0LjQ0SDQuNTkyVjcuOTY4Wk03LjYxNiAxNC42ODhDOC4zMDQgMTQuNjg4IDguODMyIDE0LjUzNiA5LjIgMTQuMjMyQzkuNTg0IDEzLjkxMiA5Ljc3NiAxMy40NTYgOS43NzYgMTIuODY0QzkuNzc2IDEyLjI3MiA5LjU3NiAxMS44MDggOS4xNzYgMTEuNDcyQzguNzkyIDExLjEzNiA4LjI1NiAxMC45NjggNy41NjggMTAuOTY4SDQuNTkyVjE0LjY4OEg3LjYxNlpNMjAuMjkyMyAxMS4yOEMyMC4yOTIzIDkuOTA0IDIwLjU0ODMgOC42OTYgMjEuMDYwMyA3LjY1NkMyMS41ODgzIDYuNjE2IDIyLjMwMDMgNS44MTYgMjMuMTk2MyA1LjI1NkMyNC4wOTIzIDQuNjk2IDI1LjA5MjMgNC40MTYgMjYuMTk2MyA0LjQxNkMyNy4xNDAzIDQuNDE2IDI3Ljk2NDMgNC42MDggMjguNjY4MyA0Ljk5MkMyOS4zODgzIDUuMzc2IDI5Ljk0MDMgNS44OCAzMC4zMjQzIDYuNTA0VjQuNjA4SDM0LjQyODNWMThIMzAuMzI0M1YxNi4xMDRDMjkuOTI0MyAxNi43MjggMjkuMzY0MyAxNy4yMzIgMjguNjQ0MyAxNy42MTZDMjcuOTQwMyAxOCAyNy4xMTYzIDE4LjE5MiAyNi4xNzIzIDE4LjE5MkMyNS4wODQzIDE4LjE5MiAyNC4wOTIzIDE3LjkxMiAyMy4xOTYzIDE3LjM1MkMyMi4zMDAzIDE2Ljc3NiAyMS41ODgzIDE1Ljk2OCAyMS4wNjAzIDE0LjkyOEMyMC41NDgzIDEzLjg3MiAyMC4yOTIzIDEyLjY1NiAyMC4yOTIzIDExLjI4Wk0zMC4zMjQzIDExLjMwNEMzMC4zMjQzIDEwLjI4IDMwLjAzNjMgOS40NzIgMjkuNDYwMyA4Ljg4QzI4LjkwMDMgOC4yODggMjguMjEyMyA3Ljk5MiAyNy4zOTYzIDcuOTkyQzI2LjU4MDMgNy45OTIgMjUuODg0MyA4LjI4OCAyNS4zMDgzIDguODhDMjQuNzQ4MyA5LjQ1NiAyNC40NjgzIDEwLjI1NiAyNC40NjgzIDExLjI4QzI0LjQ2ODMgMTIuMzA0IDI0Ljc0ODMgMTMuMTIgMjUuMzA4MyAxMy43MjhDMjUuODg0MyAxNC4zMiAyNi41ODAzIDE0LjYxNiAyNy4zOTYzIDE0LjYxNkMyOC4yMTIzIDE0LjYxNiAyOC45MDAzIDE0LjMyIDI5LjQ2MDMgMTMuNzI4QzMwLjAzNjMgMTMuMTM2IDMwLjMyNDMgMTIuMzI4IDMwLjMyNDMgMTEuMzA0Wk00MS4zODE0IDExLjMwNEM0MS4zODE0IDkuOTEyIDQxLjY2MTQgOC42OTYgNDIuMjIxNCA3LjY1NkM0Mi43OTc0IDYuNjE2IDQzLjU4OTQgNS44MTYgNDQuNTk3NCA1LjI1NkM0NS42MjE0IDQuNjk2IDQ2Ljc4OTQgNC40MTYgNDguMTAxNCA0LjQxNkM0OS43ODE0IDQuNDE2IDUxLjE4MTQgNC44NTYgNTIuMzAxNCA1LjczNkM1My40Mzc0IDYuNjE2IDU0LjE4MTQgNy44NTYgNTQuNTMzNCA5LjQ1Nkg1MC4xNjU0QzQ5Ljc5NzQgOC40MzIgNDkuMDg1NCA3LjkyIDQ4LjAyOTQgNy45MkM0Ny4yNzc0IDcuOTIgNDYuNjc3NCA4LjIxNiA0Ni4yMjk0IDguODA4QzQ1Ljc4MTQgOS4zODQgNDUuNTU3NCAxMC4yMTYgNDUuNTU3NCAxMS4zMDRDNDUuNTU3NCAxMi4zOTIgNDUuNzgxNCAxMy4yMzIgNDYuMjI5NCAxMy44MjRDNDYuNjc3NCAxNC40IDQ3LjI3NzQgMTQuNjg4IDQ4LjAyOTQgMTQuNjg4QzQ5LjA4NTQgMTQuNjg4IDQ5Ljc5NzQgMTQuMTc2IDUwLjE2NTQgMTMuMTUySDU0LjUzMzRDNTQuMTgxNCAxNC43MiA1My40Mzc0IDE1Ljk1MiA1Mi4zMDE0IDE2Ljg0OEM1MS4xNjU0IDE3Ljc0NCA0OS43NjU0IDE4LjE5MiA0OC4xMDE0IDE4LjE5MkM0Ni43ODk0IDE4LjE5MiA0NS42MjE0IDE3LjkxMiA0NC41OTc0IDE3LjM1MkM0My41ODk0IDE2Ljc5MiA0Mi43OTc0IDE1Ljk5MiA0Mi4yMjE0IDE0Ljk1MkM0MS42NjE0IDEzLjkxMiA0MS4zODE0IDEyLjY5NiA0MS4zODE0IDExLjMwNFpNNjkuNzEyNiAxOEw2NS42MzI2IDEyLjM4NFYxOEg2MS41Mjg2VjAuMjRINjUuNjMyNlYxMC4wNTZMNjkuNjg4NiA0LjYwOEg3NC43NTI2TDY5LjE4NDYgMTEuMzI4TDc0LjgwMDYgMThINjkuNzEyNloiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTg5Ljc1NjYgMThMODYuMjUyNiAxMS42NEg4NS4yNjg2VjE4SDgxLjE2NDZWMS4xNTJIODguMDUyNkM4OS4zODA2IDEuMTUyIDkwLjUwODYgMS4zODQgOTEuNDM2NiAxLjg0OEM5Mi4zODA2IDIuMzEyIDkzLjA4NDYgMi45NTIgOTMuNTQ4NiAzLjc2OEM5NC4wMTI2IDQuNTY4IDk0LjI0NDYgNS40NjQgOTQuMjQ0NiA2LjQ1NkM5NC4yNDQ2IDcuNTc2IDkzLjkyNDYgOC41NzYgOTMuMjg0NiA5LjQ1NkM5Mi42NjA2IDEwLjMzNiA5MS43MzI2IDEwLjk2IDkwLjUwMDYgMTEuMzI4TDk0LjM4ODYgMThIODkuNzU2NlpNODUuMjY4NiA4LjczNkg4Ny44MTI2Qzg4LjU2NDYgOC43MzYgODkuMTI0NiA4LjU1MiA4OS40OTI2IDguMTg0Qzg5Ljg3NjYgNy44MTYgOTAuMDY4NiA3LjI5NiA5MC4wNjg2IDYuNjI0QzkwLjA2ODYgNS45ODQgODkuODc2NiA1LjQ4IDg5LjQ5MjYgNS4xMTJDODkuMTI0NiA0Ljc0NCA4OC41NjQ2IDQuNTYgODcuODEyNiA0LjU2SDg1LjI2ODZWOC43MzZaTTEwNy43MTcgMTguMTkyQzEwNi40MDUgMTguMTkyIDEwNS4yMjEgMTcuOTEyIDEwNC4xNjUgMTcuMzUyQzEwMy4xMjUgMTYuNzkyIDEwMi4zMDEgMTUuOTkyIDEwMS42OTMgMTQuOTUyQzEwMS4xMDEgMTMuOTEyIDEwMC44MDUgMTIuNjk2IDEwMC44MDUgMTEuMzA0QzEwMC44MDUgOS45MjggMTAxLjEwOSA4LjcyIDEwMS43MTcgNy42OEMxMDIuMzI1IDYuNjI0IDEwMy4xNTcgNS44MTYgMTA0LjIxMyA1LjI1NkMxMDUuMjY5IDQuNjk2IDEwNi40NTMgNC40MTYgMTA3Ljc2NSA0LjQxNkMxMDkuMDc3IDQuNDE2IDExMC4yNjEgNC42OTYgMTExLjMxNyA1LjI1NkMxMTIuMzczIDUuODE2IDExMy4yMDUgNi42MjQgMTEzLjgxMyA3LjY4QzExNC40MjEgOC43MiAxMTQuNzI1IDkuOTI4IDExNC43MjUgMTEuMzA0QzExNC43MjUgMTIuNjggMTE0LjQxMyAxMy44OTYgMTEzLjc4OSAxNC45NTJDMTEzLjE4MSAxNS45OTIgMTEyLjM0MSAxNi43OTIgMTExLjI2OSAxNy4zNTJDMTEwLjIxMyAxNy45MTIgMTA5LjAyOSAxOC4xOTIgMTA3LjcxNyAxOC4xOTJaTTEwNy43MTcgMTQuNjRDMTA4LjUwMSAxNC42NCAxMDkuMTY1IDE0LjM1MiAxMDkuNzA5IDEzLjc3NkMxMTAuMjY5IDEzLjIgMTEwLjU0OSAxMi4zNzYgMTEwLjU0OSAxMS4zMDRDMTEwLjU0OSAxMC4yMzIgMTEwLjI3NyA5LjQwOCAxMDkuNzMzIDguODMyQzEwOS4yMDUgOC4yNTYgMTA4LjU0OSA3Ljk2OCAxMDcuNzY1IDcuOTY4QzEwNi45NjUgNy45NjggMTA2LjMwMSA4LjI1NiAxMDUuNzczIDguODMyQzEwNS4yNDUgOS4zOTIgMTA0Ljk4MSAxMC4yMTYgMTA0Ljk4MSAxMS4zMDRDMTA0Ljk4MSAxMi4zNzYgMTA1LjIzNyAxMy4yIDEwNS43NDkgMTMuNzc2QzEwNi4yNzcgMTQuMzUyIDEwNi45MzMgMTQuNjQgMTA3LjcxNyAxNC42NFpNMTIwLjg4NiAxMS4yOEMxMjAuODg2IDkuOTA0IDEyMS4xNDIgOC42OTYgMTIxLjY1NCA3LjY1NkMxMjIuMTgyIDYuNjE2IDEyMi44OTQgNS44MTYgMTIzLjc5IDUuMjU2QzEyNC42ODYgNC42OTYgMTI1LjY4NiA0LjQxNiAxMjYuNzkgNC40MTZDMTI3LjczNCA0LjQxNiAxMjguNTU4IDQuNjA4IDEyOS4yNjIgNC45OTJDMTI5Ljk4MiA1LjM3NiAxMzAuNTM0IDUuODggMTMwLjkxOCA2LjUwNFY0LjYwOEgxMzUuMDIyVjE4SDEzMC45MThWMTYuMTA0QzEzMC41MTggMTYuNzI4IDEyOS45NTggMTcuMjMyIDEyOS4yMzggMTcuNjE2QzEyOC41MzQgMTggMTI3LjcxIDE4LjE5MiAxMjYuNzY2IDE4LjE5MkMxMjUuNjc4IDE4LjE5MiAxMjQuNjg2IDE3LjkxMiAxMjMuNzkgMTcuMzUyQzEyMi44OTQgMTYuNzc2IDEyMi4xODIgMTUuOTY4IDEyMS42NTQgMTQuOTI4QzEyMS4xNDIgMTMuODcyIDEyMC44ODYgMTIuNjU2IDEyMC44ODYgMTEuMjhaTTEzMC45MTggMTEuMzA0QzEzMC45MTggMTAuMjggMTMwLjYzIDkuNDcyIDEzMC4wNTQgOC44OEMxMjkuNDk0IDguMjg4IDEyOC44MDYgNy45OTIgMTI3Ljk5IDcuOTkyQzEyNy4xNzQgNy45OTIgMTI2LjQ3OCA4LjI4OCAxMjUuOTAyIDguODhDMTI1LjM0MiA5LjQ1NiAxMjUuMDYyIDEwLjI1NiAxMjUuMDYyIDExLjI4QzEyNS4wNjIgMTIuMzA0IDEyNS4zNDIgMTMuMTIgMTI1LjkwMiAxMy43MjhDMTI2LjQ3OCAxNC4zMiAxMjcuMTc0IDE0LjYxNiAxMjcuOTkgMTQuNjE2QzEyOC44MDYgMTQuNjE2IDEyOS40OTQgMTQuMzIgMTMwLjA1NCAxMy43MjhDMTMwLjYzIDEzLjEzNiAxMzAuOTE4IDEyLjMyOCAxMzAuOTE4IDExLjMwNFpNMTQxLjk3NSAxMS4yOEMxNDEuOTc1IDkuOTA0IDE0Mi4yMzEgOC42OTYgMTQyLjc0MyA3LjY1NkMxNDMuMjcxIDYuNjE2IDE0My45ODMgNS44MTYgMTQ0Ljg3OSA1LjI1NkMxNDUuNzc1IDQuNjk2IDE0Ni43NzUgNC40MTYgMTQ3Ljg3OSA0LjQxNkMxNDguNzU5IDQuNDE2IDE0OS41NTkgNC42IDE1MC4yNzkgNC45NjhDMTUxLjAxNSA1LjMzNiAxNTEuNTkxIDUuODMyIDE1Mi4wMDcgNi40NTZWMC4yNEgxNTYuMTExVjE4SDE1Mi4wMDdWMTYuMDhDMTUxLjYyMyAxNi43MiAxNTEuMDcxIDE3LjIzMiAxNTAuMzUxIDE3LjYxNkMxNDkuNjQ3IDE4IDE0OC44MjMgMTguMTkyIDE0Ny44NzkgMTguMTkyQzE0Ni43NzUgMTguMTkyIDE0NS43NzUgMTcuOTEyIDE0NC44NzkgMTcuMzUyQzE0My45ODMgMTYuNzc2IDE0My4yNzEgMTUuOTY4IDE0Mi43NDMgMTQuOTI4QzE0Mi4yMzEgMTMuODcyIDE0MS45NzUgMTIuNjU2IDE0MS45NzUgMTEuMjhaTTE1Mi4wMDcgMTEuMzA0QzE1Mi4wMDcgMTAuMjggMTUxLjcxOSA5LjQ3MiAxNTEuMTQzIDguODhDMTUwLjU4MyA4LjI4OCAxNDkuODk1IDcuOTkyIDE0OS4wNzkgNy45OTJDMTQ4LjI2MyA3Ljk5MiAxNDcuNTY3IDguMjg4IDE0Ni45OTEgOC44OEMxNDYuNDMxIDkuNDU2IDE0Ni4xNTEgMTAuMjU2IDE0Ni4xNTEgMTEuMjhDMTQ2LjE1MSAxMi4zMDQgMTQ2LjQzMSAxMy4xMiAxNDYuOTkxIDEzLjcyOEMxNDcuNTY3IDE0LjMyIDE0OC4yNjMgMTQuNjE2IDE0OS4wNzkgMTQuNjE2QzE0OS44OTUgMTQuNjE2IDE1MC41ODMgMTQuMzIgMTUxLjE0MyAxMy43MjhDMTUxLjcxOSAxMy4xMzYgMTUyLjAwNyAxMi4zMjggMTUyLjAwNyAxMS4zMDRaTTE2OS4zMjggMTguMTkyQzE2OC4xNiAxOC4xOTIgMTY3LjEyIDE3Ljk5MiAxNjYuMjA4IDE3LjU5MkMxNjUuMjk2IDE3LjE5MiAxNjQuNTc2IDE2LjY0OCAxNjQuMDQ4IDE1Ljk2QzE2My41MiAxNS4yNTYgMTYzLjIyNCAxNC40NzIgMTYzLjE2IDEzLjYwOEgxNjcuMjE2QzE2Ny4yNjQgMTQuMDcyIDE2Ny40OCAxNC40NDggMTY3Ljg2NCAxNC43MzZDMTY4LjI0OCAxNS4wMjQgMTY4LjcyIDE1LjE2OCAxNjkuMjggMTUuMTY4QzE2OS43OTIgMTUuMTY4IDE3MC4xODQgMTUuMDcyIDE3MC40NTYgMTQuODhDMTcwLjc0NCAxNC42NzIgMTcwLjg4OCAxNC40MDggMTcwLjg4OCAxNC4wODhDMTcwLjg4OCAxMy43MDQgMTcwLjY4OCAxMy40MjQgMTcwLjI4OCAxMy4yNDhDMTY5Ljg4OCAxMy4wNTYgMTY5LjI0IDEyLjg0OCAxNjguMzQ0IDEyLjYyNEMxNjcuMzg0IDEyLjQgMTY2LjU4NCAxMi4xNjggMTY1Ljk0NCAxMS45MjhDMTY1LjMwNCAxMS42NzIgMTY0Ljc1MiAxMS4yOCAxNjQuMjg4IDEwLjc1MkMxNjMuODI0IDEwLjIwOCAxNjMuNTkyIDkuNDggMTYzLjU5MiA4LjU2OEMxNjMuNTkyIDcuOCAxNjMuOCA3LjEwNCAxNjQuMjE2IDYuNDhDMTY0LjY0OCA1Ljg0IDE2NS4yNzIgNS4zMzYgMTY2LjA4OCA0Ljk2OEMxNjYuOTIgNC42IDE2Ny45MDQgNC40MTYgMTY5LjA0IDQuNDE2QzE3MC43MiA0LjQxNiAxNzIuMDQgNC44MzIgMTczIDUuNjY0QzE3My45NzYgNi40OTYgMTc0LjUzNiA3LjYgMTc0LjY4IDguOTc2SDE3MC44ODhDMTcwLjgyNCA4LjUxMiAxNzAuNjE2IDguMTQ0IDE3MC4yNjQgNy44NzJDMTY5LjkyOCA3LjYgMTY5LjQ4IDcuNDY0IDE2OC45MiA3LjQ2NEMxNjguNDQgNy40NjQgMTY4LjA3MiA3LjU2IDE2Ny44MTYgNy43NTJDMTY3LjU2IDcuOTI4IDE2Ny40MzIgOC4xNzYgMTY3LjQzMiA4LjQ5NkMxNjcuNDMyIDguODggMTY3LjYzMiA5LjE2OCAxNjguMDMyIDkuMzZDMTY4LjQ0OCA5LjU1MiAxNjkuMDg4IDkuNzQ0IDE2OS45NTIgOS45MzZDMTcwLjk0NCAxMC4xOTIgMTcxLjc1MiAxMC40NDggMTcyLjM3NiAxMC43MDRDMTczIDEwLjk0NCAxNzMuNTQ0IDExLjM0NCAxNzQuMDA4IDExLjkwNEMxNzQuNDg4IDEyLjQ0OCAxNzQuNzM2IDEzLjE4NCAxNzQuNzUyIDE0LjExMkMxNzQuNzUyIDE0Ljg5NiAxNzQuNTI4IDE1LjYgMTc0LjA4IDE2LjIyNEMxNzMuNjQ4IDE2LjgzMiAxNzMuMDE2IDE3LjMxMiAxNzIuMTg0IDE3LjY2NEMxNzEuMzY4IDE4LjAxNiAxNzAuNDE2IDE4LjE5MiAxNjkuMzI4IDE4LjE5MloiIGZpbGw9IiMzRkQwRDQiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-templates-blog-js-6319ce6a627811ff40a6.js.map