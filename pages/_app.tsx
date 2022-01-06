import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Shop</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
