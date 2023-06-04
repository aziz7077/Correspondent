import React from 'react';
import s from './Start.module.scss'
import { start } from '@/constants/constants';
import { motion } from 'framer-motion'

const Start = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.start}>
                    <div className={s.title}>
                        <motion.div 
                            initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                            className={s.tag}
                        >
                            <img src="/ico.png" alt="" />
                            <h1>Быстрый старт</h1>
                        </motion.div>
                        <motion.p
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                        >
                            Больше 90% учеников прошли полный курс и смогли 
                            <br /> 
                            собрать свой первый компьютер
                        </motion.p>
                    </div>
                    <div className={s.content}>
                        {start.map((data) => (
                            <div id={data.id} className={s.blocks}>
                                <h1>{data.percentage}</h1>
                                <motion.img
                                    initial={{scale: 0}}
                                    whileInView={{scale: 1, transition: {duration: 2}}}
                                    src={data.img}
                                    alt="data"
                                />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Start;