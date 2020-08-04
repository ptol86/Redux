export const WEATHER_DATA_RECIVED = "WEATHER_DATA_RECIVED";

import fetchWeatherData from "./weather.gateway"

export const weatherDataRecived = (weatherData) => {
    return {
        type: WEATHER_DATA_RECIVED,
        payload: {
            weatherData,
        }
    }
}

export const getWeatherData = () => {
    return function(dispatch) {
        fetchWeatherData()
            .then(weatherData => {
                dispatch(weatherDataRecived(weatherData))
            })
    }
}

