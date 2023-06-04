import React from 'react';
import s from './Learn.module.scss'

const Learn = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <img src="/ico2.png" alt="tag" />
                    <h1>Программа обучения</h1>
                    <p>Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер</p>
                    <div className={s.content}>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learn;