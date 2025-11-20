***Based on <https://ironpdf.com/examples/security-and-metadata/>***

IronPDF provides powerful functionalities for PDF encryption, decryption, metadata manipulation, and permission settings including options for annotations, content copying and pasting, form fields, and printing access.

To access a password-protected PDF, use the `open` method and specify the password as the second argument. To alter metadata, instantiate a new map and populate it with key-value pairs representing the desired metadata. You can then apply this metadata to the PDF by calling the `overrideMetadata` method.

The `removePasswordsAndEncryption` method is designed to eliminate passwords from a PDF file. Meanwhile, the `makePdfDocumentReadOnly` method secures the PDF, encrypting it with 128-bit encryption and restricting the ability to copy and paste content, make annotations, or edit forms.

You can also establish specific permissions by creating a permission object with desired settings and passing it to the `setPermission` method.

For saving changes, the `saveAs` method allows you to set `ownerPassword` and `userPassword` attributes accordingly.

For a comprehensive understanding of what IronPDF can do, you can visit the [IronPDF product page](https://ironpdf.com) or find out more about Iron Software at their [homepage](https://ironsoftware.com).

[Explore Security & Metadata Examples on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/security-and-metadata) for practical implementations and further insights.