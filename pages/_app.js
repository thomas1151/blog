import '../styles/tailwind.css';
import { StrictMode } from 'react';

export default function MyApp({ Component, pageProps }) {
    return <StrictMode>
        <Component {...pageProps} />
    </StrictMode>;
}