import s from './Status.module.scss'
import { motion } from 'framer-motion'

const Status = () => {
  const variants = {
    init: {scale: 0},
    inView: {scale: 1, transition: {duration: 0.8}},
    hover: {scale: 1.1}
  }
  return (  
    <>
      <section className={s.container}>
        <div className={s.content}>
          <div className={s.left_block}>
            <motion.button 
              className={s.btn}
              variants={variants}
              initial='init'
              whileInView='inView'
              whileHover='hover'
            >
              Заказать курс
            </motion.button>
            <div className={s.status_data}>
              <div>
                <motion.p 
                  className={s.text}
                  variants={variants}
                  initial='init'
                  whileInView='inView'
                >
                  Учеников всего:
                </motion.p>
                <motion.p 
                  className={s.text}
                  variants={variants}
                  initial='init'
                  whileInView='inView'
                >
                  Успешно закончили курс:
                </motion.p>
              </div>
              <div>
                <motion.span 
                  className={s.number}
                  variants={variants}
                  initial='init'
                  whileInView='inView'
                >
                  200
                </motion.span>
                <motion.span 
                  className={s.number}
                  variants={variants}
                  initial='init'
                  whileInView='inView'
                >
                  190
                </motion.span>
              </div>
            </div>
          </div>
          <div className={s.rigth_block}>
            <div className={s.heading}>
              <motion.p 
                className={s.text}
                variants={variants}
                initial='init'
                whileInView='inView'
              >
                Заработано учениками:
              </motion.p>
              <motion.span 
                className={s.number} 
                variants={variants}
                initial='init'
                whileInView='inView'
              >
                400 000₽
              </motion.span>
            </div>
            <motion.div 
              className={s.range}
              variants={variants}
              initial='init'
              whileInView='inView'
            >
              <span className={s.range_num}></span>
            </motion.div>
            <div className={s.range_inteval}>
              <motion.p 
                className={s.text}
                variants={variants}
                initial='init'
                whileInView='inView'
              >
                0
              </motion.p>
              <motion.p 
                className={s.text}
                variants={variants}
                initial='init'
                whileInView='inView'
              >
                1 000 000₽
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
   );
}

export default Status;