import React, { FC } from 'react'
import { IData } from '../../interface/IData';

import styles from './card.module.scss';

const Card: FC<{ data: IData }> = ({ data, ...props }) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {data.name}
                </div>
                <div className={styles.country}>
                    {data.sys.country}
                </div>
            </div>
            <div className={styles.temp}>
                {Math.round(data.main.temp - 273)}
                <div className={styles.cels}>&#8451;</div>
            </div>
            <div className={styles.weather}>
                <div className={styles.icon}>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`} alt="img" />
                </div>
                <div className={styles.descr}>
                    {data.weather[0]?.description.charAt(0).toUpperCase() + data.weather[0]?.description.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default Card;