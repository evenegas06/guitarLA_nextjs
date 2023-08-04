import Link from "next/link";
import styles from "@/css/footer.module.css";

const footer_links = [
    { name: 'Inicio',   href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Blog',     href: '/blog' },
    { name: 'Tienda',   href: '/tienda' },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <nav className={styles.nav}>
                    {footer_links.map((item) => {
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <p className={styles.copyright}>
                    Todos los derechos reservados {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
export default Footer;