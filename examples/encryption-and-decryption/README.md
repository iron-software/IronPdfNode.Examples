***Based on <https://ironpdf.com/examples/encryption-and-decryption/>***

This code snippet illustrates how to manipulate metadata, enforce read-only conditions, manage permissions, and modify the document encryption password using IronPDF's robust C# .NET PDF library.

Start by loading an existing PDF document through the `open` method. This function also supports opening documents that are secured by a password, by passing the password as the second argument, ensuring effective management of protected files.

To update the metadata information, first initialize an empty dictionary and populate it with metadata key-value pairs such as the author and keywords. Employ the `overrideMetadata` method in IronPDF to efficiently apply the new metadata to your PDF document.

Then, eliminate passwords and encryption by using IronPDF’s `removePasswordsAndEncryption` method, and render the PDF read-only by employing the `makePdfDocumentReadOnly` method with a new password, bolstering the document's security and integrity.

Configure permissions for the PDF using a "permissions" object that defines permissible actions such as annotations, content extraction, form filling, and printing. Assign this permissions object to the `setPermission` method to accurately tailor the document's accessibility settings.

Conclude by updating or assigning a new document encryption password to "my-password," and save the resulting file as "secured.pdf," demonstrating IronPDF’s prowess in secure document management within application development.