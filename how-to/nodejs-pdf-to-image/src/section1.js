import { PdfDocument } from "@ironsoftware/ironpdf";

export function run() {
	// Convert PDF File to a PNG File
	await PdfDocument.fromFile("./sample-pdf-file.pdf").then((resolve) => {
	    resolve.rasterizeToImageFiles("./images/sample-pdf-file.png");
	    return resolve;
	});
}