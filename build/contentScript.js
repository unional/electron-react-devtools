!function(e){function __webpack_require__(t){if(o[t])return o[t].exports;var s=o[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,__webpack_require__),s.loaded=!0,s.exports}var o={};return __webpack_require__.m=e,__webpack_require__.c=o,__webpack_require__.p="",__webpack_require__(0)}([function(e,o){"use strict";function handleMessageFromDevtools(e){window.postMessage({source:"react-devtools-content-script",payload:e},"*")}function handleMessageFromPage(e){e.data&&"react-devtools-bridge"===e.data.source&&t.postMessage(e.data.payload)}function handleDisconnect(){window.removeEventListener("message",handleMessageFromPage),window.postMessage({source:"react-devtools-content-script",payload:{type:"event",evt:"shutdown"}},"*")}var t=chrome.runtime.connect({name:"content-script"});t.onMessage.addListener(handleMessageFromDevtools),t.onDisconnect.addListener(handleDisconnect),window.addEventListener("message",handleMessageFromPage),window.postMessage({source:"react-devtools-content-script",hello:!0},"*")}]);