# How to Implement an IronPDF License Key in Node.js Projects

***Based on <https://ironpdf.com/how-to/license-keys/>***


## Acquiring a License Key

Integrating an IronPDF license key enables the deployment of your project in a live environment free from any limitations or watermarks.

You can [acquire an IronPDF license](https://ironpdf.com/nodejs/licensing/) or opt for a <a class='js-modal-open' data-modal-id='trial-license'>complimentary 30-day trial of IronPDF</a>.

## Configuring Your License Key

After the installation of IronPDF, it's necessary to configure the use of your license key. This is done by setting the `licenseKey` property within the global configuration object of IronPDF. The following code snippet illustrates how to set this up:

```node
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

// Set up your IronPDF license key
IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

## Assistance and Support Queries

Should you require further assistance or have questions, our dedicated team is ready to help. Feel free to [reach out to our support team](https://ironpdf.com/#live-chat-support).