# Utilizing IronPdfEngine

***Based on <https://ironpdf.com/get-started/use-ironpdfengine/>***


IronPdfEngine is an advanced gRPC server designed to manage various IronPDF operations including generating, modifying, and reading PDF documents.

## Begin with IronPDF

---

## Integration of IronPdf with Node.js and IronPdfEngine

To use IronPdf on Node.js, the IronPdfEngine is required. In Node.js, IronPdf acts as an API layer to the underlying IronPdfEngine gRPC. Thus, every function invoked in IronPdf for Node.js is actually executed in IronPdfEngine.

By default, IronPdf for Node.js launches IronPdfEngine as a subprocess, maintaining communication throughout the runtime of your application.

Important: Each IronPdf for Node.js version pairs with an exact version of IronPdfEngine. Using mismatched versions is not supported.

### Configuring IronPdf for Node.js with a Local IronPdfEngine Setup

#### Option 1: Download IronPdfEngine at Runtime

Upon initial installation of IronPdf in your JavaScript project, it will automatically recognize your platform (e.g., Windows x64) and fetch the appropriate IronPdfEngine binaries online.

```shell
npm install @ironsoftware/ironpdf
```

**Advantages:**
- Reduces size of the application package.
- Allows deployment across various platforms.

**Disadvantages:**
- Requires internet connectivity initially.
- May cause delays in startup.

#### Option 2 (recommended): Installation of IronPdfEngine as a Dependency

Installing IronPdfEngine dependencies is another approach supported by IronPdf for Node.js. These dependencies package IronPdfEngine inside a `.zip` file and handle its extraction and utilization seamlessly.

You can opt to install one or more IronPdfEngine dependencies.

Note: Matching version numbers between `ironpdf` and `ironpdf-engine-xxx-xxx` is crucial, where the latter version number corresponds to IronPdfEngine bundled within.

**Platform-Specific Installation:**

- **Windows x64:**
  ```shell
  npm install @ironsoftware/ironpdf-engine-windows-x64
  ```

- **Windows x86:**
  ```shell
  npm install @ironsoftware/ironpdf-engine-windows-x86
  ```

- **Linux x64:**
  ```shell
  npm install @ironsoftware/ironpdf-engine-linux-x64
  ```

- **macOS x64:**
  ```shell
  npm install @ironsoftware/ironpdf-engine-macos-x64
  ```

- **macOS arm:**
  ```shell
  npm install @ironsoftware/ironpdf-engine-macos-arm64
  ```

**Advantages:**
- Quicker startup time.
- No internet needed after installation.

**Disadvantages:**
- Results in a larger application package.
- Requires specifying target platforms.

## Employing IronPdf for Node.js with a Distant IronPdfEngine

For employing a distant IronPdfEngine, make sure to match the exact versions of IronPdfEngine and IronPdf for Node.js. For instance, if using IronPdf for Node.js version 2024.2.2, IronPdfEngine version 2024.2.2 is necessary; previous versions like 2024.2.1 would be incompatible.

```js
const ironPdfEngineVersion = IronPdfGlobalConfig.ironPdfEngineVersion;
```

### Connection Setup

Suppose you want to connect to IronPdfEngine operating remotely at `123.456.7.8:33350`.

See the document "How to Pull and Run IronPdfEngine" at [https://www.ironpdf.com/how-to/pull-run-ironpdfengine/].

Starting your connection is straightforward. Just specify the location of IronPdfEngine (ensuring it's accessible and not hindered by a firewall). This configuration is typically best placed at the start of your application, or right before invoking any IronPdf method.

```js
IronPdfGlobalConfig.setConfig({
    ironPdfEngineDockerAddress: "123.456.7.8:33350"
});
```

That’s all! Following this, your application will be connected to the remote IronPdfEngine.

For systems using a remote IronPdfEngine, there's no need to install IronPdfEngine directly as a dependency. You can bypass the section "[Option 2 (recommended) install IronPdfEngine as a dependency](#anchor-option-2-recommended-install-ironpdfengine-as-a-dependency)."