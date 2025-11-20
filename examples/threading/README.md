***Based on <https://ironpdf.com/examples/threading/>***

JavaScript and Node.js facilitate asynchronous processing modalities. This capacity is also embedded in [IronPDF, a sophisticated .NET PDF library](https://ironpdf.com/), renowned for its adept PDF production and editing features.

IronPDF typically handles operations using promises. This allows for rendering multiple HTML sources concurrently, with `Promise.all` used to synchronize the completion of these tasks.

It's important to recognize that using the `Promise.all` method does not ensure the successful execution of all promises; it merely confirms that all the operations have been completed.

Within the `.map` method, the `await` keyword is employed to pause execution until the PDF conversions are completed, allowing for any necessary modifications to be made to the documents thereafter. However, if the task is strictly to generate PDFs without further adjustments, the application of `async` and `await` might be superfluous.

[Discover Examples of Asynchronous PDF Generation](https://github.com/iron-software/IronPdfNode.Examples/tree/main/examples/threading)