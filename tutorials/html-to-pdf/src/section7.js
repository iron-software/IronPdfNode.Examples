import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	// Render the HTML string
	PdfDocument.fromZip("./html-zip.zip", {
	    mainHtmlFile: "index.html"
	}).then(async (pdf) => {
	    return await pdf.saveAs("html-zip-to-pdf.pdf");
	});
}