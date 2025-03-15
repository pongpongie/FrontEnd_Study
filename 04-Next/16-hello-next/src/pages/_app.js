/**
 * <body> 태그 영역 안에서 모든 페이지에 공통으로 적용될 레이아웃을 구성하는 파일
 * props로 Component와 pageProps를 받아서 렌더링한다.
 */
import Meta from "@/components/Meta";
import GlobalStyle from "@/components/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import wrapper from "@/slices/_store";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Meta />
      <GlobalStyle />

      <Header />

      <Component {...pageProps} />

      <Footer />
    </Provider>
  );
};

export default App;
