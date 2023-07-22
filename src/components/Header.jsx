import Image from "next/image";

import logo from '../../public/imgs/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Image src={logo} alt="Logotipo - GuitarLA" />
            </div>
        </header>
    );
};
export default Header;