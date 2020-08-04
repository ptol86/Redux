import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import { weatherDataSelector } from "./weather.selectors"
import { getWeatherData, weatherDataRecived } from "./weather.actions"
import PropTypes from "prop-types";

class Weather extends React.Component {

    componentDidMount = () => {
        this.props.getWeatherData()
    };
    
    render() {
        if (!this.props.weatherData) {
            return null
        };
        console.log(this.props)
        return (
            <main className="weather">
                <h1 className="weather__title">Weather data</h1>
                <ul className="cities-list">
                    {this.props.weatherData.map(el => {
                        return (<li key={el.id} className="city">
                            <span className="city__name">{el.name}</span>
                            <span className="city__temperature">{el.temperature}</span>
                        </li>)
                    })}
                </ul>
            </main>
    )}
}

const mapState = state => {
    return {
        weatherData: weatherDataSelector(state),
    }
}

const mapDispatch = {
    
    getWeatherData: getWeatherData,
}
Weather.propTypes = {
    weatherData: PropTypes.array,
    getWeatherData: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(Weather);