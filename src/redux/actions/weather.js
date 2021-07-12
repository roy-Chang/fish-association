import * as actionTypes from "../constant";
import axios from 'axios';
//action creators
//authorization key
const AUTHORIZATION_KEY = 'CWB-6AA35710-8A7E-41C7-A178-10CD559968FF';
//location
const LOCATION_NAME = '臺北';
//location city
const LOCATION_NAME_CITY = "臺北市";

export const initWeatherAction = (data) => ({
    type: actionTypes.INIT_WEATHER_ACTION,
    data
})

export const initWeatherInfoAction = (data) => ({
    type: actionTypes.INIT_WEATHER_INFO_ACTION,
    data
})

export const updateWeather = (data) => ({
    type: actionTypes.UPDATE_WEATHER,
    data
})

export const axiosUpdateWeather = () => {
    return(dispatch) => {
        axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&format=JSON&locationName=${LOCATION_NAME}`)
            .then((data) => {
                const locationData = data.data.records.location[0];
                const weatherElements = locationData.weatherElement.reduce((needEl, item) => {
                    if(['WDSD', 'TEMP'].includes(item.elementName)) {
                        needEl[item.elementName] = item.elementValue;
                    }
                    return needEl
                }, {}) 
                const action = updateWeather({
                    ...weatherElements,
                    isLoading: false
                });
                dispatch(action);
            })
    }
}


export const axiosWeather = () => {
    return(dispatch) => {
        axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&format=JSON&locationName=${LOCATION_NAME}`)
            .then((data) => {
                const locationData = data.data.records.location[0];
                const observationTime = data.data.records.location[0].time.obsTime;
                const weatherElements = locationData.weatherElement.reduce((needEl, item) => {
                    if(['WDSD', 'TEMP'].includes(item.elementName)) {
                        needEl[item.elementName] = item.elementValue;
                    }
                    return needEl
                }, {}) 
                const action = initWeatherAction({
                    ...weatherElements,
                    observationTime,
                    isLoading: false
                });
                dispatch(action);
            })
    }
}

export const axiosWeatherInfo = () => {
    return(dispatch) => {
        axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_CITY}`)
            .then((data) => {
                const locationData = data.data.records.location[0];
                console.log(locationData);
                const weatherElements = locationData.weatherElement.reduce((needEl, item) => {
                    if(['Wx', 'PoP', 'CI'].includes(item.elementName)) {
                        needEl[item.elementName] = item.time[0].parameter;
                    }
                    return needEl;
                }, {}) 
                const action = initWeatherInfoAction({
                    weatherElements,
                    isLoading: false
                });
                dispatch(action);
            })
    }
}

