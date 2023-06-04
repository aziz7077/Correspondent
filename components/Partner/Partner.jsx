import React from 'react';
import s from './Partner.module.scss'
import Image from 'next/image';
import icon from '../../public/icon-Partner.png'
import card from '../../public/Partner.png'
import { motion } from 'framer-motion';

const Partner = () => {



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

                    className={s.name}>
                    <Image src={icon} alt="icon_partner" />
                    <h1>Партнеры - топовые бренды</h1>
                </motion.div>
                <div className={s.cards}>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1 },
                        }}
                        className={s.card}>
                        <Image src={card} alt="card" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Partner;