import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

export function run() {
	// Apply your IronPDF license key
	IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
}