"use strict";
function openUrl(url) {
	var newTab = window.open();
	newTab.opener = null;
	newTab.location = url;
}