import { PdfDocument, defaultChromePdfRenderOptions, AffixFonts } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Initialize render options with default settings
	var options = defaultChromePdfRenderOptions();
	// Build a Custom Text-Based Header
	options.textHeader = {
	  centerText: "https://www.adobe.com",
	  dividerLine: true,
	  font: AffixFonts.CourierNew,
	  fontSize: 12,
	  leftText: "URL to PDF"
	};
	// Build a custom Text-Based Footer
	options.textFooter = {
	  centerText: "IronPDF for Node.js",
	  dividerLine: true,
	  fontSize: 14,
	  font: AffixFonts.Helvetica,
	  rightText: "HTML to PDF in Node.js"
	};
	// Render a PDF from a URL
	PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
	  return await pdf.saveAs("add-custom-headers-footers-1.pdf");
	});
}