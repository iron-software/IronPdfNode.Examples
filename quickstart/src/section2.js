   import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

export function run() {
	// Import the necessary module
	   (async () => {
	       // Retrieve the current configuration
	       var config = IronPdfGlobalConfig.getConfig();
	       // Enable debug mode
	       config.debugMode = true;
	   })();
}