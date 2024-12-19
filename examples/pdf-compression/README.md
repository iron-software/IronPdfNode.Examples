***Based on <https://ironpdf.com/examples/pdf-compression/>***

IronPDF provides robust tools for compressing PDF documents, with a focus on shrinking the size of embedded images. This is achieved through the `compressSize` method applied to the PDF object.

For JPEG images, the impact of the quality setting is significant. A quality level of 100% maintains high fidelity, whereas a setting as low as 1% results in significantly degraded quality. Generally, quality levels of 90% or higher are deemed high-quality. Those between 80% and 90% are medium quality, and settings from 70% to 80% are seen as low quality. Dropping the quality below 70% might compromise image clarity greatly; however, it will substantially decrease the PDF’s file size.

It is advisable to trial different quality levels to strike an optimal balance suitable for your needs between image clarity and document size reduction. The specific response to quality adjustments can vary widely among different images, with some showing more profound loss of detail than others.