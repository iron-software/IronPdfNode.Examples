import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Convert the Web Page to a pixel-perfect PDF file.
	const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");
	// Save the document.
	await pdf.saveAs("url-to-pdf.pdf");
}