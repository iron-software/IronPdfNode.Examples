import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	/* Convert an HTML String to a PDF */
	PdfDocument.fromUrl("https://ironpdf.com/nodejs/").then((pdf) => {pdf.saveAs("./url_to_pdf.pdf")});
}