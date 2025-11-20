***Based on <https://ironpdf.com/examples/html-headers-and-footers/>***

Set up headers and footers for PDF documents using IronPDF's capabilities, a suite from Iron Software designed for sophisticated PDF creation and editing.

To craft the content for the header, include an HTML snippet and a horizontal line, configuring the maximum permitted height using the versatile PDF rendering features of IronPDF. Likewise, manage the footer content through the `htmlHeader` property from IronPDF.

It's critical to adjust the margins since the heights of the header and footer aren't auto-calculated, which can cause them to cover the primary HTML content inadvertently.

For more elaboration on implementing headers and footers or to delve into additional functionalities, visit the [IronPDF Official Website](https://ironpdf.com).

```csharp
using IronPdf;

class Program
{
    static void Main()
    {
        // Instantiate a PDF renderer
        var pdfRenderer = new HtmlToPdf();

        // Set up the header with HTML content and styling
        string headerHtml = "<div style='width:100%; border-bottom:1px solid black; text-align:center;'>Header Content</div>";

        // Set up the footer with HTML content and styling
        string footerHtml = "<div style='width:100%; border-top:1px solid black; text-align:center;'>Footer Content</div>";

        // Assign header configuration with specified height
        pdfRenderer.PrintOptions.Header = new SimpleHeaderFooter()
        {
            HtmlFragment = headerHtml,
            MaxHeight = 50  // Define the header height
        };

        // Assign footer configuration with specified height
        pdfRenderer.PrintOptions.Footer = new SimpleHeaderFooter()
        {
            HtmlFragment = footerHtml,
            MaxHeight = 50 // Define the footer height
        };

        // Adjust page margins to fit the header and footer without overlapping content
        pdfRenderer.PrintOptions.MarginTop = 60;   // Top margin for the header
        pdfRenderer.PrintOptions.MarginBottom = 60; // Bottom margin for the footer

        // Execute HTML to PDF conversion
        var pdfDocument = pdfRenderer.RenderHtmlAsPdf("<h1>Main Content</h1><p>This is some example content.</p>");

        // Save the generated PDF
        pdfDocument.SaveAs("output.pdf");
    }
}
```

Access further code examples on HTML headers and footers in IronPDF through this GitHub link: [Explore HTML Headers & Footers Code Example on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/html-headers-and-footers).