import "../styles/app.css";
import "../styles/globals.scss";
import "../public/fonts/fontello/css/fontello.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
