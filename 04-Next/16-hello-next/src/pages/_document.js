/**
 * 웹 페이지의 전체 레이아웃을 구성하는 파일
 * <html><head></head><body></body></html>
 */
import { Html, Head, Main, NextScript } from "next/document";

/**
 * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자임에 주의
 * <Html>, <Head>는 next.js의 컴포넌트. <html>, <head>와 다름에 주의
 * 이 안에서 charset과 viewport 지정은 자동으로 이루어진다.
 * 그 외에 개발자가 적용하고자 하는 외부 CSS나 JS리소스 참조, SEO 구현등을 <Head> 컴포넌트 안에서 처리할 수 있다.
 * 단, 모든 페이지에 동일하게 적용되므로 SEO 구현은 추천 안함
 */

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        {/* 외부사이트의 리소스 참조는 _document.js에서 하면 된다 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
