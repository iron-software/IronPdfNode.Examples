import { PdfDocument, defaultChromePdfRenderOptions, PaperSize, FitToPaperModes, PdfPaperOrientation } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Initialize render options with default settings
	var options = defaultChromePdfRenderOptions();
	// Set top, left, right, and bottom page margins in millimeters. 
	options.margin = {
	  top: 50,
	  bottom: 50,
	  left: 60,
	  right: 60
	};
	options.paperSize = PaperSize.A5;
	options.fitToPaperMode = FitToPaperModes.FitToPage;
	options.paperOrientation = PdfPaperOrientation.Landscape;
	options.grayScale = true;
	// Create a PDF from the Google.com Home Page
	PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
	  return await pdf.saveAs("set-margins-and-page-size.pdf");
	});
}