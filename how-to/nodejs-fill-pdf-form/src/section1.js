import {PdfDocument, IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

export async function run() {
    IronPdfGlobalConfig.getConfig().licenseKey = "IRONPDF-MYLICENSE-KEY-1EF01";

    // Load the PDF that carries the form
    const pdf = await PdfDocument.fromFile("./form.pdf");

    // Discover the field names if you do not already know them
    const fieldNames = await pdf.getFormFieldNames();
    console.log("Form fields:", fieldNames);

    // Fill each field by name
    await pdf.setFormFieldValue("firstName", "Jane");
    await pdf.setFormFieldValue("email", "jane@example.com");

    // Flatten to lock the values into the page content
    await pdf.flattenAllFormFields();

    await pdf.saveAs("./filled-form.pdf");
}
