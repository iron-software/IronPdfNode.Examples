import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Render HTML to PDF. The guide shows `new ChromePdfRenderer()` here, but the
	// Node package exports no such class -- that is the C# API name. In Node the
	// Chromium renderer is reached through PdfDocument.fromHtml.
	const pdf = await PdfDocument.fromHtml(
		"<h1>Invoice #1042</h1><p>Amount due: $540.00</p>"
	);

	// Compress before saving -- reduces image weight from Chrome-rendered content
	await pdf.compressSize(85);

	// Save the final document
	await pdf.saveAs("invoice-1042.pdf");
}
