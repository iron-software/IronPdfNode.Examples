import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	// Load an HTML file and render it as a PDF.
	// fromHtml takes either an HTML string or a path to an .html file. The guide
	// uses fromFile here; fromFile is typed and documented as opening a .pdf, and
	// its second argument is a change-tracking mode, not render options -- so an
	// HTML file belongs on fromHtml.
	const pdf = await PdfDocument.fromHtml("./templates/report-template.html");
	await pdf.saveAs("./output/report.pdf");
}
