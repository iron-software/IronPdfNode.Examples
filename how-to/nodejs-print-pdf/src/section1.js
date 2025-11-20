import * from '@ironsoftware/ironpdf';

export function run() {
	// Import the printer module
	const printer = require('pdf-to-printer');
	// Define the file path to the PDF
	const filePath = './path/to/your/file.pdf';
	// Print the PDF file
	printer
	  .print(filePath)
	  .then(() => {
	    console.log('Print job was successful.');
	  })
	  .catch((error) => {
	    console.error('An error occurred while printing:', error);
	  });
}