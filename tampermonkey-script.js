// ==UserScript==
// @name           Disable website hotkeys
// @description    Stop websites from hijacking keyboard shortcuts.
// @author         yeshiqing
// @license        MIT
// @run-at         document-start
// @include        https://www.yuque.com/*
// @grant          none
// @version        0.0.3
// @namespace      https://github.com/yeshiqing/disable-website-hotkeys
// ==/UserScript==

// Disable these keys when no keyboard modifier is pressed
let std_keycodes = new Set([
    // Add keycodes as desired
    // 37, 38, 39, 40 // Arrow Keys.
]);

// Disable these keys when Meta key is pressed.
let meta_keycodes = new Set([
    // Add keycodes as desired
    13 // Command + F
]);

// Disable these keys when Alt key is pressed.
let alt_keycodes = new Set([
    // Add keycodes as desired
    // 83 // Alt + S
]);


let isMac = navigator.platform.indexOf('Mac') >= 0;

window.addEventListener('keydown', function (e) {
    let keycode_set;
    if (isMac ? e.metaKey : e.ctrlKey) {
        keycode_set = meta_keycodes;
    } else if (e.altKey) {
        keycode_set = alt_keycodes;
    } else {
        keycode_set = std_keycodes;
    }

    if (keycode_set.has(e.keyCode)) {
        e.stopImmediatePropagation();
    }
}, true);