import {PdfDocument, defaultChromePdfRenderOptions, AffixFonts} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	var options = defaultChromePdfRenderOptions();
	// Build a Custom Text-Based Header
	options.textHeader = {
	    centerText: "https://www.adobe.com",
	    dividerLine: true,
	    font: AffixFonts.CourierNew,
	    fontSize: 12,
	    leftText: "URL to PDF"
	};
	// Build a custom Text-Based Footer
	options.textFooter = {
	    centerText: "IronPDF for Node.js",
	    dividerLine: true,
	    fontSize: 14,
	    font: AffixFonts.Helvetica,
	    rightText: "HTML to PDF in Node.js"
	};
	// Render a PDF from an HTML File
	PdfDocument.fromUrl("https://www.google.com/", {renderOptions: options}).then(async (pdf) => {
	    return await pdf.saveAs("add-custom-headers-footers-1.pdf");
	});
}