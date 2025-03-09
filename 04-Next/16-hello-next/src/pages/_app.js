// body 태그에서 모든 페이지에 공통으로 적용될 레이아웃을 구성하는 파일
// props로 Compoentnt와 pageProps를 받아서 Component를 렌더링

import Meta from "@/components/Meta";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <GlobalStyles />
      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
};
