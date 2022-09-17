import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDoc extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="LoyalMV" />
          <meta name="keywords" content="LoyalMV" />
          <link
            rel="icon"
            type="image/png"
            href="assets/img/favicon.png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="assets/img/icon/192x192.png"
          />
          <link rel="stylesheet" href="assets/css/style.css" />
          <link rel="manifest" href="__manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script async src="assets/js/lib/bootstrap.bundle.min.js"></script>

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>

          <script async src="assets/js/plugins/splide/splide.min.js"></script>

          <script async src="assets/js/base.js"></script>
        </body>
      </Html>
    );
  }
}

export default CustomDoc;
