***Based on <https://ironpdf.com/examples/encryption-and-decryption/>***

This example illustrates how to edit metadata, set a PDF to read-only, manage permissions, and update the document encryption password using the robust C# .NET PDF library from IronPDF.

Start by importing an existing PDF document using the `open` method. This function also supports opening password-protected documents by including the password as the second argument, ensuring effective management of secure files.

To update the metadata, initially create an empty dictionary and populate it with key-value pairs for various metadata elements like the author and keywords. Then, employ the `overrideMetadata` method from IronPDF to implement these metadata updates in the PDF document.

Following that, use the `removePasswordsAndEncryption` method from IronPDF to eliminate any passwords and encryption, and employ the `makePdfDocumentReadOnly` method to set a new password, thereby securing the document's integrity and making it read-only.

For configuring permissions, create an object named "permissions" that details whether certain operations such as annotations, content extraction, form filling, and printing are permitted or prohibited. Submit this permissions object to the `setPermission` method to accurately modify the document’s accessibility options.

Conclude by altering or establishing the document encryption password to "my-password," and store the updated PDF as "secured.pdf". This demonstrates IronPDF’s adeptness in secure document handling for software development.