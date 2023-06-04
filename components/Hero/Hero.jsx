import React from 'react';
import s from './Hero.module.scss'
import { time } from '@/constants/constants';
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <div id="hero" className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <motion.h1
                            whileInView={{scale: 1, transition: {duration: 1} }}
                            initial={{scale: 0}} 
                        >
                            Первый курс <br />
                            по компьютерной сборке
                        </motion.h1>
                        <div className={s.time}>
                            {time.map((data) => (
                                <motion.div
                                    initial={{ y: -100, scale: 0.3}} 
                                    whileInView={{scale: 1, y: 0, transition: {duration: 1} }}
                                    whileHover={{scale: 1.1 }}
                                    id={data.id} 
                                    className={s.block}
                                >
                                    <h1>{data.day}</h1>
                                    <h2>{data.name}</h2>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;