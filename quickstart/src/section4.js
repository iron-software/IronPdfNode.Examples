import { PdfDocument } from "@ironsoftware/ironpdf";

export function run() {
	// Import the needed module
	/* Convert a URL to a PDF */
	(async () => {
	   const pdf = await PdfDocument.fromUrl("https://ironpdf.com/nodejs/");
	   // Save the generated PDF
	   await pdf.saveAs("./url_to_pdf.pdf");
	})();
}