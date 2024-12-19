import {PdfDocument} from "@ironsoftware/ironpdf";

(async () => {
    // Define the HTML content with editable form fields
    const formHtml = `
        <html>
            <body>
                <h2>Editable PDF Form</h2>
                <form>
                    First name: <br> <input type='text' name='firstname' value=''> <br>
                    Last name: <br> <input type='text' name='lastname' value=''> <br>
                    <br>
                    <p>Please specify your gender:</p>
                    <input type='radio' id='female' name='gender' value='Female'>
                    <label for='female'>Female</label> <br>
                    <br>
                    <input type='radio' id='male' name='gender' value='Male'>
                    <label for='male'>Male</label> <br>
                    <br>
                    <input type='radio' id='non-binary/other' name='gender' value='Non-Binary / Other'>
                    <label for='non-binary/other'>Non-Binary / Other</label>
                    <br>
                    <p>Please select all medical conditions that apply:</p>
                    <input type='checkbox' id='condition1' name='Hypertension' value='Hypertension'>
                    <label for='condition1'> Hypertension</label><br>
                    <input type='checkbox' id='condition2' name='Heart Disease' value='Heart Disease'>
                    <label for='condition2'> Heart Disease</label><br>
                    <input type='checkbox' id='condition3' name='Stoke' value='Stoke'>
                    <label for='condition3'> Stoke</label><br>
                    <input type='checkbox' id='condition4' name='Diabetes' value='Diabetes'>
                    <label for='condition4'> Diabetes</label><br>
                    <input type='checkbox' id='condition5' name='Kidney Disease' value='Kidney Disease'>
                    <label for='condition5'> Kidney Disease</label><br>
                </form>
            </body>
        </html>
    `;

    // Configure render options
    const options = {
        createPdfFormsFromHtml: true,
    };

    // Render HTML content to a PDF with editable forms
    const pdf = await PdfDocument.fromHtml(formHtml, { renderOptions: options });

    // Save the new PDF
    await pdf.saveAs("formField.pdf");
})();