import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	// Convert the Web Page to a pixel-perfect PDF file.
	const pdf = await PdfDocument.fromUrl("https://en.wikipedia.org/wiki/PDF");
	// Save the document.
	await pdf.saveAs("url-to-pdf.pdf");
}