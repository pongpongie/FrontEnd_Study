import "@/styles/globals.css";
import React, { memo } from "react";

import Meta from "@/components/Meta";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = memo(({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
});

export default App;
