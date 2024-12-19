# How to Employ IronPdfEngine

***Based on <https://ironpdf.com/how-to/use-ironpdfengine/>***


IronPdfEngine serves as a powerful gRPC server designed to manage various operations with IronPDF including generating, modifying, and reading PDF documents.

<h3>Getting Started with IronPDF</h3>

--------------------------------

## Node.js Integration and IronPdfEngine

For Node.js users, IronPdf requires IronPdfEngine to function. The Node.js implementation acts as an API facade for IronPdfEngine's gRPC functionalities. Essentially, every method invoked in IronPdf for Node.js leverages IronPdfEngine behind the scenes.

By design, IronPdf for Node.js initiates IronPdfEngine as a subprocess and maintains communication until the application terminates.

It's important to match the version of IronPdf for Node.js with the corresponding version of IronPdfEngine, as cross-version compatibility is not supported.

### Implementing IronPdf for Node.js with a Local IronPdfEngine

#### Option 1: Dynamically Download IronPdfEngine

After integrating IronPdf into your project, the initial execution will auto-detect your operating system (e.g., Windows x64) and automatically fetch the appropriate IronPdfEngine binaries.

```shell
npm install @ironsoftware/ironpdf
```

**Advantages**

* Reduces the overall size of your application package.
* Flexible deployment across various platforms.

**Disadvantages**

* Requires internet connectivity for initial downloads.
* Potentially slow initial startup time.

#### Option 2: Pre-install IronPdfEngine (Recommended)

This approach enables you to pre-install IronPdfEngine by including it as a dependency, packaging IronPdfEngine into a .zip file which automatically extracts and configures itself.

You should ensure that the version tags for `ironpdf` and `ironpdf-engine-xxx-xxx` align correctly.

`ironpdf-engine-xxx-xxx` merely indicates the package version, not the IronPdfEngine version within.

##### Installation Commands for Different Platforms

For Windows x64:
```shell
npm install @ironsoftware/ironpdf-engine-windows-x64
```

For Windows x86:
```shell
npm install @ironsoftware/ironpdf-engine-windows-x86
```

For Linux x64:
```shell
npm install @ironsoftware/ironpdf-engine-linux-x64
```

For macOS x64:
```shell
npm install @ironsoftware/ironpdf-engine-macos-x64
```

For macOS ARM:
```shell
npm install @ironsoftware/ironpdf-engine-macos-arm64
```

Note: It’s typically not advisable to install every dependency due to their substantial size.

**Advantages**

* Quicker startup times.
* No internet dependency post-installation.

**Disadvantages**

* Increased size of the application package.
* Requires specifying the target platforms.

## Configuring Node.js with a Remote IronPdfEngine

To hook up with a remotely running IronPdfEngine, it's crucial to sync the version of IronPdf for Node.js with the identical IronPdfEngine release (e.g., version 2024.2.2 for both).

```js
const ironPdfEngineVersion = IronPdfGlobalConfig.ironPdfEngineVersion;
```

### How to Establish Connection

Suppose IronPdfEngine is operating remotely at `123.456.7.8:33350`.

For instructions on deploying IronPdfEngine remotely, refer to "[How to Deploy and Manage IronPdfEngine](https://ironpdf.com/how-to/pull-run-ironpdfengine/)."

Integrate this configuration at the beginning of your application or before making any calls to IronPdf methods:
```js
IronPdfGlobalConfig.setConfig({
    ironPdfEngineDockerAddress:"123.456.7.8:33350"
});
```
This single step links your application with the Remote IronPdfEngine, streamlining your PDF handling operations.

When utilizing Remote IronPdfEngine, there's no need to install IronPdfEngine as a local dependency. You can bypass the section titled "[Option 2: Pre-install IronPdfEngine (Recommended)](#anchor-option-2-recommended-install-ironpdfengine-as-a-dependency)."