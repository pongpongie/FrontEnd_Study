import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

// Document 클래스를 상속받는 커스텀 Document 클래스를 선언하여 export

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // styled-components 서버사이드 렌더링을 위한 코드
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // styled-components와 함께 사용하기 위한 코드
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // Document의 getInitialProps를 호출하여 초기 props를 받아옴
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      // styled-components와 함께 사용하기 위한 코드
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
