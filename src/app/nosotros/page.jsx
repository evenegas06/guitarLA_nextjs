import Image from "next/image";

import styles from "@/css/about.module.css";
import guitar_image from "@public/imgs/nosotros.jpg";

/**
 * Meta tags.
 */
export const metadata = {
    title: 'GuitarLA - Nosotros',
    description: 'Sobre nosotros, tienda de música online.',
};

const About = () => {
    return (
        <main className="container">
            <h2 className="heading">
                Nosotros
            </h2>

            <section className={styles.content}>
                <Image src={guitar_image} width={1000} height={800} alt="Imagen sobre nosotros." />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum praesentium, voluptatum cupiditate voluptatem non alias possimus illum, ipsam molestias fugiat laborum repellat autem tempora veritatis corporis! Cumque, consequuntur veniam vitae amet delectus labore exercitationem esse pariatur a eius itaque odio ab inventore quae necessitatibus saepe dicta explicabo, ut accusantium ea.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid repellendus dicta magni quidem corrupti blanditiis voluptate! Labore consequuntur excepturi ad culpa doloremque eius, quibusdam, animi, qui corrupti laudantium similique itaque voluptatem nam aut quaerat pariatur maiores inventore? Magni, alias!
                    </p>
                </div>
            </section>
        </main>
    );
};
export default About;