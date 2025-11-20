***Based on <https://ironpdf.com/examples/headers-and-footers/>***

Discover how to seamlessly incorporate text headers and footers into your PDFs generated from HTML.

To integrate text headers and footers, configure them within the rendering settings. Establish the header's style by detailing its content, placement, font choice, and size. Similar attributes can be defined for the footer using the `textFooter` property. Enhance your headers and footers by including dynamic fields such as `{page}`, `{total-pages}`, `{url}`, `{date}`, `{time}`, `{html-title}`, and `{pdf-title}` to customize them as needed.

Adjust the document margins to ensure space for both the header and footer.

Employ the `PdfDocument.FromHtml` method for transforming HTML into a professionally styled PDF by including the `renderOptions` parameter.

For comprehensive guidance on this process, consult the [IronPDF Documentation](https://ironpdf.com/docs/).

The final PDF, titled "header_footer.pdf," incorporates all specified headers and footers.

```csharp
// Import IronPdf namespace
using IronPdf;

class Program
{
    static void Main(string[] args)
    {
        // HTML content definition
        string htmlContent = @"<html><body><h1>Welcome!</h1><p>This PDF includes custom headers and footers.</p></body></html>";

        // Define PDF settings for headers and footers
        var printOptions = new PdfPrintOptions()
        {
            // Header configuration with placeholders
            Header = new SimpleHeaderFooter()
            {
                CenterText = "{pdf-title}",
                FontFamily = "Helvetica",
                FontSize = 14,
                DrawDividerLine = true,
                Height = 50 // Header height setting
            },
            // Footer configuration with placeholders
            Footer = new SimpleHeaderFooter()
            {
                CenterText = "Page {page} of {total-pages}",
                FontFamily = "Helvetica",
                FontSize = 12,
                DrawDividerLine = true,
                Height = 50 // Footer height setting
            },
            MarginTop = 55, // Adjust top margin for the header
            MarginBottom = 55 // Adjust bottom margin for the footer
        };

        // Generating the PDF from HTML with specific options
        var pdf = PdfDocument.FromHtml(htmlContent, printOptions);

        // Save the PDF file with custom headers and footers
        pdf.SaveAs("header_footer.pdf");
    }
}
```

[Explore the detailed example code on GitHub](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/headers-and-footers) and see how headers and footers can be dynamically added to your PDF documents.