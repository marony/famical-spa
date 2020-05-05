import { AppProps } from 'next/app';
import '../public/reset.scss';
import '../public/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
