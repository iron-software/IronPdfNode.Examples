import {PdfDocument} from "@websiteironsoftware/ironpdf";

export function run() {
	import('./config.js');
	// Render a PDF from an HTML File
	const pdf = await PdfDocument.fromHtml("./sample2.html");
	// Save the PDF document to the same folder as our project.
	await pdf.saveAs("html-file-to-pdf-1.pdf");
}