import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Render the HTML from a zip archive
	PdfDocument.fromZip("./html-zip.zip", {
	  mainHtmlFile: "index.html"
	}).then(async (pdf) => {
	  return await pdf.saveAs("html-zip-to-pdf.pdf");
	});
}