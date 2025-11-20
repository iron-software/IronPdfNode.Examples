   import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

export function run() {
	// Import the necessary module
	   (async () => {
	       // Create a configuration object with the license key
	       const IronPdfConfig = {
	           licenseKey: "IRONPDF-MYLICENSE-KEY-1EF01",
	       };
	       // Apply the configuration to the global settings
	       IronPdfGlobalConfig.setConfig(IronPdfConfig);
	   })();
}