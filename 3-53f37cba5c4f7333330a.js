(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(179),u=t.n(N);M.a=function(e){var M=e.title,t=e.info,a=e.children;return i.a.createElement("div",{className:u.a.banner},i.a.createElement("h1",null,M),i.a.createElement("p",null,t),a)}},199:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(200),u=t.n(N),g=t(176),j=t.n(g),D=t(198),r=[{path:"/",text:"home"},{path:"/blog",text:"blog"},{path:"/contact",text:"contact"}],n=[{icon:i.a.createElement(D.b,null),url:"https://twitter.com"},{icon:i.a.createElement(D.d,null),url:"https://twitter.com"},{icon:i.a.createElement(D.c,null),url:"https://twitter.com"}],c=t(201),I=t.n(c),T=function(){var e=Object(a.useState)(),M=e[0],t=e[1];return i.a.createElement("nav",{className:j.a.navbar},i.a.createElement("div",{className:j.a.navCenter},i.a.createElement("div",{className:j.a.navHeader},i.a.createElement("img",{src:I.a,alt:"backroads logo"}),i.a.createElement("button",{type:"button",className:j.a.logoBtn,onClick:function(){t(function(e){return!e})}},i.a.createElement(D.a,{className:j.a.logoIcon}))),i.a.createElement("ul",{className:M?j.a.navLinks+" "+j.a.showNav:""+j.a.navLinks},r.map(function(e,M){return i.a.createElement("li",{key:M},i.a.createElement(u.a,{fade:!0,to:e.path},e.text))})),i.a.createElement("div",{className:j.a.navSocialLinks},n.map(function(e,M){return i.a.createElement("a",{key:M,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)}))))},s=t(177),E=t.n(s),l=t(84),o=function(){return i.a.createElement("footer",{className:E.a.footer},i.a.createElement("div",{className:E.a.links},r.map(function(e,M){return i.a.createElement(l.Link,{key:M,to:e.path},e.text)})),i.a.createElement("div",{className:E.a.icons},n.map(function(e,M){return i.a.createElement("a",{key:M,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})),i.a.createElement("div",{className:E.a.copyright},"copyright © backroads travel company ",(new Date).getFullYear()," all rights reserved"))};t(178),M.a=function(e){var M=e.children;return i.a.createElement("main",null,i.a.createElement(T,null),M,i.a.createElement(o,null))}},201:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc1IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTc1IDE5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNjg4IDkuMzZDMTEuNjY0IDkuNTY4IDEyLjQ0OCAxMC4wNTYgMTMuMDQgMTAuODI0QzEzLjYzMiAxMS41NzYgMTMuOTI4IDEyLjQ0IDEzLjkyOCAxMy40MTZDMTMuOTI4IDE0LjgyNCAxMy40MzIgMTUuOTQ0IDEyLjQ0IDE2Ljc3NkMxMS40NjQgMTcuNTkyIDEwLjA5NiAxOCA4LjMzNiAxOEgwLjQ4OFYxLjE1Mkg4LjA3MkM5Ljc4NCAxLjE1MiAxMS4xMiAxLjU0NCAxMi4wOCAyLjMyOEMxMy4wNTYgMy4xMTIgMTMuNTQ0IDQuMTc2IDEzLjU0NCA1LjUyQzEzLjU0NCA2LjUxMiAxMy4yOCA3LjMzNiAxMi43NTIgNy45OTJDMTIuMjQgOC42NDggMTEuNTUyIDkuMTA0IDEwLjY4OCA5LjM2Wk00LjU5MiA3Ljk2OEg3LjI4QzcuOTUyIDcuOTY4IDguNDY0IDcuODI0IDguODE2IDcuNTM2QzkuMTg0IDcuMjMyIDkuMzY4IDYuNzkyIDkuMzY4IDYuMjE2QzkuMzY4IDUuNjQgOS4xODQgNS4yIDguODE2IDQuODk2QzguNDY0IDQuNTkyIDcuOTUyIDQuNDQgNy4yOCA0LjQ0SDQuNTkyVjcuOTY4Wk03LjYxNiAxNC42ODhDOC4zMDQgMTQuNjg4IDguODMyIDE0LjUzNiA5LjIgMTQuMjMyQzkuNTg0IDEzLjkxMiA5Ljc3NiAxMy40NTYgOS43NzYgMTIuODY0QzkuNzc2IDEyLjI3MiA5LjU3NiAxMS44MDggOS4xNzYgMTEuNDcyQzguNzkyIDExLjEzNiA4LjI1NiAxMC45NjggNy41NjggMTAuOTY4SDQuNTkyVjE0LjY4OEg3LjYxNlpNMjAuMjkyMyAxMS4yOEMyMC4yOTIzIDkuOTA0IDIwLjU0ODMgOC42OTYgMjEuMDYwMyA3LjY1NkMyMS41ODgzIDYuNjE2IDIyLjMwMDMgNS44MTYgMjMuMTk2MyA1LjI1NkMyNC4wOTIzIDQuNjk2IDI1LjA5MjMgNC40MTYgMjYuMTk2MyA0LjQxNkMyNy4xNDAzIDQuNDE2IDI3Ljk2NDMgNC42MDggMjguNjY4MyA0Ljk5MkMyOS4zODgzIDUuMzc2IDI5Ljk0MDMgNS44OCAzMC4zMjQzIDYuNTA0VjQuNjA4SDM0LjQyODNWMThIMzAuMzI0M1YxNi4xMDRDMjkuOTI0MyAxNi43MjggMjkuMzY0MyAxNy4yMzIgMjguNjQ0MyAxNy42MTZDMjcuOTQwMyAxOCAyNy4xMTYzIDE4LjE5MiAyNi4xNzIzIDE4LjE5MkMyNS4wODQzIDE4LjE5MiAyNC4wOTIzIDE3LjkxMiAyMy4xOTYzIDE3LjM1MkMyMi4zMDAzIDE2Ljc3NiAyMS41ODgzIDE1Ljk2OCAyMS4wNjAzIDE0LjkyOEMyMC41NDgzIDEzLjg3MiAyMC4yOTIzIDEyLjY1NiAyMC4yOTIzIDExLjI4Wk0zMC4zMjQzIDExLjMwNEMzMC4zMjQzIDEwLjI4IDMwLjAzNjMgOS40NzIgMjkuNDYwMyA4Ljg4QzI4LjkwMDMgOC4yODggMjguMjEyMyA3Ljk5MiAyNy4zOTYzIDcuOTkyQzI2LjU4MDMgNy45OTIgMjUuODg0MyA4LjI4OCAyNS4zMDgzIDguODhDMjQuNzQ4MyA5LjQ1NiAyNC40NjgzIDEwLjI1NiAyNC40NjgzIDExLjI4QzI0LjQ2ODMgMTIuMzA0IDI0Ljc0ODMgMTMuMTIgMjUuMzA4MyAxMy43MjhDMjUuODg0MyAxNC4zMiAyNi41ODAzIDE0LjYxNiAyNy4zOTYzIDE0LjYxNkMyOC4yMTIzIDE0LjYxNiAyOC45MDAzIDE0LjMyIDI5LjQ2MDMgMTMuNzI4QzMwLjAzNjMgMTMuMTM2IDMwLjMyNDMgMTIuMzI4IDMwLjMyNDMgMTEuMzA0Wk00MS4zODE0IDExLjMwNEM0MS4zODE0IDkuOTEyIDQxLjY2MTQgOC42OTYgNDIuMjIxNCA3LjY1NkM0Mi43OTc0IDYuNjE2IDQzLjU4OTQgNS44MTYgNDQuNTk3NCA1LjI1NkM0NS42MjE0IDQuNjk2IDQ2Ljc4OTQgNC40MTYgNDguMTAxNCA0LjQxNkM0OS43ODE0IDQuNDE2IDUxLjE4MTQgNC44NTYgNTIuMzAxNCA1LjczNkM1My40Mzc0IDYuNjE2IDU0LjE4MTQgNy44NTYgNTQuNTMzNCA5LjQ1Nkg1MC4xNjU0QzQ5Ljc5NzQgOC40MzIgNDkuMDg1NCA3LjkyIDQ4LjAyOTQgNy45MkM0Ny4yNzc0IDcuOTIgNDYuNjc3NCA4LjIxNiA0Ni4yMjk0IDguODA4QzQ1Ljc4MTQgOS4zODQgNDUuNTU3NCAxMC4yMTYgNDUuNTU3NCAxMS4zMDRDNDUuNTU3NCAxMi4zOTIgNDUuNzgxNCAxMy4yMzIgNDYuMjI5NCAxMy44MjRDNDYuNjc3NCAxNC40IDQ3LjI3NzQgMTQuNjg4IDQ4LjAyOTQgMTQuNjg4QzQ5LjA4NTQgMTQuNjg4IDQ5Ljc5NzQgMTQuMTc2IDUwLjE2NTQgMTMuMTUySDU0LjUzMzRDNTQuMTgxNCAxNC43MiA1My40Mzc0IDE1Ljk1MiA1Mi4zMDE0IDE2Ljg0OEM1MS4xNjU0IDE3Ljc0NCA0OS43NjU0IDE4LjE5MiA0OC4xMDE0IDE4LjE5MkM0Ni43ODk0IDE4LjE5MiA0NS42MjE0IDE3LjkxMiA0NC41OTc0IDE3LjM1MkM0My41ODk0IDE2Ljc5MiA0Mi43OTc0IDE1Ljk5MiA0Mi4yMjE0IDE0Ljk1MkM0MS42NjE0IDEzLjkxMiA0MS4zODE0IDEyLjY5NiA0MS4zODE0IDExLjMwNFpNNjkuNzEyNiAxOEw2NS42MzI2IDEyLjM4NFYxOEg2MS41Mjg2VjAuMjRINjUuNjMyNlYxMC4wNTZMNjkuNjg4NiA0LjYwOEg3NC43NTI2TDY5LjE4NDYgMTEuMzI4TDc0LjgwMDYgMThINjkuNzEyNloiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTg5Ljc1NjYgMThMODYuMjUyNiAxMS42NEg4NS4yNjg2VjE4SDgxLjE2NDZWMS4xNTJIODguMDUyNkM4OS4zODA2IDEuMTUyIDkwLjUwODYgMS4zODQgOTEuNDM2NiAxLjg0OEM5Mi4zODA2IDIuMzEyIDkzLjA4NDYgMi45NTIgOTMuNTQ4NiAzLjc2OEM5NC4wMTI2IDQuNTY4IDk0LjI0NDYgNS40NjQgOTQuMjQ0NiA2LjQ1NkM5NC4yNDQ2IDcuNTc2IDkzLjkyNDYgOC41NzYgOTMuMjg0NiA5LjQ1NkM5Mi42NjA2IDEwLjMzNiA5MS43MzI2IDEwLjk2IDkwLjUwMDYgMTEuMzI4TDk0LjM4ODYgMThIODkuNzU2NlpNODUuMjY4NiA4LjczNkg4Ny44MTI2Qzg4LjU2NDYgOC43MzYgODkuMTI0NiA4LjU1MiA4OS40OTI2IDguMTg0Qzg5Ljg3NjYgNy44MTYgOTAuMDY4NiA3LjI5NiA5MC4wNjg2IDYuNjI0QzkwLjA2ODYgNS45ODQgODkuODc2NiA1LjQ4IDg5LjQ5MjYgNS4xMTJDODkuMTI0NiA0Ljc0NCA4OC41NjQ2IDQuNTYgODcuODEyNiA0LjU2SDg1LjI2ODZWOC43MzZaTTEwNy43MTcgMTguMTkyQzEwNi40MDUgMTguMTkyIDEwNS4yMjEgMTcuOTEyIDEwNC4xNjUgMTcuMzUyQzEwMy4xMjUgMTYuNzkyIDEwMi4zMDEgMTUuOTkyIDEwMS42OTMgMTQuOTUyQzEwMS4xMDEgMTMuOTEyIDEwMC44MDUgMTIuNjk2IDEwMC44MDUgMTEuMzA0QzEwMC44MDUgOS45MjggMTAxLjEwOSA4LjcyIDEwMS43MTcgNy42OEMxMDIuMzI1IDYuNjI0IDEwMy4xNTcgNS44MTYgMTA0LjIxMyA1LjI1NkMxMDUuMjY5IDQuNjk2IDEwNi40NTMgNC40MTYgMTA3Ljc2NSA0LjQxNkMxMDkuMDc3IDQuNDE2IDExMC4yNjEgNC42OTYgMTExLjMxNyA1LjI1NkMxMTIuMzczIDUuODE2IDExMy4yMDUgNi42MjQgMTEzLjgxMyA3LjY4QzExNC40MjEgOC43MiAxMTQuNzI1IDkuOTI4IDExNC43MjUgMTEuMzA0QzExNC43MjUgMTIuNjggMTE0LjQxMyAxMy44OTYgMTEzLjc4OSAxNC45NTJDMTEzLjE4MSAxNS45OTIgMTEyLjM0MSAxNi43OTIgMTExLjI2OSAxNy4zNTJDMTEwLjIxMyAxNy45MTIgMTA5LjAyOSAxOC4xOTIgMTA3LjcxNyAxOC4xOTJaTTEwNy43MTcgMTQuNjRDMTA4LjUwMSAxNC42NCAxMDkuMTY1IDE0LjM1MiAxMDkuNzA5IDEzLjc3NkMxMTAuMjY5IDEzLjIgMTEwLjU0OSAxMi4zNzYgMTEwLjU0OSAxMS4zMDRDMTEwLjU0OSAxMC4yMzIgMTEwLjI3NyA5LjQwOCAxMDkuNzMzIDguODMyQzEwOS4yMDUgOC4yNTYgMTA4LjU0OSA3Ljk2OCAxMDcuNzY1IDcuOTY4QzEwNi45NjUgNy45NjggMTA2LjMwMSA4LjI1NiAxMDUuNzczIDguODMyQzEwNS4yNDUgOS4zOTIgMTA0Ljk4MSAxMC4yMTYgMTA0Ljk4MSAxMS4zMDRDMTA0Ljk4MSAxMi4zNzYgMTA1LjIzNyAxMy4yIDEwNS43NDkgMTMuNzc2QzEwNi4yNzcgMTQuMzUyIDEwNi45MzMgMTQuNjQgMTA3LjcxNyAxNC42NFpNMTIwLjg4NiAxMS4yOEMxMjAuODg2IDkuOTA0IDEyMS4xNDIgOC42OTYgMTIxLjY1NCA3LjY1NkMxMjIuMTgyIDYuNjE2IDEyMi44OTQgNS44MTYgMTIzLjc5IDUuMjU2QzEyNC42ODYgNC42OTYgMTI1LjY4NiA0LjQxNiAxMjYuNzkgNC40MTZDMTI3LjczNCA0LjQxNiAxMjguNTU4IDQuNjA4IDEyOS4yNjIgNC45OTJDMTI5Ljk4MiA1LjM3NiAxMzAuNTM0IDUuODggMTMwLjkxOCA2LjUwNFY0LjYwOEgxMzUuMDIyVjE4SDEzMC45MThWMTYuMTA0QzEzMC41MTggMTYuNzI4IDEyOS45NTggMTcuMjMyIDEyOS4yMzggMTcuNjE2QzEyOC41MzQgMTggMTI3LjcxIDE4LjE5MiAxMjYuNzY2IDE4LjE5MkMxMjUuNjc4IDE4LjE5MiAxMjQuNjg2IDE3LjkxMiAxMjMuNzkgMTcuMzUyQzEyMi44OTQgMTYuNzc2IDEyMi4xODIgMTUuOTY4IDEyMS42NTQgMTQuOTI4QzEyMS4xNDIgMTMuODcyIDEyMC44ODYgMTIuNjU2IDEyMC44ODYgMTEuMjhaTTEzMC45MTggMTEuMzA0QzEzMC45MTggMTAuMjggMTMwLjYzIDkuNDcyIDEzMC4wNTQgOC44OEMxMjkuNDk0IDguMjg4IDEyOC44MDYgNy45OTIgMTI3Ljk5IDcuOTkyQzEyNy4xNzQgNy45OTIgMTI2LjQ3OCA4LjI4OCAxMjUuOTAyIDguODhDMTI1LjM0MiA5LjQ1NiAxMjUuMDYyIDEwLjI1NiAxMjUuMDYyIDExLjI4QzEyNS4wNjIgMTIuMzA0IDEyNS4zNDIgMTMuMTIgMTI1LjkwMiAxMy43MjhDMTI2LjQ3OCAxNC4zMiAxMjcuMTc0IDE0LjYxNiAxMjcuOTkgMTQuNjE2QzEyOC44MDYgMTQuNjE2IDEyOS40OTQgMTQuMzIgMTMwLjA1NCAxMy43MjhDMTMwLjYzIDEzLjEzNiAxMzAuOTE4IDEyLjMyOCAxMzAuOTE4IDExLjMwNFpNMTQxLjk3NSAxMS4yOEMxNDEuOTc1IDkuOTA0IDE0Mi4yMzEgOC42OTYgMTQyLjc0MyA3LjY1NkMxNDMuMjcxIDYuNjE2IDE0My45ODMgNS44MTYgMTQ0Ljg3OSA1LjI1NkMxNDUuNzc1IDQuNjk2IDE0Ni43NzUgNC40MTYgMTQ3Ljg3OSA0LjQxNkMxNDguNzU5IDQuNDE2IDE0OS41NTkgNC42IDE1MC4yNzkgNC45NjhDMTUxLjAxNSA1LjMzNiAxNTEuNTkxIDUuODMyIDE1Mi4wMDcgNi40NTZWMC4yNEgxNTYuMTExVjE4SDE1Mi4wMDdWMTYuMDhDMTUxLjYyMyAxNi43MiAxNTEuMDcxIDE3LjIzMiAxNTAuMzUxIDE3LjYxNkMxNDkuNjQ3IDE4IDE0OC44MjMgMTguMTkyIDE0Ny44NzkgMTguMTkyQzE0Ni43NzUgMTguMTkyIDE0NS43NzUgMTcuOTEyIDE0NC44NzkgMTcuMzUyQzE0My45ODMgMTYuNzc2IDE0My4yNzEgMTUuOTY4IDE0Mi43NDMgMTQuOTI4QzE0Mi4yMzEgMTMuODcyIDE0MS45NzUgMTIuNjU2IDE0MS45NzUgMTEuMjhaTTE1Mi4wMDcgMTEuMzA0QzE1Mi4wMDcgMTAuMjggMTUxLjcxOSA5LjQ3MiAxNTEuMTQzIDguODhDMTUwLjU4MyA4LjI4OCAxNDkuODk1IDcuOTkyIDE0OS4wNzkgNy45OTJDMTQ4LjI2MyA3Ljk5MiAxNDcuNTY3IDguMjg4IDE0Ni45OTEgOC44OEMxNDYuNDMxIDkuNDU2IDE0Ni4xNTEgMTAuMjU2IDE0Ni4xNTEgMTEuMjhDMTQ2LjE1MSAxMi4zMDQgMTQ2LjQzMSAxMy4xMiAxNDYuOTkxIDEzLjcyOEMxNDcuNTY3IDE0LjMyIDE0OC4yNjMgMTQuNjE2IDE0OS4wNzkgMTQuNjE2QzE0OS44OTUgMTQuNjE2IDE1MC41ODMgMTQuMzIgMTUxLjE0MyAxMy43MjhDMTUxLjcxOSAxMy4xMzYgMTUyLjAwNyAxMi4zMjggMTUyLjAwNyAxMS4zMDRaTTE2OS4zMjggMTguMTkyQzE2OC4xNiAxOC4xOTIgMTY3LjEyIDE3Ljk5MiAxNjYuMjA4IDE3LjU5MkMxNjUuMjk2IDE3LjE5MiAxNjQuNTc2IDE2LjY0OCAxNjQuMDQ4IDE1Ljk2QzE2My41MiAxNS4yNTYgMTYzLjIyNCAxNC40NzIgMTYzLjE2IDEzLjYwOEgxNjcuMjE2QzE2Ny4yNjQgMTQuMDcyIDE2Ny40OCAxNC40NDggMTY3Ljg2NCAxNC43MzZDMTY4LjI0OCAxNS4wMjQgMTY4LjcyIDE1LjE2OCAxNjkuMjggMTUuMTY4QzE2OS43OTIgMTUuMTY4IDE3MC4xODQgMTUuMDcyIDE3MC40NTYgMTQuODhDMTcwLjc0NCAxNC42NzIgMTcwLjg4OCAxNC40MDggMTcwLjg4OCAxNC4wODhDMTcwLjg4OCAxMy43MDQgMTcwLjY4OCAxMy40MjQgMTcwLjI4OCAxMy4yNDhDMTY5Ljg4OCAxMy4wNTYgMTY5LjI0IDEyLjg0OCAxNjguMzQ0IDEyLjYyNEMxNjcuMzg0IDEyLjQgMTY2LjU4NCAxMi4xNjggMTY1Ljk0NCAxMS45MjhDMTY1LjMwNCAxMS42NzIgMTY0Ljc1MiAxMS4yOCAxNjQuMjg4IDEwLjc1MkMxNjMuODI0IDEwLjIwOCAxNjMuNTkyIDkuNDggMTYzLjU5MiA4LjU2OEMxNjMuNTkyIDcuOCAxNjMuOCA3LjEwNCAxNjQuMjE2IDYuNDhDMTY0LjY0OCA1Ljg0IDE2NS4yNzIgNS4zMzYgMTY2LjA4OCA0Ljk2OEMxNjYuOTIgNC42IDE2Ny45MDQgNC40MTYgMTY5LjA0IDQuNDE2QzE3MC43MiA0LjQxNiAxNzIuMDQgNC44MzIgMTczIDUuNjY0QzE3My45NzYgNi40OTYgMTc0LjUzNiA3LjYgMTc0LjY4IDguOTc2SDE3MC44ODhDMTcwLjgyNCA4LjUxMiAxNzAuNjE2IDguMTQ0IDE3MC4yNjQgNy44NzJDMTY5LjkyOCA3LjYgMTY5LjQ4IDcuNDY0IDE2OC45MiA3LjQ2NEMxNjguNDQgNy40NjQgMTY4LjA3MiA3LjU2IDE2Ny44MTYgNy43NTJDMTY3LjU2IDcuOTI4IDE2Ny40MzIgOC4xNzYgMTY3LjQzMiA4LjQ5NkMxNjcuNDMyIDguODggMTY3LjYzMiA5LjE2OCAxNjguMDMyIDkuMzZDMTY4LjQ0OCA5LjU1MiAxNjkuMDg4IDkuNzQ0IDE2OS45NTIgOS45MzZDMTcwLjk0NCAxMC4xOTIgMTcxLjc1MiAxMC40NDggMTcyLjM3NiAxMC43MDRDMTczIDEwLjk0NCAxNzMuNTQ0IDExLjM0NCAxNzQuMDA4IDExLjkwNEMxNzQuNDg4IDEyLjQ0OCAxNzQuNzM2IDEzLjE4NCAxNzQuNzUyIDE0LjExMkMxNzQuNzUyIDE0Ljg5NiAxNzQuNTI4IDE1LjYgMTc0LjA4IDE2LjIyNEMxNzMuNjQ4IDE2LjgzMiAxNzMuMDE2IDE3LjMxMiAxNzIuMTg0IDE3LjY2NEMxNzEuMzY4IDE4LjAxNiAxNzAuNDE2IDE4LjE5MiAxNjkuMzI4IDE4LjE5MloiIGZpbGw9IiMzRkQwRDQiLz4KPC9zdmc+Cg=="},203:function(e,M,t){"use strict";var a=t(0),i=t.n(a),N=t(205),u=t(211),g=t.n(u);M.a=Object(N.a)(function(e){var M=e.img,t=e.className,a=e.children,N=e.home;return i.a.createElement(g.a,{className:t,fluid:M,home:N},a)}).withConfig({displayName:"StyledHero",componentId:"sc-1x7e6lr-0"})(["min-height:",";background:",";background-position:center;background-size:cover;opacity:1!important;display:flex;justify-content:center;align-items:center;"],function(e){return e.home?"calc(100vh - 62px)":"50vh"},function(e){return e.home?"linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))":"none"})},212:function(e,M,t){"use strict";t(259);var a=t(261),i=t(0),N=t.n(i),u=t(186),g=t.n(u),j=(t(262),t(213)),D=t.n(j),r=t(200),n=t.n(r);M.a=function(e){console.log(e.edge.node.frontmatter);var M=a.data.aboutImage;return N.a.createElement("article",{className:g.a.blog},N.a.createElement("div",{className:g.a.imgContainer},N.a.createElement(D.a,{className:g.a.img,fluid:M.childImageSharp.fluid}),N.a.createElement(n.a,{to:"/",fade:!0,className:g.a.link},"Button"),N.a.createElement("h6",{className:g.a.date},"may 15th, 2016")),N.a.createElement("div",{className:g.a.footer},N.a.createElement("h3",null,"Some blog name"),N.a.createElement("div",{className:g.a.info},N.a.createElement("h4",{className:g.a.country},e.edge.node.frontmatter.description),N.a.createElement("div",{className:g.a.details},N.a.createElement("h6",null,e.edge.node.fields.readingTime.text),e.edge.node.frontmatter.tags.map(function(e,M){return N.a.createElement("h6",null,"#",e)})))))}},213:function(e,M,t){"use strict";var a=t(4);M.__esModule=!0,M.default=void 0;var i,N=a(t(6)),u=a(t(21)),g=a(t(20)),j=a(t(10)),D=a(t(0)),r=a(t(1)),n=function(e){var M=(0,j.default)({},e),t=M.resolutions,a=M.sizes,i=M.critical;return t&&(M.fixed=t,delete M.resolutions),a&&(M.fluid=a,delete M.sizes),i&&(M.loading="eager"),M},c=Object.create({}),I=function(e){var M=n(e),t=M.fluid?M.fluid.src:M.fixed.src;return c[t]||!1},T="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,s="undefined"!=typeof window,E=s&&window.IntersectionObserver,l=new WeakMap;var o=function(e,M){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(l.has(e.target)){var M=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),M())}})},{rootMargin:"200px"})),i);return t&&(t.observe(e),l.set(e,M)),function(){t.unobserve(e),l.delete(e)}},y=function(e){var M=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",N=e.title?'title="'+e.title+'" ':"",u=e.alt?'alt="'+e.alt+'" ':'alt="" ',g=e.width?'width="'+e.width+'" ':"",j=e.height?'height="'+e.height+'" ':"",D=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+g+j+t+i+M+u+N+D+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=D.default.forwardRef(function(e,M){var t=e.sizes,a=e.srcSet,i=e.src,N=e.style,u=e.onLoad,r=e.onError,n=e.loading,c=(0,g.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return D.default.createElement("img",(0,j.default)({sizes:t,srcSet:a,src:i},c,{onLoad:u,onError:r,ref:M,loading:n,style:(0,j.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},N)}))});L.propTypes={style:r.default.object,onError:r.default.func,onLoad:r.default.func};var A=function(e){function M(M){var t;(t=e.call(this,M)||this).seenBefore=s&&I(M),t.addNoScript=!(M.critical&&!M.fadeIn),t.useIOSupport=!T&&E&&!M.critical&&!t.seenBefore;var a=M.critical||s&&(T||!t.useIOSupport);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&M.fadeIn},t.imageRef=D.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,u.default)((0,u.default)(t))),t.handleRef=t.handleRef.bind((0,u.default)((0,u.default)(t))),t}(0,N.default)(M,e);var t=M.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:I(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var M=this;this.useIOSupport&&e&&(this.cleanUpListeners=o(e,function(){var e=I(M.props);M.state.isVisible||"function"!=typeof M.props.onStartLoad||M.props.onStartLoad({wasCached:e}),M.setState({isVisible:!0},function(){return M.setState({imgLoaded:e,imgCached:!!M.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var e,M,t;e=this.props,M=n(e),t=M.fluid?M.fluid.src:M.fixed.src,c[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=n(this.props),M=e.title,t=e.alt,a=e.className,i=e.style,N=void 0===i?{}:i,u=e.imgStyle,g=void 0===u?{}:u,r=e.placeholderStyle,c=void 0===r?{}:r,I=e.placeholderClassName,T=e.fluid,s=e.fixed,E=e.backgroundColor,l=e.durationFadeIn,o=e.Tag,A=e.itemProp,d=e.loading,z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,j.default)({opacity:z?1:0,transition:O?"opacity "+l+"ms":"none"},g),f="boolean"==typeof E?"lightgray":E,Q={transitionDelay:l+"ms"},C=(0,j.default)({opacity:this.state.imgLoaded?0:1},O&&Q,g,c),Y={title:M,alt:this.state.isVisible?"":t,style:C,className:I};if(T){var k=T;return D.default.createElement(o,{className:(a||"")+" gatsby-image-wrapper",style:(0,j.default)({position:"relative",overflow:"hidden"},N),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},D.default.createElement(o,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),f&&D.default.createElement(o,{title:M,style:(0,j.default)({backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&Q)}),k.base64&&D.default.createElement(L,(0,j.default)({src:k.base64},Y)),k.tracedSVG&&D.default.createElement(L,(0,j.default)({src:k.tracedSVG},Y)),this.state.isVisible&&D.default.createElement("picture",null,k.srcSetWebp&&D.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),D.default.createElement(L,{alt:t,title:M,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:d})),this.addNoScript&&D.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,j.default)({alt:t,title:M,loading:d},k))}}))}if(s){var m=s,p=(0,j.default)({position:"relative",overflow:"hidden",display:"inline-block",width:m.width,height:m.height},N);return"inherit"===N.display&&delete p.display,D.default.createElement(o,{className:(a||"")+" gatsby-image-wrapper",style:p,ref:this.handleRef,key:"fixed-"+JSON.stringify(m.srcSet)},f&&D.default.createElement(o,{title:M,style:(0,j.default)({backgroundColor:f,width:m.width,opacity:this.state.imgLoaded?0:1,height:m.height},O&&Q)}),m.base64&&D.default.createElement(L,(0,j.default)({src:m.base64},Y)),m.tracedSVG&&D.default.createElement(L,(0,j.default)({src:m.tracedSVG},Y)),this.state.isVisible&&D.default.createElement("picture",null,m.srcSetWebp&&D.default.createElement("source",{type:"image/webp",srcSet:m.srcSetWebp,sizes:m.sizes}),D.default.createElement(L,{alt:t,title:M,width:m.width,height:m.height,sizes:m.sizes,src:m.src,crossOrigin:this.props.crossOrigin,srcSet:m.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A,loading:d})),this.addNoScript&&D.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,j.default)({alt:t,title:M,loading:d},m))}}))}return null},M}(D.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var d=r.default.shape({width:r.default.number.isRequired,height:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string}),z=r.default.shape({aspectRatio:r.default.number.isRequired,src:r.default.string.isRequired,srcSet:r.default.string.isRequired,sizes:r.default.string.isRequired,base64:r.default.string,tracedSVG:r.default.string,srcWebp:r.default.string,srcSetWebp:r.default.string});A.propTypes={resolutions:d,sizes:z,fixed:d,fluid:z,fadeIn:r.default.bool,durationFadeIn:r.default.number,title:r.default.string,alt:r.default.string,className:r.default.oneOfType([r.default.string,r.default.object]),critical:r.default.bool,crossOrigin:r.default.oneOfType([r.default.string,r.default.bool]),style:r.default.object,imgStyle:r.default.object,placeholderStyle:r.default.object,placeholderClassName:r.default.string,backgroundColor:r.default.oneOfType([r.default.string,r.default.bool]),onLoad:r.default.func,onError:r.default.func,onStartLoad:r.default.func,Tag:r.default.string,itemProp:r.default.string,loading:r.default.oneOf(["auto","lazy","eager"])};var O=A;M.default=O},259:function(e,M,t){"use strict";t(260)("link",function(e){return function(M){return e(this,"a","href",M)}})},260:function(e,M,t){var a=t(13),i=t(23),N=t(24),u=/"/g,g=function(e,M,t,a){var i=String(N(e)),g="<"+M;return""!==t&&(g+=" "+t+'="'+String(a).replace(u,"&quot;")+'"'),g+">"+i+"</"+M+">"};e.exports=function(e,M){var t={};t[e]=M(g),a(a.P+a.F*i(function(){var M=""[e]('"');return M!==M.toLowerCase()||M.split('"').length>3}),"String",t)}},261:function(e){e.exports={data:{aboutImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADE0lEQVQozy2Ra2xTdRiHz3fjCJTTjbO2pz2X3k/bswvd2AXG1nVrZ8sYgyKb3RKdThNRdEqiZCyLDpe54VCCF8JiMoMuhIDovMwxhGwCDsUQYzIviHzAr4b4wYmPx8YPb968/3/y5H1+r1Aq+9D9Jg53ALdmUOLQC6X6ooVyKUG8AROnJ8gamwPFGym8m5W1xCpqCBiVaP4Y0bJN2CUVocz6eKinj+z2HIlkGy2tWTY3JKmubSTTnqNjZzfpTCepB3bQkGhj5+4eDLOaIgu+TpRZa3Ox9v/+3yxsSbbT1dtPettuBg6OM3JkiueGJmjN5tjS2GKBttPcmiGZytLUnKYxkSIYMrHZJCSvF8kI4lRUpKAPhzeAUJ/Os6m5k8mT8yz++jdzP/zBpV9W6X7sWe67fw1F60RL1Y64oZT19hLWi8VIHjdKQzmeXD3ebA29AYX4xjC+WAxhzxMHOL20wuKtexboLy7/tsrDT72IvcRBIFLOrvwjpLZ1FoCyouF0edDa61HzCUoe3EqHGWagaANR3cra2lK4/vtdlu/A0q1/mL12m7bOPJLsZWBolJlPL3Lhu58L3R+OWsdy4SyV8VTFcOebCbXV05sxKe+vRS038FsRCCt377HyJ7z/xTU21jUh62GGx4+ycP0nPvrya85d/IYFC/rCS2OIlrJL9uCULeV0HZEDabq/HabrxzHMqV1ohh/h5iq8+cE5QmYVoivIo88M8taxUd44PsWZ81c5e/4ys199z+snptmaSCJaGRY7ZeLeMJsPNTF0c5qrd24QX+jDHQ8i7H95EqcaRgnF0Y04PrOOQ4ePMD42yHsfX+DU54vMLt1g/O1pDo6MUlZZjU2S2Os2SPU2EJ3rY8/yEMZkO56ApezyV6BFqgswLVyJQw1R1Zjh1YlXeO3YUWbmrnB6/grvnPqM5weH2dHVg2gTeVoPsM/tx0zEKM6ZKH4vmqYj+GI1lnscNVSBGixDD1cglqr079vPxOER3v1wgZOfXGJmfpmWbAd20Y5kKTutAz0uKzzpUImoBoqmouoa/wI8cbog25bZwAAAAABJRU5ErkJggg==",aspectRatio:1.7777777777777777,src:"/static/47b0f12f3e6f1609e32920844d0065d3/59139/bc.png",srcSet:"/static/47b0f12f3e6f1609e32920844d0065d3/d3809/bc.png 150w,\n/static/47b0f12f3e6f1609e32920844d0065d3/fdbb0/bc.png 300w,\n/static/47b0f12f3e6f1609e32920844d0065d3/59139/bc.png 600w,\n/static/47b0f12f3e6f1609e32920844d0065d3/cb30f/bc.png 900w,\n/static/47b0f12f3e6f1609e32920844d0065d3/ba299/bc.png 1200w,\n/static/47b0f12f3e6f1609e32920844d0065d3/91f24/bc.png 1280w",sizes:"(max-width: 600px) 100vw, 600px"}}}}}},262:function(e,M,t){e.exports=t.p+"static/defaultBcg-1bc167c56564e36f63c72b0683bd3ea4.jpeg"}}]);
//# sourceMappingURL=3-53f37cba5c4f7333330a.js.map