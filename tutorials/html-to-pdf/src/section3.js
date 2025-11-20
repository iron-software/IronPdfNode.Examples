import { PdfDocument } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Create a PDF from the HTML String "Hello world!"
	const pdf = await PdfDocument.fromHtml("<h1>Hello from IronPDF!</h1>");
	// Save the PDF document to the file system.
	await pdf.saveAs("html-string-to-pdf.pdf");
}