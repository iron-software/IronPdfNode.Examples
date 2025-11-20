# Implementing IronPDF License Key in Node.js Projects

***Based on <https://ironpdf.com/get-started/license-keys/>***


## Obtaining a License Key

Implementing an IronPDF license key removes the trial limitations such as watermarks and allows your Node.js projects to go live without any restrictions.

Acquire your IronPDF license by [purchasing directly](https://ironpdf.com/nodejs/licensing/) or opting for a [free 30-day trial of IronPDF](https://ironpdf.com/nodejs/licensing/).

## Configuring Your License Key

After the installation of IronPDF, you need to activate your license by allocating the `licenseKey` in the IronPDF global configuration object as illustrated below:

```nodejs
// Import the global configuration class from IronPDF
import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";

// Setting the IronPDF license key
// Replace {YOUR-LICENSE-KEY-HERE} with your actual license key
IronPdfGlobalConfig.getConfig().licenseKey = "{YOUR-LICENSE-KEY-HERE}";
```

## Additional Support or Questions?

Should you require further assistance or if you have any questions, our dedicated support team is ready to help you. Feel free to [reach out to our support staff](https://ironpdf.com/#live-chat-support).