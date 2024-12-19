import * from '@ironsoftware/ironpdf';

export function run() {
	// Convert PDF to JPG (not to PNG)
	pdf.rasterizeToImageFiles("./images/pdf-to-jpeg.jpg");
}