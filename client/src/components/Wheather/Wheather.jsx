import styles from './Wheather.module.css'

export default function Wheather() {
    return (
        <>
            <div className={styles['wheather']}>
                <div className={styles['search-bar']}>
                    <input type="text" placeholder='Search'/>
                    <img src="/Search-icon.png" alt=""  className={styles['search-icon']}/>
                </div>
                <img src="/clear.png" alt="something" className={styles['weather-icon']} />
                <p className={styles['temperature']}>16°c</p>
                <p className={styles['location']}>London</p>
                <div className={styles['wheather-data']}>
                    <div className={styles['col']}>
                        <img src="/humidity.png" alt="" className={styles['col-png']} />
                        <div>
                            <p>91 %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <img src="/wind.png" alt="" className={styles['col-png']} />
                        <div>
                            <p>3.6 Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
