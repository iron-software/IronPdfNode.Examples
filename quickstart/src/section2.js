import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

export function run() {
	(async () => {
	    var config = IronPdfGlobalConfig.getConfig();
	    config.debugMode = true;
	})();
}