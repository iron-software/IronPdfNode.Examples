***Based on <https://ironpdf.com/examples/page-numbers-and-page-breaks/>***

When converting HTML to PDF, IronPDF handles page breaks flawlessly. 

In the context of HTML, a page break is a specific marker that advises either a web browser or a rendering engine to initiate a new page when displaying or printing content. This is particularly useful for managing the layout of printed documents or ensuring that particular sections start on a new page.

Additionally, the following code snippet adjusts the rendering settings to insert the page number at the bottom center of each page in the PDF. The format used for the page numbering is "`{page}` of `{total-pages}`", with a maximum height restriction of 15 units for the numbers.

```html
<!-- Configuration for rendering PDF page numbers and ensuring page breaks are respected -->
```

For detailed information on effectively handling page breaks during your HTML to PDF conversions, visit the [detailed guide on IronPDF features](https://www.ironpdf.com/docs/#features). IronPDF is just one element of Iron Software's comprehensive suite of file processing utilities, which also includes [barcode creation using IronBarcode](https://ironsoftware.com/csharp/barcode), [managing Excel files with IronXL](https://ironsoftware.com/csharp/excel/), and [performing optical character recognition via IronOCR](https://ironsoftware.com/csharp/ocr/).

[Explore detailed code examples for implementing page numbers and breaks in PDFs](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/page-numbers-and-page-breaks)