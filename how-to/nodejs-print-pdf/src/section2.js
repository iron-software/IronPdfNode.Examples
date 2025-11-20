import * from '@ironsoftware/ironpdf';

export function run() {
	const printerOptions = {
	  printer: 'Name_of_Printer', // Replace with the name of your printer
	  copies: 2 // Number of copies to print
	};
	printer
	  .print(filePath, printerOptions)
	  .then(() => {
	    console.log('Print job with options was successful.');
	  })
	  .catch((error) => {
	    console.error('An error occurred with options:', error);
	  });
}