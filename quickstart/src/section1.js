import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

export function run() {
	(async () => {
	    // Input the license key
	    const IronPdfConfig = {
	        licenseKey: "IRONPDF-MYLICENSE-KEY-1EF01",
	    };
	    // Set the config with the license key
	    IronPdfGlobalConfig.setConfig(IronPdfConfig);
	})();
}