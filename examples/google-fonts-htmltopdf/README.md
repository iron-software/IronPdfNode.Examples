***Based on <https://ironpdf.com/examples/google-fonts-htmltopdf/>***

To ensure assets such as JavaScript, fonts, and network resources are properly rendered, a render delay should be defined using the `waitFor` class attribute. This provides the necessary load time for these important assets.

For embedding a custom font from Google Fonts into your HTML content, configure the render options by using the `waitFor` parameter. Set the wait-for type to `RenderDelay` and allocate a maximum of 500 milliseconds for this operation.

Once your HTML content is rendered, convert it into a PDF using the [IronPDF's PDF Generation Library](https://ironpdf.com). Inspecting the final PDF should reveal that the custom font is correctly implemented and visible.

Here's how you can do it with C#:

```csharp
// Example C# Code: Rendering HTML with a Custom Font via IronPDF

using IronPdf;

class Program
{
    static void Main()
    {
        // Initialize the PDF renderer
        var pdfRenderer = new HtmlToPdf();

        // Set rendering options to include a delay for loading assets
        pdfRenderer.PrintOptions.WaitFor = WebBrowserEvent.RenderDelay;
        pdfRenderer.PrintOptions.RenderDelay = 500; // Delay of 500 milliseconds

        // HTML definition including a Google Font
        string htmlContent = @"
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' rel='stylesheet'>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                }
                h1 {
                    font-weight: 700;
                }
            </style>
            <title>Sample PDF</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This text uses a custom Google font.</p>
        </body>
        </html>";

        // Convert HTML to PDF
        var pdfDocument = pdfRenderer.RenderHtmlAsPdf(htmlContent);

        // Save the generated PDF
        pdfDocument.SaveAs("SampleWithFonts.pdf");

        // Inform the user of success
        Console.WriteLine("PDF successfully generated with the custom Google font!");
    }
}
```

Check out further examples and integrations via [Explore Google Fonts to PDF Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/google-fonts-htmltopdf).