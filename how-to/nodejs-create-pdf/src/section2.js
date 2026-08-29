import { PdfDocument } from "@ironsoftware/ironpdf";

export async function run() {
	const htmlContent = `
	<!DOCTYPE html>
	<html>
	<head>
		<style>
			body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
			.header { background: #2b4c8c; color: white; padding: 24px 32px; }
			.header h1 { margin: 0; font-size: 22px; }
			.body { padding: 32px; }
			table { width: 100%; border-collapse: collapse; margin-top: 16px; }
			th { background: #f0f4fb; text-align: left; padding: 8px 12px; }
			td { padding: 8px 12px; border-bottom: 1px solid #e0e0e0; }
		</style>
	</head>
	<body>
		<div class="header"><h1>Invoice #INV-2025-0042</h1></div>
		<div class="body">
			<p>Date: ${new Date().toLocaleDateString()}</p>
			<table>
				<tr><th>Item</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr>
				<tr><td>IronPDF Enterprise License</td><td>1</td><td>$499.00</td><td>$499.00</td></tr>
				<tr><td>Priority Support (1 year)</td><td>1</td><td>$199.00</td><td>$199.00</td></tr>
			</table>
			<p style="text-align:right; margin-top:16px;"><strong>Total: $698.00</strong></p>
		</div>
	</body>
	</html>`;

	// Generate the PDF from the HTML string
	const pdf = await PdfDocument.fromHtml(htmlContent);
	await pdf.saveAs("invoice.pdf");
}
