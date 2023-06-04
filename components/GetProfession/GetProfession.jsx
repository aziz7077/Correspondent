import React, { useState } from 'react';
import s from './GetProfession.module.scss'
import icon1 from '../../public/icon-1.png'
import icon2 from '../../public/icon-2.png'
import icon3 from '../../public/icon-3.png'
import Image from 'next/image';
import { motion } from 'framer-motion';


const cards = [{
    id: 1,
    img: icon1,
    name: 'Только практические навыки в работе',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',
},
{
    id: 2,
    img: icon2,

    name: 'Только практические навыки в работе',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',
},
{
    id: 3,
    img: icon3,

    name: 'Только практические навыки в работе',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',
}

]

const GetProfession = () => {

    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <motion.h1
                        initial="hidden"
                        transition={{ duration: 0.7 }}
                        whileInView="visible"
                        variants={{
                          hidden: { scale: 0 },
                          visible: { scale: 1 },
                        }}
                    >Получите профессию прямо сейчас</motion.h1>
                    <div className={s.cards}>
                        {cards.map((item) => (
                            <motion.div
                            initial="hidden"
                            transition={{ duration: 0.7 }}
                            whileInView="visible"
                            variants={{
                              hidden: { scale: 0 },
                              visible: { scale: 1 },
                            }}
                            className={s.card}>
                                <Image src={item.img} alt="icon" />
                                <h2>{item.name}</h2>
                                <p>{item.title}</p>
                            </motion.div>

                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default GetProfession;