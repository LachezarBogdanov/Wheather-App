import styles from './Wheather.module.css'

export default function Wheather() {
    return (
        <>
            <div className={styles['wheather']}>
                <div className={styles['search-bar']}>
                    <input type="text" placeholder='Search'/>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
}
