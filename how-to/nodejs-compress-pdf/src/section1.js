import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Load an existing PDF
	const pdf = await PdfDocument.fromFile("report.pdf");

	// Compress embedded images to 60% JPEG quality
	await pdf.compressSize(60);

	// Save the result
	await pdf.saveAs("report-compressed.pdf");
}
