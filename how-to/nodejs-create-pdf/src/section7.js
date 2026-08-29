import { PdfDocument, PdfEncryptionType } from "@ironsoftware/ironpdf";

export async function run() {
	const pdf = await PdfDocument.fromHtml("<h1>Confidential Document</h1>");

	// Apply password protection with granular permissions.
	// The guide calls a single `securePdf({...})` method; the package exports no
	// such method. Passwords, permissions and encryption are set individually,
	// and the permission keys are PascalCase.
	await pdf.setUserPassword("view-password");
	await pdf.setOwnerPassword("admin-password");
	await pdf.setPermission({
		AllowAnnotations: false,
		AllowPrint: true,
		AllowExtractContent: false,
	});
	await pdf.setEncryptionType(PdfEncryptionType.Aes_256);

	await pdf.saveAs("secured-document.pdf");
}
