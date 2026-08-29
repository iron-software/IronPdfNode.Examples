import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Merge two PDF files into one
	const merged = await PdfDocument.mergePdf([
		await PdfDocument.fromFile("./report-part1.pdf"),
		await PdfDocument.fromFile("./report-part2.pdf"),
	]);

	await merged.saveAs("./complete-report.pdf");
}
