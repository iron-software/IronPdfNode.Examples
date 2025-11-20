import * from '@ironsoftware/ironpdf';

export function run() {
	IronPdfGlobalConfig.setConfig({
	    ironPdfEngineDockerAddress: "123.456.7.8:33350"
	});
}