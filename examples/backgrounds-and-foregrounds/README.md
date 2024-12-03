***Based on <https://ironpdf.com/examples/backgrounds-and-foregrounds/>***

Applying a background or foreground overlay to a PDF document, whether newly rendered or existing, is straightforward.

In the demonstrated code snippet, the process starts by generating a PDF from a designated URL, which forms the base document. Subsequently, a separate PDF called "MyBackground.pdf" is accessed to serve as the background layer.

To insert the background, the `addBackgroundFromAnotherPdf` method is deployed. This method effectively places the content of "MyBackground.pdf" behind the URL-rendered PDF’s content.

In addition, another PDF named "MyForeground.pdf" is loaded to act as a foreground overlay. By employing the `addForegroundFromAnotherPdf` method, this overlay is placed over the initial content on the first page (page index 0) of the PDF.

The final output, a composite PDF document that includes the original base PDF along with the added background and foreground layers, is then saved under the name "Complete.pdf."