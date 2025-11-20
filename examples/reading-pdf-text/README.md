***Based on <https://ironpdf.com/examples/reading-pdf-text/>***

Facilitating data migration through the extraction of text and images from documents makes transitioning between formats smoother. It ensures content remains accessible and editable, mitigating the risk of data loss.

Text and images embedded within a PDF can be extracted separately. The text is pulled out as a conventional string, while images are retrieved in an image buffer format, ready for exportation or further manipulation.

To extract text, utilize the `extractText` method, and for image extraction, use the `extractRawImages` method.

Below is an enhanced and commented example of how to perform these tasks:

```csharp
// Load the PDF document using IronPDF
var Pdf = new IronPdf.PdfDocument("example.pdf");

// Extract text from PDF and print to console
string textContent = Pdf.ExtractText();
Console.WriteLine(textContent);

// Extract images and save them to the file system
var images = Pdf.ExtractImages();
foreach (var image in images)
{
    image.SaveAs($"image-{images.IndexOf(image)}.png"); // Save each image with a unique name
}
```

In this C# example:
- We employ the IronPDF library to open a specific PDF file.
- The `ExtractText()` method is called to extract text, which is then displayed in the console.
- The `ExtractImages()` method is used for pulling images out of the PDF, which are then saved as byte arrays. Each image is filed individually with its designated name.

For more extensive guidelines on these methods, be sure to check the [IronPDF Documentation](https://ironpdf.com/docs/).

[Explore More on Reading PDF Text with IronPDF](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/reading-pdf-text)