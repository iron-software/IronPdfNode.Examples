import { PdfDocument, defaultChromePdfRenderOptions, WaitForType } from "@ironsoftware/ironpdf";
import './config.js'; // Import the configuration script

export function run() {
	// Configure the Chrome Renderer to wait up to 20 seconds for a specific element to appear
	var options = defaultChromePdfRenderOptions();
	options.waitFor = {
	  type: WaitForType.HtmlElement,
	  htmlQueryStr: "div.ProseMirror",
	  maxWaitTime: 20000,
	}
	PdfDocument.fromUrl("https://app.surferseo.com/drafts/s/V7VkcdfgFz-dpkldsfHDGFFYf4jjSvvjsdf", { renderOptions: options }).then(async (pdf) => {
	  return await pdf.saveAs("waitfor-htmlelement.pdf");
	});
}