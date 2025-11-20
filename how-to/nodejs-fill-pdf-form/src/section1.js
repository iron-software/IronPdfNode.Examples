import * from '@ironsoftware/ironpdf';

export function run() {
	// Sample code for filling a PDF form
	// Import necessary dependencies
	const { IronPDFWrapper } = require('iron-pdf-wrapper');
	// Initialize IronPDF with your license key
	const pdfProcessor = new IronPDFWrapper('your-license-key');
	// Define the path to the PDF document you want to fill
	const pdfPath = './example.pdf';
	// Load the PDF document
	const pdfDocument = pdfProcessor.loadPdf(pdfPath);
	// Fill the form fields within the PDF
	// Use the field name and the desired value
	pdfDocument.fillFormField('formField1', 'Sample Value');
	pdfDocument.fillFormField('formField2', 'Another Value');
	// Define the path where you want to save the filled PDF
	const outputPath = './filled_example.pdf';
	// Save the filled PDF to the specified path
	pdfDocument.saveAs(outputPath);
	// Output a success message to the console
	console.log('PDF form filled and saved successfully at:', outputPath);
}