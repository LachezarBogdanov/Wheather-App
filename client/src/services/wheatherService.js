import { toast } from "react-toastify";

export const wheatherService = {
    async getInfo(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_API_KEY}`);

        if(!response.ok) {
            toast.error('Invalid city name!')
        }

        const data = await response.json();

        return data;
            
    }
}