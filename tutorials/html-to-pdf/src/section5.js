import * from '@ironsoftware/ironpdf';

export function run() {
	// Render a from even more complex HTML code.
	PdfDocument.fromHtml("./sample4.html").then((pdf) async {
	    return await pdf.saveAs("html-file-to-pdf-2.pdf");
	});
}