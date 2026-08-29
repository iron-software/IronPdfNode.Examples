import { PdfDocument } from "@ironsoftware/ironpdf";

// Define the function to merge PDFs
async function mergePdfs(outputFilePath, inputFiles) {
	// Retrieve the PDF documents
	const pdfDocs = await Promise.all(inputFiles.map((file) => PdfDocument.fromFile(file)));

	// Combine the PDF documents
	const mergedPdf = await PdfDocument.mergePdf(pdfDocs);

	// Store the merged PDF at the designated output file path
	await mergedPdf.saveAs(outputFilePath);

	console.log(`Merged PDF is saved at ${outputFilePath}`);
}

export async function run() {
	const inputFiles = ["file1.pdf", "file2.pdf", "file3.pdf"];
	const outputFilePath = "merged.pdf";

	await mergePdfs(outputFilePath, inputFiles);
}
