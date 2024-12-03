***Based on <https://ironpdf.com/examples/pdf-compression/>***

IronPDF provides excellent features for the compression of PDF files. A fundamental approach is to diminish the size of images within the PDF, which can be achieved through the `compressSize` method on the PDF object.

Adjusting the quality of JPEG images within the PDF is vital. A quality parameter of 100% maintains the image’s high fidelity, whereas a setting at 1% yields a significantly deteriorated quality. Generally, quality levels above 90% are regarded as high, between 80%-90% as medium, and 70%-80% as low. Should you decrease the quality below 70%, while the visual clarity might degrade, this action can notably minimize the PDF’s file size.

It is advisable to try various quality settings to strike an optimal balance tailored to your needs between the image quality and the PDF size. The impacts of quality adjustments might vary based on the original image, with some showing more pronounced reductions in clarity than others.