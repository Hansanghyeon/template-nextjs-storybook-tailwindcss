import '../styles/app.css';
import '../styles/globals.scss';
import '../public/fonts/fontello/css/fontello.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default MyApp;
