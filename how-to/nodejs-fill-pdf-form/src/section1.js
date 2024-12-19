import * from '@ironsoftware/ironpdf';

export function run() {
	// Sample code for filling a PDF form
	// Import necessary dependencies
	const { IronPDFWrapper } = require('iron-pdf-wrapper');
	// Initialize IronPDF
	const pdfProcessor = new IronPDFWrapper('your-license-key');
	// Load the PDF document
	const pdfPath = './example.pdf';
	const pdfDocument = pdfProcessor.loadPdf(pdfPath);
	// Fill the form fields
	pdfDocument.fillFormField('formField1', 'Sample Value');
	pdfDocument.fillFormField('formField2', 'Another Value');
	// Save the filled PDF
	const outputPath = './filled_example.pdf';
	pdfDocument.saveAs(outputPath);
	console.log('PDF form filled and saved successfully at:', outputPath);
}