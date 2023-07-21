import Link from "next/link";

/**
 * Meta tags.
 */
export const metadata = {
    title: 'GuitarLA - Nosotros',
    description: 'Sobre nosotros, tienda de música online.',
};

const About = () => {
    return (
        <>
            <Link href="/">
                ir a inicio
            </Link>
            <div>About</div>
        </>
    );
};
export default About;