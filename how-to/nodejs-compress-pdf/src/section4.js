import { PdfDocument } from "@ironsoftware/ironpdf";

async function compressPdfFiles(inputPaths, quality = 80) {
	const results = await Promise.all(
		inputPaths.map(async (inputPath) => {
			const pdf = await PdfDocument.fromFile(inputPath);
			await pdf.compressSize(quality);

			const outputPath = inputPath.replace(".pdf", "-compressed.pdf");
			await pdf.saveAs(outputPath);

			return { input: inputPath, output: outputPath };
		})
	);

	return results;
}

export async function run() {
	const files = ["report-q1.pdf", "report-q2.pdf", "report-q3.pdf"];
	const compressed = await compressPdfFiles(files, 75);
	compressed.forEach((r) => console.log(`Saved: ${r.output}`));
}
