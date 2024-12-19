import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	// Create a PDF from the HTML String "Hello world!"
	const pdf = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");
	// Save the PDF document to the file system.
	await pdf.saveAs("html-string-to-pdf.pdf");
}