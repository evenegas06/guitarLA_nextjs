import Image from "next/image";
import Link from "next/link";

import styles from "@/css/header.module.css";
import logo from '../../public/imgs/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navbar}`}>
                <Image src={logo} alt="Logotipo - GuitarLA" />

                <nav className={styles.nav}>
                    <Link className={styles.test} href="/">
                        Inicio
                    </Link>

                    <Link href="/nosotros">
                        Nosotros
                    </Link>

                    <Link href="/blog">
                        Blog
                    </Link>

                    <Link href="/tienda">
                        Tienda
                    </Link>
                </nav>
            </div>
        </header>
    );
};
export default Header;