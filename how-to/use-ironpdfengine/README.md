# How to Utilize IronPdfEngine

***Based on <https://ironpdf.com/how-to/use-ironpdfengine/>***


IronPdfEngine is a robust gRPC server designed to manage various IronPDF operations, including the generation, modification, and reading of PDF documents.

## Integration of IronPdf in Node.js with IronPdfEngine

For Node.js applications, IronPdf requires IronPdfEngine to operate effectively. Essentially, the Node.js library serves as an API layer on top of the IronPdfEngine gRPC service. Thus, any function invoked via IronPdf in Node.js is executed within the IronPdfEngine.

By default, IronPdf for Node.js initiates IronPdfEngine as a subprocess which remains active until your application is terminated.

Each release of IronPdf for Node.js mandates a corresponding specific version of IronPdfEngine. Compatibility across different versions is not supported.

### Setting up IronPdf for Node.js with Local IronPdfEngine

#### Option 1: Runtime Download of IronPdfEngine

Following the installation of IronPdf in your Node.js project, it automatically identifies your operating system (e.g., Windows x64) during the initial launch and downloads the appropriate IronPdfEngine binaries.

```shell
npm install @ironsoftware/ironpdf
```

##### Advantages

- Minimizes the size of your application package.
- Supports deployment across various platforms.

##### Disadvantages

- Requires internet access during initial setup.
- Slower startup times.

#### Option 2 (recommended): Installing IronPdfEngine as a Dependency

You can also integrate IronPdfEngine into your Node.js project by adding it as a dependency. This approach packages IronPdfEngine into a .zip file, which is then automatically extracted and deployed.

Installation of matching versions for `ironpdf` and its respective `ironpdf-engine-xxx-xxx` dependencies is necessary, but the version mentioned doesn`t correspond to the internal version of IronPdfEngine.

##### Installation Commands for Different Platforms

- **Windows x64**
  ```shell
  npm install @ironsoftware/ironpdf-engine-windows-x64
  ```

- **Windows x86**
  ```shell
  npm install @ironsoftware/ironpdf-engine-windows-x86
  ```

- **Linux x64**
  ```shell
  npm install @ironsoftware/ironpdf-engine-linux-x64
  ```

- **macOS x64**
  ```shell
  npm install @ironsoftware/ironpdf-engine-macos-x64
  ```

- **macOS ARM**
  ```shell
  npm install @ironsoftware/ironpdf-engine-macos-arm64
  ```

It is not practical to install all dependencies due to their large sizes.

##### Advantages

- Reduced startup time.
- No internet requirement after installation.

##### Disadvantages

- Increases the overall size of your application package.
- Requires specification of target platforms.

## Utilizing IronPdf for Node.js with Remote IronPdfEngine

For remote utilization, a matching version of IronPdfEngine is necessary. For instance, IronPdf for Node.js version 2024.2.2 should be paired with IronPdfEngine version 2024.2.2, not 2024.2.1. You can verify the required version using:

```js
const ironPdfEngineVersion = IronPdfGlobalConfig.ironPdfEngineVersion;
```

### Connection Setup

Assume IronPdfEngine is hosted remotely at `123.456.7.8:33350`.

Refer to the guide [How to Pull and Run IronPdfEngine](https://ironpdf.com/how-to/pull-run-ironpdfengine/) for details on setting up a remote IronPdfEngine instance.

Simply configure IronPdf by specifying the IronPdfEngine location early in your application or just before invoking any IronPdf method:

```js
IronPdfGlobalConfig.setConfig({
    ironPdfEngineDockerAddress: "123.456.7.8:33350"
});
```

This configuration links your application to the remote IronPdfEngine, allowing for uninterrupted operations without the need to install IronPdfEngine as a dependency locally. You can disregard the section titled "[Option 2 (recommended) install IronPdfEngine as a dependency](#anchor-option-2-recommended-install-ironpdfengine-as-a-dependency)."