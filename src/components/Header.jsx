import Image from "next/image";

import logo from '../../public/imgs/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Image src={logo} alt="Logotipo - GuitarLA" />

                <nav>
                    <Link href="/">
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