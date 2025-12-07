sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"threedprinterprice/threedprinterpricelist/test/integration/pages/PriceList",
	"threedprinterprice/threedprinterpricelist/test/integration/pages/PriceObjectPage"
], function (JourneyRunner, PriceList, PriceObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('threedprinterprice/threedprinterpricelist') + '/test/flpSandbox.html#threedprinterpricethreedprinte-tile',
        pages: {
			onThePriceList: PriceList,
			onThePriceObjectPage: PriceObjectPage
        },
        async: true
    });

    return runner;
});

