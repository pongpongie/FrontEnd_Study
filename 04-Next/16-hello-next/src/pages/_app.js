/**
 * <body> 태그 영역 안에서 모든 페이지에 공통으로 적용될 레이아웃을 구성하는 파일
 * props로 Component와 pageProps를 받아서 렌더링한다.
 */
import Meta from "@/components/Meta";
import GlobalStyle from "@/components/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
};

export default App;
