import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Render a PDF from even more complex HTML code.
	PdfDocument.fromHtml("./sample4.html").then(async (pdf) => {
	    return await pdf.saveAs("html-file-to-pdf-2.pdf");
	});
}