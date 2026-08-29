import { PdfDocument } from "@ironsoftware/ironpdf";
import { statSync } from "fs";

export async function run() {
	const inputPath = "annual-report.pdf";
	const outputPath = "annual-report-compressed.pdf";

	const beforeBytes = statSync(inputPath).size;

	const pdf = await PdfDocument.fromFile(inputPath);
	await pdf.compressSize(75);
	await pdf.saveAs(outputPath);

	const afterBytes = statSync(outputPath).size;
	const reduction = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1);

	console.log(`Before: ${(beforeBytes / 1024).toFixed(1)} KB`);
	console.log(`After:  ${(afterBytes / 1024).toFixed(1)} KB`);
	console.log(`Reduced by ${reduction}%`);
}
