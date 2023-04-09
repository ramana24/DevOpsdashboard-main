/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ux/SecondProject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
