import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    const multi_page_html = `
    <p> This is 1st Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 2nd Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 3rd Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 4th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 5th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 6th Page</p>
    <div style='page-break-after: always;'></div>
    <p> This is 7th Page</p>`;

    // Create a PDF or Load an existing PDF using PdfDocument.fromFile
    const pdf = await PdfDocument.fromHtml(multi_page_html);

    // Create a header
    const header = {
        htmlFragment: "THIS IS HEADER {page} of {total-pages}",
    };

    // Get page count
    const pageCount = await pdf.getPageCount();

    // Create a Page Range 0 .. 7
    const allPageIndexes = Array.from({ length: pageCount }, (_, index) => index);

    // Example 1
    // Apply header to even page index only. (page number will be odd number because index starts at 0 but page number starts at 1)
    const evenPageIndexes = allPageIndexes.filter(number => number % 2 === 0);
    await pdf.addHtmlHeader(header, evenPageIndexes);
    await pdf.saveAs("EvenPages.pdf");
    
    // Example 2
    // Apply header to odd page index only. (page number will be even number because index starts at 0 but page number starts at 1)
    const oddPageIndexes = allPageIndexes.filter(number => number % 2 !== 0);
    await pdf.addHtmlHeader(header, oddPageIndexes);
    await pdf.saveAs("OddPages.pdf");
    
    // Example 3
    // Apply header to the last page only.
    const lastPageIndex = [pageCount - 1];
    await pdf.addHtmlHeader(header, lastPageIndex);
    await pdf.saveAs("LastPageOnly.pdf");
    
    // Example 4
    // Apply header to the first page only.
    const firstPageIndex = [0];
    await pdf.addHtmlHeader(header, firstPageIndex);
    await pdf.saveAs("FirstPageOnly.pdf");
    
    // Example 5
    // Skip the first page.
    const skipFirstPageIndexes5 = allPageIndexes.slice(1);
    await pdf.addHtmlHeader(header, skipFirstPageIndexes5);
    await pdf.saveAs("SkipFirstPage.pdf");
})();