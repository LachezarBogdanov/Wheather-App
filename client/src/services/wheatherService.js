
export const wheatherService = {
    async getInfo(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}`);

        if(!response.ok) {
            throw new Error('Failed to fetch wheather data');
        }

        const data = await response.json();

        return data;
            
    }
}