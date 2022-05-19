import '~/styles/bootstrap/tailwind.scss';
import '~/styles/bootstrap/globals.scss';
import '~/styles/app.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default MyApp;
