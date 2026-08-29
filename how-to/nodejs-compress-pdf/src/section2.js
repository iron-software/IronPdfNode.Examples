import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Load the source document
	const pdf = await PdfDocument.fromFile("product-catalog.pdf");

	// Compress images to 90% quality and scale down to visible size
	await pdf.compressSize(90, true);

	// Save the optimized document
	await pdf.saveAs("product-catalog-optimized.pdf");
}
