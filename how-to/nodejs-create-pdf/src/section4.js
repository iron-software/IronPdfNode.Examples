import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Render a live webpage to PDF
	const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
	await pdf.saveAs("ironpdf-homepage.pdf");
}
