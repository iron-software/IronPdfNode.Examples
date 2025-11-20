import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

export function run() {
	// Get the global config object
	var config = IronPdfGlobalConfig.getConfig();
	// Set the license key for IronPDF
	config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
}