import { Outfit } from 'next/font/google';

import 'normalize.css';
import './globals.css';

const outfit = Outfit({ // Google font
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700', '900']
});

export const metadata = {
    title: 'GuitarLA 🎸',
    description: 'GuitarLA - Venta de guitarras y blog de música. 🎸',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            {/* <head>
                <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            </head> */}
            <body className={outfit.className}>
                {children}
            </body>
        </html>
    );
}
