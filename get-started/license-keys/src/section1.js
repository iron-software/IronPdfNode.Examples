import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

export function run() {
	// Import the IronPdfGlobalConfig from the IronPDF package
	// Apply your IronPDF license key
	// Replace {YOUR-LICENSE-KEY-HERE} with the actual license key you received
	IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
}