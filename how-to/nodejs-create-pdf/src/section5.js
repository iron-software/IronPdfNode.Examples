import { PdfDocument, PaperSize, PdfPaperOrientation, WaitForType } from "@ironsoftware/ironpdf";

export async function run() {
	// Render settings go inside a `renderOptions` object. Passing them flat -- as
	// the guide does -- is silently ignored: the document comes back A4 portrait
	// with none of the settings applied, and no error is raised.
	// The runtime enum is `PaperSize`; `PdfPaperSize` is a TypeScript type alias
	// and is `undefined` at runtime.
	const config = {
		renderOptions: {
			paperSize: PaperSize.A4,
			margin: { top: 25, bottom: 25, left: 20, right: 20 },
			paperOrientation: PdfPaperOrientation.Portrait,
			printHtmlBackgrounds: true,
			waitFor: { type: WaitForType.RenderDelay, delay: 250 },
		},
	};

	const pdf = await PdfDocument.fromHtml("<h1>Configured PDF</h1>", config);
	await pdf.saveAs("configured-output.pdf");
}
