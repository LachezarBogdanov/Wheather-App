import { useRef, useState } from 'react';
import styles from './Wheather.module.css'
import { wheatherService } from '../../services/WheatherService';
import { toast } from 'react-toastify';

export default function Wheather() {
    const inputRef = useRef();
    const [wheatherData, setWheatherData] = useState({});

    const handleSearch = async () => {
        const cityName = inputRef.current.value;

        if(!cityName) {
            toast.error('Please enter city name!');
            return;
        }

        const result = await wheatherService.getInfo(cityName);
        
        const iconId = result.weather[0].icon;
        const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
        
        setWheatherData({
            temperature: Math.floor(result.main.temp),
            cityName: cityName,
            humidity: result.main.humidity,
            windSpeed: result.wind.speed,
            icon,
            weatherType: result.weather[0].main,
            feelsLike: Math.floor(result.main.feels_like),
        });

        inputRef.current.value = '';
        
    }
  
    return (
        <>
            <div className={styles['wheather']}>
                <div className={styles['search-bar']}>
                    <input type="text" placeholder='Search' ref={inputRef}/>
                    <img src="/Search-icon.png" alt=""  className={styles['search-icon']} onClick={handleSearch}/>
                </div>
                <img src={wheatherData.icon || '/clear.png'} className={styles['weather-icon']} />
                    <div className={styles['other']}>
                        <p className={styles['weatherType']}>Weather {wheatherData.weatherType || 'clear'}</p>
                        <p className={styles['feelsLike']}>Feels like {wheatherData.feelsLike || 0} °C</p>
                    </div>
                <p className={styles['temperature']}>{wheatherData.temperature || 0}°C</p>
                <p className={styles['location']}>{wheatherData.cityName || 'No city founded'}</p>
                <div className={styles['wheather-data']}>
                    <div className={styles['col']}>
                        <img src="/humidity.png" alt="" className={styles['col-png']} />
                        <div>
                            <p>{wheatherData.humidity || 0} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <img src="/wind.png" alt="" className={styles['col-png']} />
                        <div>
                            <p>{wheatherData.windSpeed || 0} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
