import { Html, Head, Main, NextScript } from "next/document";

// 화면 렌더링 함수 -> Html, Head, Main - 첫 글자가 대문자임에 주의
// Html, Head는 next.js의 내장 컴포넌트
// 이 안에서 charset, viewport 지정은 자동으로 이루어짐
// 그 외에 개발자가 적용하고자 하는 외부 CSS나 Js 리소스 참조, SEo 구현 등을 Head 컴포넌트 안에 작성
// 단, 모든 페이지에 동일하게 적용되므로 SEO 구현은 추천하지 않음

// node.js 버전 20.0.0 이상에서는 export default function Document() {} 형태로 작성
// 이전 버전에서는 module.exports = function Document() {} 형태로 작성

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
