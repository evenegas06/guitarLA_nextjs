import { Outfit } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import 'normalize.css';
import '@/css/globals.css';

/**
 * Google font configuration.
 */
const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700', '900']
});

/**
 * Meta tags.
 */
export const metadata = {
    title: 'GuitarLA 🎸',
    description: 'GuitarLA - Venta de guitarras y blog de música.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={outfit.className}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
