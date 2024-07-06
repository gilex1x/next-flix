import type { AppProps } from 'next/app';
import { StoreProvider } from '@/app/redux/StoreProvider';
import '../../styles/global.css';
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    )
};