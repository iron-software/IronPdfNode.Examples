import { PdfDocument } from "@ironsoftware/ironpdf";

export function run() {
	// Import the needed module
	/* Convert an HTML String to a PDF */
	PdfDocument.fromHtml("<h1>Hello world!</h1><p><small>A PDF brought to you by IronPDF for Node.js!</small></p>")
	.then((pdf) => {
	    // Save the generated PDF
	    pdf.saveAs("./html-string-to-pdf.pdf");
	});
	/* Convert an HTML File to a PDF */
	PdfDocument.fromHtml("./index.html")
	.then((pdf) => {
	    // Save the generated PDF
	    pdf.saveAs("./html-file-to-pdf.pdf");
	});
}