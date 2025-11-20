import { PdfDocument } from "@ironsoftware/ironpdf";

export function run() {
	// Convert PDF with two pages to a set of images.
	PdfDocument.fromFile("./multipage-pdf.pdf").then((pdf) => {
	    pdf.rasterizeToImageFiles("./images/multipage-pdf/multipage-pdf-page.png");
	});
}