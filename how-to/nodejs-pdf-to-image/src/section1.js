import { PdfDocument } from "@ironsoftware/ironpdf";

export function run() {
	// Convert PDF File to a PNG File
	// The operation is performed asynchronously with promises
	PdfDocument.fromFile("./sample-pdf-file.pdf").then((pdf) => {
	    pdf.rasterizeToImageFiles("./images/sample-pdf-file.png");
	    return pdf;
	});
}