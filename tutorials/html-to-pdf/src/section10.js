import { PdfDocument, defaultChromePdfRenderOptions } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Initialize render options with default settings
	var options = defaultChromePdfRenderOptions();
	// Define a rich HTML header
	options.htmlHeader = {
	  htmlFragment: "<strong>https://www.google.com/</strong>",
	  dividerLine: true,
	  dividerLineColor: "blue",
	  loadStylesAndCSSFromMainHtmlDocument: true,
	};
	// Define a rich HTML footer
	options.htmlFooter = {
	  htmlFragment: "<img src='logo.png' alt='IronPDF for Node.js' style='display: block; width: 150px; height: auto; margin-left: auto; margin-right: auto;'>",
	  dividerLine: true,
	  loadStylesAndCSSFromMainHtmlDocument: true
	};
	// Render a PDF from a URL
	await PdfDocument.fromUrl("https://www.google.com/", { renderOptions: options }).then(async (pdf) => {
	  return await pdf.saveAs("add-html-headers-footers.pdf");
	});
}