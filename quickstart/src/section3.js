import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	/* Convert an HTML String to a PDF */
	PdfDocument.fromHtml("<h1>Hello world!</h1><p><small>A PDF brought to you by IronPDF for Node.js!</small></p>")
	.then((pdf) => {
	    pdf.saveAs("./html-string-to-pdf.pdf");
	});
	/* Convert an HTML File to a PDF */
	PdfDocument.fromHtml("./index.html")
	.then((pdf) => {
	    pdf.saveAs("./html-file-to-pdf.pdf");
	});
}