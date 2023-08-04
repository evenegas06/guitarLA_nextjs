'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/css/header.module.css";
import logo from '@public/imgs/logo.svg';

/**
 * Nav links on header.
 */
const nav_links = [
    { name: 'Inicio',   href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Blog',     href: '/blog' },
    { name: 'Tienda',   href: '/tienda' },
];

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
                    {nav_links.map((item) => {
                        const is_active = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={is_active ? styles.active : ''}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};
export default Header;