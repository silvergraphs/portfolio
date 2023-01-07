import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/400.css";
import { ChakraProvider, Fade } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Footer from "../components/Organisms/Footer";
import NavBar from "../components/Organisms/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Portfolio - Bruno Caruso</title>
      </Head>
      <NavBar />
      <Fade
        key={router.route}
        in={true}
        transition={{ enter: { duration: 0.35 }, exit: { duration: 0.35 } }}
      >
        <Component {...pageProps} />
      </Fade>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
