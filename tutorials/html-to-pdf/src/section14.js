import {PdfDocument} from "@ironsoftware/ironpdf";

export function run() {
	import('./config.js');
	/**
	 * Loads an HTML template from the file system.
	 */
	async function getTemplateHtml(fileLocation) {
	    // Return promise for loading template file
	    return PdfDocument.fromFile(fileLocation);
	}
	/**
	 * Save the PDF document at a given location.
	 */
	async function generatePdf(pdf, location) {
	    return pdf.saveAs(location);
	}
	/**
	 * Use the PdfDocument.replaceText method to replace 
	 * a specified placeholder with a provided value.
	 */
	async function addTemplateData(pdf, key, value) {
	    return pdf.replaceText(key, value);
	}
	const template = "./sample-invoice.html";
	getTemplateHtml(template).then(async (doc) => { // load HTML template from file
	    await addTemplateData(doc, "{FULL-NAME}", "Lizbeth Presland");
	    await addTemplateData(doc, "{ADDRESS}", "678 Manitowish Alley, Portland, OG");
	    await addTemplateData(doc, "{PHONE-NUMBER}", "(763) 894-4345");
	    await addTemplateData(doc, "{INVOICE-NUMBER}", "787");
	    await addTemplateData(doc, "{INVOICE-DATE}", "August 28, 2023");
	    await addTemplateData(doc, "{AMOUNT-DUE}", "13,760.13");
	    await addTemplateData(doc, "{RECIPIENT}", "Celestyna Farmar"),
	    await addTemplateData(doc, "{COMPANY-NAME}", "BrainBook");
	    await addTemplateData(doc, "{TOTAL}", "13,760.13");
	    await addTemplateData(doc, "{AMOUNT-PAID}", "0.00");
	    await addTemplateData(doc, "{BALANCE-DUE}", "13,760.13");
	    await addTemplateData(doc, "{ITEM}", "Training Sessions");
	    await addTemplateData(doc, "{DESCRIPTION}", "60 Minute instruction");
	    await addTemplateData(doc, "{RATE}", "3,440.03");
	    await addTemplateData(doc, "{QUANTITY}", "4");
	    await addTemplateData(doc, "{PRICE}", "13,760.13");
	    return doc;
	}).then(async (doc) => await generatePdf(doc, "html-template-to-pdf.pdf"));
}