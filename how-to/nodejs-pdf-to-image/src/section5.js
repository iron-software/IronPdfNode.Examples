import { PdfDocument, ImageType } from "@ironsoftware/ironpdf";

export function run() {
	// Convert PDF containing many pages to BMP images.
	const options = {
	    type: ImageType.BMP,
	    fromPages: [0, 3, 5, 8]  // Select only the desired pages
	};
	PdfDocument.fromFile("./sample-pdf-with-images.pdf").then((pdf) => {
	    pdf.rasterizeToImageFiles("./images/multipage-selective-pdf/multipage-pdf-page.bmp", options);
	});
}