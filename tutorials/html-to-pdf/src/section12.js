import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Configure the Chrome Renderer to wait until 20 seconds has passed
	// before rendering the web page as a PDF.
	var options = defaultChromePdfRenderOptions();
	options.waitFor = {
	  type: WaitForType.RenderDelay,
	  delay: 20000
	}
	PdfDocument.fromUrl("https://ironpdf.com/nodejs/", { renderOptions: options }).then(async (pdf) => {
	  return await pdf.saveAs("waitfor-renderdelay.pdf");
	});
}