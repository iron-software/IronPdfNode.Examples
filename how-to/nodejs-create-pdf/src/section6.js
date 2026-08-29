import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	const config = {
		renderOptions: {
			htmlHeader: {
				htmlFragment: "<div style='text-align:center; font-size:12px; color:#666;'>Quarterly Report - Confidential</div>",
				dividerLine: true,
			},
			htmlFooter: {
				htmlFragment: "<div style='text-align:right; font-size:10px;'>Page {page} of {total-pages}</div>",
				dividerLine: true,
			},
		},
	};

	const pdf = await PdfDocument.fromHtml("<h1>Q3 Financial Summary</h1><p>See attached tables.</p>", config);
	await pdf.saveAs("report-with-headers.pdf");
}
