// ==UserScript==
// @name         Youtube Livestream Reload
// @namespace    https://github.com/BlazerYoo
// @version      0.1
// @description  Reload Youtube page until livestream starts
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let offline = document.getElementsByClassName("ytp-offline-slate-main-text");
    if (offline.length !== 0) {
        setTimeout(function() {
            window.location.reload(1);
        }, 1000);
    }
})();
