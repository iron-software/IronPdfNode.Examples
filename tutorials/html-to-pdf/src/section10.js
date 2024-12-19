import {PdfDocument, defaultChromePdfRenderOptions} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	var options = defaultChromePdfRenderOptions();
	options.htmlHeader = {
	    htmlFragment: "<strong>https://www.google.com/</strong>",
	    dividerLine: true,
	    dividerLineColor: "blue",
	    loadStylesAndCSSFromMainHtmlDocument: true,
	};
	options.htmlFooter = {
	    htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
	    dividerLine: true,
	    loadStylesAndCSSFromMainHtmlDocument: true
	};
	// Render a PDF from an HTML File
	await PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
	    return await pdf.saveAs("add-html-headers-footers.pdf");
	});
}