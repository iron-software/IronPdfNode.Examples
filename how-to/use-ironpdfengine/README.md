# Guide to Utilizing IronPdfEngine

***Based on <https://ironpdf.com/how-to/use-ironpdfengine/>***


IronPdfEngine serves as a gRPC server designed to facilitate the creation, editing, and management of PDF documents through the capabilities offered by IronPDF.

## Interaction Between Node.js and IronPdfEngine

For Node.js applications, IronPdf is dependent on IronPdfEngine, functioning essentially as an API layer to the latter's gRPC server capabilities. Whenever a method from IronPdf is invoked in Node.js, the actual processing is carried out by IronPdfEngine.

By default, IronPdf for Node.js initiates IronPdfEngine as a subprocess which remains active until the application is terminated.

For flawless operation, ensure that the IronPdf for Node.js version aligns with the corresponding IronPdfEngine version, as cross-version compatibility is not supported.

### Implementing IronPdf for Node.js with a Local IronPdfEngine

#### Option 1: Runtime Download of IronPdfEngine

Initially, after incorporating IronPdf into your Node.js project, the system identifies your platform (such as Windows x64) and downloads the appropriate IronPdfEngine binaries.

```shell
npm install @ironsoftware/ironpdf
```

**Advantages**:
- Smaller application size.
- Versatile across different platforms.

**Disadvantages**:
- Requires internet for initial runs.
- Slower startup times.

#### Option 2 (Recommended): Installing IronPdfEngine as a Dependency

This method enables inclusion of IronPdfEngine directly as a package dependency in your project. This approach bundles IronPdfEngine into a .zip file which is then automatically extracted and utilized by the application.

You can select from different platform-specific dependencies:

```shell
npm install @ironsoftware/ironpdf-engine-windows-x64
npm install @ironsoftware/ironpdf-engine-windows-x86
npm install @ironsoftware/ironpdf-engine-linux-x64
npm install @ironsoftware/ironpdf-engine-macos-x64
npm install @ironsoftware/ironpdf-engine-macos-arm64
```
It's important that the version of `ironpdf` matches the version of `ironpdf-engine-xxx-xxx`.

**Advantages**:
- Quicker startup.
- No internet required post-installation.

**Disadvantages**:
- Increases the size of the application.
- Requires specifying the destination platform.

## Utilizing IronPdf with a Remote IronPdfEngine

When deploying IronPdfEngine remotely, it is crucial that the IronPdf version matches exactly with the IronPdfEngine version to avoid compatibility issues. For example, if IronPdf for Node.js is version 2024.2.2, then IronPdfEngine must also be 2024.2.2.

Check the required version using:
```js
const ironPdfEngineVersion = IronPdfGlobalConfig.ironPdfEngineVersion;
```

### Connection Setup

Assuming IronPdfEngine operates remotely at `123.456.7.8:33350`, connect by setting the configuration in your application’s initial setup:

```js
IronPdfGlobalConfig.setConfig({
    ironPdfEngineDockerAddress: "123.456.7.8:33350"
});
```

This simple configuration ensures your application communicates with the remote IronPdfEngine. Note that when using a remote IronPdfEngine, there is no need to install IronPdfEngine as a local dependency.

For more detailed instructions on setting up a remote IronPdfEngine, please visit ["How to Pull and Run IronPdfEngine"](https://ironpdf.com/how-to/pull-run-ironpdfengine/).