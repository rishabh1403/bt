(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{194:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(179),A=t.n(N);M.a=function(e){var M=e.title,t=e.info,a=e.children;return i.a.createElement("div",{className:A.a.banner},i.a.createElement("h1",null,M),i.a.createElement("p",null,t),a)}},196:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(197),A=t.n(N),u=t(176),g=t.n(u),j=t(195),D=[{path:"/",text:"home"},{path:"/tours",text:"tours"},{path:"/blog",text:"blog"},{path:"/contact",text:"contact"}],c=[{icon:i.a.createElement(j.b,null),url:"https://twitter.com"},{icon:i.a.createElement(j.d,null),url:"https://twitter.com"},{icon:i.a.createElement(j.c,null),url:"https://twitter.com"}],r=t(198),n=t.n(r),I=function(){var e=Object(a.useState)(),M=e[0],t=e[1];return i.a.createElement("nav",{className:g.a.navbar},i.a.createElement("div",{className:g.a.navCenter},i.a.createElement("div",{className:g.a.navHeader},i.a.createElement("img",{src:n.a,alt:"backroads logo"}),i.a.createElement("button",{type:"button",className:g.a.logoBtn,onClick:function(){t(function(e){return!e})}},i.a.createElement(j.a,{className:g.a.logoIcon}))),i.a.createElement("ul",{className:M?g.a.navLinks+" "+g.a.showNav:""+g.a.navLinks},D.map(function(e,M){return i.a.createElement("li",{key:M},i.a.createElement(A.a,{fade:!0,to:e.path},e.text))})),i.a.createElement("div",{className:g.a.navSocialLinks},c.map(function(e,M){return i.a.createElement("a",{key:M,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)}))))},E=t(177),T=t.n(E),s=t(84),l=function(){return i.a.createElement("footer",{className:T.a.footer},i.a.createElement("div",{className:T.a.links},D.map(function(e,M){return i.a.createElement(s.Link,{key:M,to:e.path},e.text)})),i.a.createElement("div",{className:T.a.icons},c.map(function(e,M){return i.a.createElement("a",{key:M,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})),i.a.createElement("div",{className:T.a.copyright},"copyright © backroads travel company ",(new Date).getFullYear()," all rights reserved"))};t(178),M.a=function(e){var M=e.children;return i.a.createElement("main",null,i.a.createElement(I,null),M,i.a.createElement(l,null))}},198:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTc1IDE5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNjg4IDkuMzZDMTEuNjY0IDkuNTY4IDEyLjQ0OCAxMC4wNTYgMTMuMDQgMTAuODI0QzEzLjYzMiAxMS41NzYgMTMuOTI4IDEyLjQ0IDEzLjkyOCAxMy40MTZDMTMuOTI4IDE0LjgyNCAxMy40MzIgMTUuOTQ0IDEyLjQ0IDE2Ljc3NkMxMS40NjQgMTcuNTkyIDEwLjA5NiAxOCA4LjMzNiAxOEgwLjQ4OFYxLjE1Mkg4LjA3MkM5Ljc4NCAxLjE1MiAxMS4xMiAxLjU0NCAxMi4wOCAyLjMyOEMxMy4wNTYgMy4xMTIgMTMuNTQ0IDQuMTc2IDEzLjU0NCA1LjUyQzEzLjU0NCA2LjUxMiAxMy4yOCA3LjMzNiAxMi43NTIgNy45OTJDMTIuMjQgOC42NDggMTEuNTUyIDkuMTA0IDEwLjY4OCA5LjM2Wk00LjU5MiA3Ljk2OEg3LjI4QzcuOTUyIDcuOTY4IDguNDY0IDcuODI0IDguODE2IDcuNTM2QzkuMTg0IDcuMjMyIDkuMzY4IDYuNzkyIDkuMzY4IDYuMjE2QzkuMzY4IDUuNjQgOS4xODQgNS4yIDguODE2IDQuODk2QzguNDY0IDQuNTkyIDcuOTUyIDQuNDQgNy4yOCA0LjQ0SDQuNTkyVjcuOTY4Wk03LjYxNiAxNC42ODhDOC4zMDQgMTQuNjg4IDguODMyIDE0LjUzNiA5LjIgMTQuMjMyQzkuNTg0IDEzLjkxMiA5Ljc3NiAxMy40NTYgOS43NzYgMTIuODY0QzkuNzc2IDEyLjI3MiA5LjU3NiAxMS44MDggOS4xNzYgMTEuNDcyQzguNzkyIDExLjEzNiA4LjI1NiAxMC45NjggNy41NjggMTAuOTY4SDQuNTkyVjE0LjY4OEg3LjYxNlpNMjAuMjkyMyAxMS4yOEMyMC4yOTIzIDkuOTA0IDIwLjU0ODMgOC42OTYgMjEuMDYwMyA3LjY1NkMyMS41ODgzIDYuNjE2IDIyLjMwMDMgNS44MTYgMjMuMTk2MyA1LjI1NkMyNC4wOTIzIDQuNjk2IDI1LjA5MjMgNC40MTYgMjYuMTk2MyA0LjQxNkMyNy4xNDAzIDQuNDE2IDI3Ljk2NDMgNC42MDggMjguNjY4MyA0Ljk5MkMyOS4zODgzIDUuMzc2IDI5Ljk0MDMgNS44OCAzMC4zMjQzIDYuNTA0VjQuNjA4SDM0LjQyODNWMThIMzAuMzI0M1YxNi4xMDRDMjkuOTI0MyAxNi43MjggMjkuMzY0MyAxNy4yMzIgMjguNjQ0MyAxNy42MTZDMjcuOTQwMyAxOCAyNy4xMTYzIDE4LjE5MiAyNi4xNzIzIDE4LjE5MkMyNS4wODQzIDE4LjE5MiAyNC4wOTIzIDE3LjkxMiAyMy4xOTYzIDE3LjM1MkMyMi4zMDAzIDE2Ljc3NiAyMS41ODgzIDE1Ljk2OCAyMS4wNjAzIDE0LjkyOEMyMC41NDgzIDEzLjg3MiAyMC4yOTIzIDEyLjY1NiAyMC4yOTIzIDExLjI4Wk0zMC4zMjQzIDExLjMwNEMzMC4zMjQzIDEwLjI4IDMwLjAzNjMgOS40NzIgMjkuNDYwMyA4Ljg4QzI4LjkwMDMgOC4yODggMjguMjEyMyA3Ljk5MiAyNy4zOTYzIDcuOTkyQzI2LjU4MDMgNy45OTIgMjUuODg0MyA4LjI4OCAyNS4zMDgzIDguODhDMjQuNzQ4MyA5LjQ1NiAyNC40NjgzIDEwLjI1NiAyNC40NjgzIDExLjI4QzI0LjQ2ODMgMTIuMzA0IDI0Ljc0ODMgMTMuMTIgMjUuMzA4MyAxMy43MjhDMjUuODg0MyAxNC4zMiAyNi41ODAzIDE0LjYxNiAyNy4zOTYzIDE0LjYxNkMyOC4yMTIzIDE0LjYxNiAyOC45MDAzIDE0LjMyIDI5LjQ2MDMgMTMuNzI4QzMwLjAzNjMgMTMuMTM2IDMwLjMyNDMgMTIuMzI4IDMwLjMyNDMgMTEuMzA0Wk00MS4zODE0IDExLjMwNEM0MS4zODE0IDkuOTEyIDQxLjY2MTQgOC42OTYgNDIuMjIxNCA3LjY1NkM0Mi43OTc0IDYuNjE2IDQzLjU4OTQgNS44MTYgNDQuNTk3NCA1LjI1NkM0NS42MjE0IDQuNjk2IDQ2Ljc4OTQgNC40MTYgNDguMTAxNCA0LjQxNkM0OS43ODE0IDQuNDE2IDUxLjE4MTQgNC44NTYgNTIuMzAxNCA1LjczNkM1My40Mzc0IDYuNjE2IDU0LjE4MTQgNy44NTYgNTQuNTMzNCA5LjQ1Nkg1MC4xNjU0QzQ5Ljc5NzQgOC40MzIgNDkuMDg1NCA3LjkyIDQ4LjAyOTQgNy45MkM0Ny4yNzc0IDcuOTIgNDYuNjc3NCA4LjIxNiA0Ni4yMjk0IDguODA4QzQ1Ljc4MTQgOS4zODQgNDUuNTU3NCAxMC4yMTYgNDUuNTU3NCAxMS4zMDRDNDUuNTU3NCAxMi4zOTIgNDUuNzgxNCAxMy4yMzIgNDYuMjI5NCAxMy44MjRDNDYuNjc3NCAxNC40IDQ3LjI3NzQgMTQuNjg4IDQ4LjAyOTQgMTQuNjg4QzQ5LjA4NTQgMTQuNjg4IDQ5Ljc5NzQgMTQuMTc2IDUwLjE2NTQgMTMuMTUySDU0LjUzMzRDNTQuMTgxNCAxNC43MiA1My40Mzc0IDE1Ljk1MiA1Mi4zMDE0IDE2Ljg0OEM1MS4xNjU0IDE3Ljc0NCA0OS43NjU0IDE4LjE5MiA0OC4xMDE0IDE4LjE5MkM0Ni43ODk0IDE4LjE5MiA0NS42MjE0IDE3LjkxMiA0NC41OTc0IDE3LjM1MkM0My41ODk0IDE2Ljc5MiA0Mi43OTc0IDE1Ljk5MiA0Mi4yMjE0IDE0Ljk1MkM0MS42NjE0IDEzLjkxMiA0MS4zODE0IDEyLjY5NiA0MS4zODE0IDExLjMwNFpNNjkuNzEyNiAxOEw2NS42MzI2IDEyLjM4NFYxOEg2MS41Mjg2VjAuMjRINjUuNjMyNlYxMC4wNTZMNjkuNjg4NiA0LjYwOEg3NC43NTI2TDY5LjE4NDYgMTEuMzI4TDc0LjgwMDYgMThINjkuNzEyNloiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTg5Ljc1NjYgMThMODYuMjUyNiAxMS42NEg4NS4yNjg2VjE4SDgxLjE2NDZWMS4xNTJIODguMDUyNkM4OS4zODA2IDEuMTUyIDkwLjUwODYgMS4zODQgOTEuNDM2NiAxLjg0OEM5Mi4zODA2IDIuMzEyIDkzLjA4NDYgMi45NTIgOTMuNTQ4NiAzLjc2OEM5NC4wMTI2IDQuNTY4IDk0LjI0NDYgNS40NjQgOTQuMjQ0NiA2LjQ1NkM5NC4yNDQ2IDcuNTc2IDkzLjkyNDYgOC41NzYgOTMuMjg0NiA5LjQ1NkM5Mi42NjA2IDEwLjMzNiA5MS43MzI2IDEwLjk2IDkwLjUwMDYgMTEuMzI4TDk0LjM4ODYgMThIODkuNzU2NlpNODUuMjY4NiA4LjczNkg4Ny44MTI2Qzg4LjU2NDYgOC43MzYgODkuMTI0NiA4LjU1MiA4OS40OTI2IDguMTg0Qzg5Ljg3NjYgNy44MTYgOTAuMDY4NiA3LjI5NiA5MC4wNjg2IDYuNjI0QzkwLjA2ODYgNS45ODQgODkuODc2NiA1LjQ4IDg5LjQ5MjYgNS4xMTJDODkuMTI0NiA0Ljc0NCA4OC41NjQ2IDQuNTYgODcuODEyNiA0LjU2SDg1LjI2ODZWOC43MzZaTTEwNy43MTcgMTguMTkyQzEwNi40MDUgMTguMTkyIDEwNS4yMjEgMTcuOTEyIDEwNC4xNjUgMTcuMzUyQzEwMy4xMjUgMTYuNzkyIDEwMi4zMDEgMTUuOTkyIDEwMS42OTMgMTQuOTUyQzEwMS4xMDEgMTMuOTEyIDEwMC44MDUgMTIuNjk2IDEwMC44MDUgMTEuMzA0QzEwMC44MDUgOS45MjggMTAxLjEwOSA4LjcyIDEwMS43MTcgNy42OEMxMDIuMzI1IDYuNjI0IDEwMy4xNTcgNS44MTYgMTA0LjIxMyA1LjI1NkMxMDUuMjY5IDQuNjk2IDEwNi40NTMgNC40MTYgMTA3Ljc2NSA0LjQxNkMxMDkuMDc3IDQuNDE2IDExMC4yNjEgNC42OTYgMTExLjMxNyA1LjI1NkMxMTIuMzczIDUuODE2IDExMy4yMDUgNi42MjQgMTEzLjgxMyA3LjY4QzExNC40MjEgOC43MiAxMTQuNzI1IDkuOTI4IDExNC43MjUgMTEuMzA0QzExNC43MjUgMTIuNjggMTE0LjQxMyAxMy44OTYgMTEzLjc4OSAxNC45NTJDMTEzLjE4MSAxNS45OTIgMTEyLjM0MSAxNi43OTIgMTExLjI2OSAxNy4zNTJDMTEwLjIxMyAxNy45MTIgMTA5LjAyOSAxOC4xOTIgMTA3LjcxNyAxOC4xOTJaTTEwNy43MTcgMTQuNjRDMTA4LjUwMSAxNC42NCAxMDkuMTY1IDE0LjM1MiAxMDkuNzA5IDEzLjc3NkMxMTAuMjY5IDEzLjIgMTEwLjU0OSAxMi4zNzYgMTEwLjU0OSAxMS4zMDRDMTEwLjU0OSAxMC4yMzIgMTEwLjI3NyA5LjQwOCAxMDkuNzMzIDguODMyQzEwOS4yMDUgOC4yNTYgMTA4LjU0OSA3Ljk2OCAxMDcuNzY1IDcuOTY4QzEwNi45NjUgNy45NjggMTA2LjMwMSA4LjI1NiAxMDUuNzczIDguODMyQzEwNS4yNDUgOS4zOTIgMTA0Ljk4MSAxMC4yMTYgMTA0Ljk4MSAxMS4zMDRDMTA0Ljk4MSAxMi4zNzYgMTA1LjIzNyAxMy4yIDEwNS43NDkgMTMuNzc2QzEwNi4yNzcgMTQuMzUyIDEwNi45MzMgMTQuNjQgMTA3LjcxNyAxNC42NFpNMTIwLjg4NiAxMS4yOEMxMjAuODg2IDkuOTA0IDEyMS4xNDIgOC42OTYgMTIxLjY1NCA3LjY1NkMxMjIuMTgyIDYuNjE2IDEyMi44OTQgNS44MTYgMTIzLjc5IDUuMjU2QzEyNC42ODYgNC42OTYgMTI1LjY4NiA0LjQxNiAxMjYuNzkgNC40MTZDMTI3LjczNCA0LjQxNiAxMjguNTU4IDQuNjA4IDEyOS4yNjIgNC45OTJDMTI5Ljk4MiA1LjM3NiAxMzAuNTM0IDUuODggMTMwLjkxOCA2LjUwNFY0LjYwOEgxMzUuMDIyVjE4SDEzMC45MThWMTYuMTA0QzEzMC41MTggMTYuNzI4IDEyOS45NTggMTcuMjMyIDEyOS4yMzggMTcuNjE2QzEyOC41MzQgMTggMTI3LjcxIDE4LjE5MiAxMjYuNzY2IDE4LjE5MkMxMjUuNjc4IDE4LjE5MiAxMjQuNjg2IDE3LjkxMiAxMjMuNzkgMTcuMzUyQzEyMi44OTQgMTYuNzc2IDEyMi4xODIgMTUuOTY4IDEyMS42NTQgMTQuOTI4QzEyMS4xNDIgMTMuODcyIDEyMC44ODYgMTIuNjU2IDEyMC44ODYgMTEuMjhaTTEzMC45MTggMTEuMzA0QzEzMC45MTggMTAuMjggMTMwLjYzIDkuNDcyIDEzMC4wNTQgOC44OEMxMjkuNDk0IDguMjg4IDEyOC44MDYgNy45OTIgMTI3Ljk5IDcuOTkyQzEyNy4xNzQgNy45OTIgMTI2LjQ3OCA4LjI4OCAxMjUuOTAyIDguODhDMTI1LjM0MiA5LjQ1NiAxMjUuMDYyIDEwLjI1NiAxMjUuMDYyIDExLjI4QzEyNS4wNjIgMTIuMzA0IDEyNS4zNDIgMTMuMTIgMTI1LjkwMiAxMy43MjhDMTI2LjQ3OCAxNC4zMiAxMjcuMTc0IDE0LjYxNiAxMjcuOTkgMTQuNjE2QzEyOC44MDYgMTQuNjE2IDEyOS40OTQgMTQuMzIgMTMwLjA1NCAxMy43MjhDMTMwLjYzIDEzLjEzNiAxMzAuOTE4IDEyLjMyOCAxMzAuOTE4IDExLjMwNFpNMTQxLjk3NSAxMS4yOEMxNDEuOTc1IDkuOTA0IDE0Mi4yMzEgOC42OTYgMTQyLjc0MyA3LjY1NkMxNDMuMjcxIDYuNjE2IDE0My45ODMgNS44MTYgMTQ0Ljg3OSA1LjI1NkMxNDUuNzc1IDQuNjk2IDE0Ni43NzUgNC40MTYgMTQ3Ljg3OSA0LjQxNkMxNDguNzU5IDQuNDE2IDE0OS41NTkgNC42IDE1MC4yNzkgNC45NjhDMTUxLjAxNSA1LjMzNiAxNTEuNTkxIDUuODMyIDE1Mi4wMDcgNi40NTZWMC4yNEgxNTYuMTExVjE4SDE1Mi4wMDdWMTYuMDhDMTUxLjYyMyAxNi43MiAxNTEuMDcxIDE3LjIzMiAxNTAuMzUxIDE3LjYxNkMxNDkuNjQ3IDE4IDE0OC44MjMgMTguMTkyIDE0Ny44NzkgMTguMTkyQzE0Ni43NzUgMTguMTkyIDE0NS43NzUgMTcuOTEyIDE0NC44NzkgMTcuMzUyQzE0My45ODMgMTYuNzc2IDE0My4yNzEgMTUuOTY4IDE0Mi43NDMgMTQuOTI4QzE0Mi4yMzEgMTMuODcyIDE0MS45NzUgMTIuNjU2IDE0MS45NzUgMTEuMjhaTTE1Mi4wMDcgMTEuMzA0QzE1Mi4wMDcgMTAuMjggMTUxLjcxOSA5LjQ3MiAxNTEuMTQzIDguODhDMTUwLjU4MyA4LjI4OCAxNDkuODk1IDcuOTkyIDE0OS4wNzkgNy45OTJDMTQ4LjI2MyA3Ljk5MiAxNDcuNTY3IDguMjg4IDE0Ni45OTEgOC44OEMxNDYuNDMxIDkuNDU2IDE0Ni4xNTEgMTAuMjU2IDE0Ni4xNTEgMTEuMjhDMTQ2LjE1MSAxMi4zMDQgMTQ2LjQzMSAxMy4xMiAxNDYuOTkxIDEzLjcyOEMxNDcuNTY3IDE0LjMyIDE0OC4yNjMgMTQuNjE2IDE0OS4wNzkgMTQuNjE2QzE0OS44OTUgMTQuNjE2IDE1MC41ODMgMTQuMzIgMTUxLjE0MyAxMy43MjhDMTUxLjcxOSAxMy4xMzYgMTUyLjAwNyAxMi4zMjggMTUyLjAwNyAxMS4zMDRaTTE2OS4zMjggMTguMTkyQzE2OC4xNiAxOC4xOTIgMTY3LjEyIDE3Ljk5MiAxNjYuMjA4IDE3LjU5MkMxNjUuMjk2IDE3LjE5MiAxNjQuNTc2IDE2LjY0OCAxNjQuMDQ4IDE1Ljk2QzE2My41MiAxNS4yNTYgMTYzLjIyNCAxNC40NzIgMTYzLjE2IDEzLjYwOEgxNjcuMjE2QzE2Ny4yNjQgMTQuMDcyIDE2Ny40OCAxNC40NDggMTY3Ljg2NCAxNC43MzZDMTY4LjI0OCAxNS4wMjQgMTY4LjcyIDE1LjE2OCAxNjkuMjggMTUuMTY4QzE2OS43OTIgMTUuMTY4IDE3MC4xODQgMTUuMDcyIDE3MC40NTYgMTQuODhDMTcwLjc0NCAxNC42NzIgMTcwLjg4OCAxNC40MDggMTcwLjg4OCAxNC4wODhDMTcwLjg4OCAxMy43MDQgMTcwLjY4OCAxMy40MjQgMTcwLjI4OCAxMy4yNDhDMTY5Ljg4OCAxMy4wNTYgMTY5LjI0IDEyLjg0OCAxNjguMzQ0IDEyLjYyNEMxNjcuMzg0IDEyLjQgMTY2LjU4NCAxMi4xNjggMTY1Ljk0NCAxMS45MjhDMTY1LjMwNCAxMS42NzIgMTY0Ljc1MiAxMS4yOCAxNjQuMjg4IDEwLjc1MkMxNjMuODI0IDEwLjIwOCAxNjMuNTkyIDkuNDggMTYzLjU5MiA4LjU2OEMxNjMuNTkyIDcuOCAxNjMuOCA3LjEwNCAxNjQuMjE2IDYuNDhDMTY0LjY0OCA1Ljg0IDE2NS4yNzIgNS4zMzYgMTY2LjA4OCA0Ljk2OEMxNjYuOTIgNC42IDE2Ny45MDQgNC40MTYgMTY5LjA0IDQuNDE2QzE3MC43MiA0LjQxNiAxNzIuMDQgNC44MzIgMTczIDUuNjY0QzE3My45NzYgNi40OTYgMTc0LjUzNiA3LjYgMTc0LjY4IDguOTc2SDE3MC44ODhDMTcwLjgyNCA4LjUxMiAxNzAuNjE2IDguMTQ0IDE3MC4yNjQgNy44NzJDMTY5LjkyOCA3LjYgMTY5LjQ4IDcuNDY0IDE2OC45MiA3LjQ2NEMxNjguNDQgNy40NjQgMTY4LjA3MiA3LjU2IDE2Ny44MTYgNy43NTJDMTY3LjU2IDcuOTI4IDE2Ny40MzIgOC4xNzYgMTY3LjQzMiA4LjQ5NkMxNjcuNDMyIDguODggMTY3LjYzMiA5LjE2OCAxNjguMDMyIDkuMzZDMTY4LjQ0OCA5LjU1MiAxNjkuMDg4IDkuNzQ0IDE2OS45NTIgOS45MzZDMTcwLjk0NCAxMC4xOTIgMTcxLjc1MiAxMC40NDggMTcyLjM3NiAxMC43MDRDMTczIDEwLjk0NCAxNzMuNTQ0IDExLjM0NCAxNzQuMDA4IDExLjkwNEMxNzQuNDg4IDEyLjQ0OCAxNzQuNzM2IDEzLjE4NCAxNzQuNzUyIDE0LjExMkMxNzQuNzUyIDE0Ljg5NiAxNzQuNTI4IDE1LjYgMTc0LjA4IDE2LjIyNEMxNzMuNjQ4IDE2LjgzMiAxNzMuMDE2IDE3LjMxMiAxNzIuMTg0IDE3LjY2NEMxNzEuMzY4IDE4LjAxNiAxNzAuNDE2IDE4LjE5MiAxNjkuMzI4IDE4LjE5MloiIGZpbGw9IiMzRkQwRDQiLz4KPC9zdmc+Cg=="},200:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(202),A=t(208),u=t.n(A);M.a=Object(N.a)(function(e){var M=e.img,t=e.className,a=e.children,N=e.home;return i.a.createElement(u.a,{className:t,fluid:M,home:N},a)}).withConfig({displayName:"StyledHero",componentId:"sc-1x7e6lr-0"})(["min-height:",";background:",";background-position:center;background-size:cover;opacity:1!important;display:flex;justify-content:center;align-items:center;"],function(e){return e.home?"calc(100vh - 62px)":"50vh"},function(e){return e.home?"linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))":"none"})},209:function(e,M,t){"use strict";t(256);var a=t(258),i=t(0),N=t.n(i),A=t(183),u=t.n(A),g=(t(259),t(210)),j=t.n(g),D=t(197),c=t.n(D);M.a=function(e){console.log(e.edge.node.frontmatter);var M=a.data.aboutImage;return N.a.createElement("article",{className:u.a.blog},N.a.createElement("div",{className:u.a.imgContainer},N.a.createElement(j.a,{className:u.a.img,fluid:M.childImageSharp.fluid}),N.a.createElement(c.a,{to:"/",fade:!0,className:u.a.link},"Button"),N.a.createElement("h6",{className:u.a.date},"may 15th, 2016")),N.a.createElement("div",{className:u.a.footer},N.a.createElement("h3",null,"Some blog name"),N.a.createElement("div",{className:u.a.info},N.a.createElement("h4",{className:u.a.country},e.edge.node.frontmatter.description),N.a.createElement("div",{className:u.a.details},N.a.createElement("h6",null,e.edge.node.fields.readingTime.text),e.edge.node.frontmatter.tags.map(function(e,M){return N.a.createElement("h6",null,"#",e)})))))}},210:function(e,M,t){"use strict";var a=t(4);M.__esModule=!0,M.default=void 0;var i,N=a(t(6)),A=a(t(21)),u=a(t(20)),g=a(t(10)),j=a(t(0)),D=a(t(1)),c=function(e){var M=(0,g.default)({},e),t=M.resolutions,a=M.sizes,i=M.critical;return t&&(M.fixed=t,delete M.resolutions),a&&(M.fluid=a,delete M.sizes),i&&(M.loading="eager"),M},r=Object.create({}),n=function(e){var M=c(e),t=M.fluid?M.fluid.src:M.fixed.src;return r[t]||!1},I="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,T=E&&window.IntersectionObserver,s=new WeakMap;var l=function(e,M){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(s.has(e.target)){var M=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),M())}})},{rootMargin:"200px"})),i);return t&&(t.observe(e),s.set(e,M)),function(){t.unobserve(e),s.delete(e)}},o=function(e){var M=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",N=e.title?'title="'+e.title+'" ':"",A=e.alt?'alt="'+e.alt+'" ':'alt="" ',u=e.width?'width="'+e.width+'" ':"",g=e.height?'height="'+e.height+'" ':"",j=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+u+g+t+i+M+A+N+j+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=j.default.forwardRef(function(e,M){var t=e.sizes,a=e.srcSet,i=e.src,N=e.style,A=e.onLoad,D=e.onError,c=e.loading,r=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return j.default.createElement("img",(0,g.default)({sizes:t,srcSet:a,src:i},r,{onLoad:A,onError:D,ref:M,loading:c,style:(0,g.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},N)}))});y.propTypes={style:D.default.object,onError:D.default.func,onLoad:D.default.func};var L=function(e){function M(M){var t;(t=e.call(this,M)||this).seenBefore=E&&n(M),t.addNoScript=!(M.critical&&!M.fadeIn),t.useIOSupport=!I&&T&&!M.critical&&!t.seenBefore;var a=M.critical||E&&(I||!t.useIOSupport);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&M.fadeIn},t.imageRef=j.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,A.default)((0,A.default)(t))),t.handleRef=t.handleRef.bind((0,A.default)((0,A.default)(t))),t}(0,N.default)(M,e);var t=M.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:n(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var M=this;this.useIOSupport&&e&&(this.cleanUpListeners=l(e,function(){var e=n(M.props);M.state.isVisible||"function"!=typeof M.props.onStartLoad||M.props.onStartLoad({wasCached:e}),M.setState({isVisible:!0},function(){return M.setState({imgLoaded:e,imgCached:!!M.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var e,M,t;e=this.props,M=c(e),t=M.fluid?M.fluid.src:M.fixed.src,r[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=c(this.props),M=e.title,t=e.alt,a=e.className,i=e.style,N=void 0===i?{}:i,A=e.imgStyle,u=void 0===A?{}:A,D=e.placeholderStyle,r=void 0===D?{}:D,n=e.placeholderClassName,I=e.fluid,E=e.fixed,T=e.backgroundColor,s=e.durationFadeIn,l=e.Tag,L=e.itemProp,d=e.loading,z=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,g.default)({opacity:z?1:0,transition:x?"opacity "+s+"ms":"none"},u),f="boolean"==typeof T?"lightgray":T,Q={transitionDelay:s+"ms"},C=(0,g.default)({opacity:this.state.imgLoaded?0:1},x&&Q,u,r),Y={title:M,alt:this.state.isVisible?"":t,style:C,className:n};if(I){var k=I;return j.default.createElement(l,{className:(a||"")+" gatsby-image-wrapper",style:(0,g.default)({position:"relative",overflow:"hidden"},N),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},j.default.createElement(l,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),f&&j.default.createElement(l,{title:M,style:(0,g.default)({backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&Q)}),k.base64&&j.default.createElement(y,(0,g.default)({src:k.base64},Y)),k.tracedSVG&&j.default.createElement(y,(0,g.default)({src:k.tracedSVG},Y)),this.state.isVisible&&j.default.createElement("picture",null,k.srcSetWebp&&j.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),j.default.createElement(y,{alt:t,title:M,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,loading:d})),this.addNoScript&&j.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:o((0,g.default)({alt:t,title:M,loading:d},k))}}))}if(E){var h=E,S=(0,g.default)({position:"relative",overflow:"hidden",display:"inline-block",width:h.width,height:h.height},N);return"inherit"===N.display&&delete S.display,j.default.createElement(l,{className:(a||"")+" gatsby-image-wrapper",style:S,ref:this.handleRef,key:"fixed-"+JSON.stringify(h.srcSet)},f&&j.default.createElement(l,{title:M,style:(0,g.default)({backgroundColor:f,width:h.width,opacity:this.state.imgLoaded?0:1,height:h.height},x&&Q)}),h.base64&&j.default.createElement(y,(0,g.default)({src:h.base64},Y)),h.tracedSVG&&j.default.createElement(y,(0,g.default)({src:h.tracedSVG},Y)),this.state.isVisible&&j.default.createElement("picture",null,h.srcSetWebp&&j.default.createElement("source",{type:"image/webp",srcSet:h.srcSetWebp,sizes:h.sizes}),j.default.createElement(y,{alt:t,title:M,width:h.width,height:h.height,sizes:h.sizes,src:h.src,crossOrigin:this.props.crossOrigin,srcSet:h.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,loading:d})),this.addNoScript&&j.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:o((0,g.default)({alt:t,title:M,loading:d},h))}}))}return null},M}(j.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var d=D.default.shape({width:D.default.number.isRequired,height:D.default.number.isRequired,src:D.default.string.isRequired,srcSet:D.default.string.isRequired,base64:D.default.string,tracedSVG:D.default.string,srcWebp:D.default.string,srcSetWebp:D.default.string}),z=D.default.shape({aspectRatio:D.default.number.isRequired,src:D.default.string.isRequired,srcSet:D.default.string.isRequired,sizes:D.default.string.isRequired,base64:D.default.string,tracedSVG:D.default.string,srcWebp:D.default.string,srcSetWebp:D.default.string});L.propTypes={resolutions:d,sizes:z,fixed:d,fluid:z,fadeIn:D.default.bool,durationFadeIn:D.default.number,title:D.default.string,alt:D.default.string,className:D.default.oneOfType([D.default.string,D.default.object]),critical:D.default.bool,crossOrigin:D.default.oneOfType([D.default.string,D.default.bool]),style:D.default.object,imgStyle:D.default.object,placeholderStyle:D.default.object,placeholderClassName:D.default.string,backgroundColor:D.default.oneOfType([D.default.string,D.default.bool]),onLoad:D.default.func,onError:D.default.func,onStartLoad:D.default.func,Tag:D.default.string,itemProp:D.default.string,loading:D.default.oneOf(["auto","lazy","eager"])};var x=L;M.default=x},256:function(e,M,t){"use strict";t(257)("link",function(e){return function(M){return e(this,"a","href",M)}})},257:function(e,M,t){var a=t(13),i=t(23),N=t(24),A=/"/g,u=function(e,M,t,a){var i=String(N(e)),u="<"+M;return""!==t&&(u+=" "+t+'="'+String(a).replace(A,"&quot;")+'"'),u+">"+i+"</"+M+">"};e.exports=function(e,M){var t={};t[e]=M(u),a(a.P+a.F*i(function(){var M=""[e]('"');return M!==M.toLowerCase()||M.split('"').length>3}),"String",t)}},258:function(e){e.exports={data:{aboutImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAancxjNkRD//xAAaEAACAwEBAAAAAAAAAAAAAAABAwACERIE/9oACAEBAAEFAlP5h9C5Z40WPT6ipwT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGI/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAECAQE/Aa0//8QAHBAAAgICAwAAAAAAAAAAAAAAAAERMRAhIlGh/9oACAEBAAY/Auaks0vRLslK8f/EABwQAAICAgMAAAAAAAAAAAAAAAABESExQVFxkf/aAAgBAQABPyF1Oxs5Eyg/Am07aBWQjJQN2oP/2gAMAwEAAgADAAAAEHTf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEx/9oACAECAQE/EHof/8QAHRABAAICAgMAAAAAAAAAAAAAAQARMUEhUWGh0f/aAAgBAQABPxCgrN8wfYhQqcKX6zA1FDLABiMtYe2czHibG4tYvAZ//9k=",aspectRatio:1.4619883040935673,src:"/static/1bc167c56564e36f63c72b0683bd3ea4/775d9/defaultBcg.jpg",srcSet:"/static/1bc167c56564e36f63c72b0683bd3ea4/cb3d3/defaultBcg.jpg 150w,\n/static/1bc167c56564e36f63c72b0683bd3ea4/c83a6/defaultBcg.jpg 300w,\n/static/1bc167c56564e36f63c72b0683bd3ea4/775d9/defaultBcg.jpg 600w,\n/static/1bc167c56564e36f63c72b0683bd3ea4/2b1a3/defaultBcg.jpg 900w,\n/static/1bc167c56564e36f63c72b0683bd3ea4/2f7e7/defaultBcg.jpg 1000w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},259:function(e,M,t){e.exports=t.p+"static/defaultBcg-1bc167c56564e36f63c72b0683bd3ea4.jpeg"}}]);
//# sourceMappingURL=3-8e42160be9e75461683b.js.map