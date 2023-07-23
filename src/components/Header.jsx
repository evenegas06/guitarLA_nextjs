'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/css/header.module.css";
import logo from '../../public/imgs/logo.svg';



const Header = () => {
    /* ----- Hooks ----- */
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navbar}`}>
                <Link href="/">
                    <Image src={logo} width={300} height={40} alt="Logotipo - GuitarLA" />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/"
                        className={pathname === '/' ? styles.active : ''}
                    >
                        Inicio
                    </Link>

                    <Link href="/nosotros"
                        className={pathname === '/nosotros' ? styles.active : ''}
                    >
                        Nosotros
                    </Link>

                    <Link href="/blog"
                        className={pathname === '/blog' ? styles.active : ''}
                    >
                        Blog
                    </Link>

                    <Link href="/tienda"
                        className={pathname === '/tienda' ? styles.active : ''}
                    >
                        Tienda
                    </Link>
                </nav>
            </div>
        </header>
    );
};
export default Header;