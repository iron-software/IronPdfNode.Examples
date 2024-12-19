import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

export function run() {
	// Convert PDF to JPEG Format using ImageType.JPG
	const options = {
	   type: ImageType.JPG
	};
	await PdfDocument.fromFile("./sample-pdf-file.pdf").then((resolve) => {
	    pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.png", options);
	    return resolve;
	});
}