import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	const pdf = await PdfDocument.fromHtml("<h1>Hello, PDF!</h1><p>Generated with IronPDF.</p>");
	await pdf.saveAs("output.pdf");
}
