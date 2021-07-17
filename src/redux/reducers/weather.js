import * as actionTypes from "../constant";
const defaultState = {
    locationName: '臺北市',
    description: '多雲時晴',
    windSpeed: 1.1,
    temperature: 22,
    rainPassibility: 48,
    observationTime: '2021-12-12 22:10:00',
    weatherCode: 1,
    comfortability: '舒服',
    isLoading: true
}


//weather reducers
export default (state = defaultState, action) => {
    if(action.type === actionTypes.INIT_WEATHER_ACTION) {
        const newState = {
            ...state,
            temperature: action.data.TEMP,
            windSpeed: action.data.WDSD,
            observationTime: action.data.observationTime,
            isLoading: false,
        }       
        return newState;
    }
    if(action.type === actionTypes.UPDATE_WEATHER) {
        const newState = {
            ...state,
            isLoading: true
        }
        return newState;
    }
    if(action.type === actionTypes.INIT_WEATHER_INFO_ACTION) {
        const { 
            Wx: { parameterName: Wx }, 
            Wx: { parameterValue: WxCode }, 
            PoP: { parameterName: PoP },
            CI: { parameterName: CI } 
        } = action.data.weatherElements;
        const newState = {
            ...state,
            description: Wx,
            weatherCode: WxCode,
            rainPassibility: PoP,
            comfortability: CI
        }
        return newState;
    }
    return state;
}
