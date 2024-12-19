import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

export function run() {
	var config = IronPdfGlobalConfig.getConfig();
	config.licenseKey = "{YOUR-LICENSE-KEY-HERE}";
}