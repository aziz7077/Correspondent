import React from 'react';
import s from './About.module.scss'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <motion.div
                    initial="hidden"
                    transition={{ duration: 0.7 }}
                    whileInView="visible"
                    variants={{
                        hidden: { scale: 0 },
                        visible: { scale: 1 },
                    }}
                    className={s.images}>
                    <img src="./about__img.png" alt="about__img" />
                </motion.div>
                <div className={s.title}>
                    <motion.h1

                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}

                    >Чем мы занимаемся?</motion.h1>
                    <motion.p

                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}

                    >Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Eget neque,
                        dignissim et feugiat elit augue in suspendisse egestas.
                        Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi.
                        Et neque, adipiscing sapien sem senectus praesent aenean consequat.
                        Aenean facilisi turpis aliquet fringilla.
                        Nunc sem felis sed interdum feugiat mattis elit, sollicitudin.
                        Quam pharetra rhoncus risus, cursus id elementum aliquet.
                        Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </motion.p>
                </div>
            </div>
        </div>
    );
};

export default About;