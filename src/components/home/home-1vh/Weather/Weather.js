import React, { PureComponent } from "react";
import { Container, WeatherCard, Location, Description, CurrentWeather, Temperature, Celsius, AirFlow, Rain, Refresh, IconWrapper } from './weather-styled';

//component svg
import { ReactComponent as DayCloudyIcon } from '../../../../assets/img/weather-svg/day-cloudy.svg';
import { ReactComponent as DayThunderstorm } from '../../../../assets/img/weather-svg/day-thunderstorm.svg';
import { ReactComponent as DayClear } from '../../../../assets/img/weather-svg/day-clear.svg';
import { ReactComponent as DayCloudyFog } from '../../../../assets/img/weather-svg/day-cloudy-fog.svg';
import { ReactComponent as DayFog } from '../../../../assets/img/weather-svg/day-fog.svg';
import { ReactComponent as DayPartiallyClearWithRain } from '../../../../assets/img/weather-svg/day-partially-clear-with-rain.svg';
import { ReactComponent as DaySnowing } from '../../../../assets/img/weather-svg/day-snowing.svg';
import { ReactComponent as NightThunderstorm } from '../../../../assets/img/weather-svg/night-thunderstorm.svg';
import { ReactComponent as NightClear } from '../../../../assets/img/weather-svg/night-clear.svg';
import { ReactComponent as NightCloudyFog } from '../../../../assets/img/weather-svg/night-cloudy-fog.svg';
import { ReactComponent as NightCloudy } from '../../../../assets/img/weather-svg/night-cloudy.svg';
import { ReactComponent as NightFog } from '../../../../assets/img/weather-svg/night-fog.svg';
import { ReactComponent as NightPartiallyClearWithRain } from '../../../../assets/img/weather-svg/night-partially-clear-with-rain.svg';
import { ReactComponent as NightSnowing } from '../../../../assets/img/weather-svg/night-snowing.svg';


import { ReactComponent as AirFlowIcon } from '../../../../assets/img/weather-svg/airFlow.svg';
import { ReactComponent as RainIcon } from '../../../../assets/img/weather-svg/rain.svg';
import { ReactComponent as RefreshIcon } from '../../../../assets/img/weather-svg/refresh.svg';
import { ReactComponent as LoadingIcon } from '../../../../assets/img/weather-svg/loading.svg';


import { connect } from 'react-redux'
//action creator
import { axiosWeather, updateWeather, axiosWeatherInfo } from '../../../../redux/actions/weather';
//dayjs
import dayjs from 'dayjs'




const theme = {
    light: {
        backgroundColor: '#1D3557',
        opacity: '82%'
    },
    dark: {
        background: '#474747',
        opacity: '100%'
    }
}

//處理天氣代碼對應的天氣型態,共42筆
const weatherTypes = {
    isClear: [1],
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
    isSnowing: [23, 37, 42]
};
//對應圖示
const weatherIcons = {
    day: {
        isClear: <DayClear />,
        isThunderstorm: <DayThunderstorm />,
        isCloudyFog: <DayCloudyFog />,
        isCloudy: <DayCloudyIcon />,
        isFog: <DayFog />,
        isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
        isSnowing: <DaySnowing />
    },
    night: {
        isClear: <NightClear />,
        isThunderstorm: <NightThunderstorm />,
        isCloudyFog: <NightCloudyFog />,
        isCloudy: <NightCloudy />,
        isFog: <NightFog />,
        isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
        isSnowing: <NightSnowing />
    }
}




class Weather extends PureComponent {

    componentDidMount() {
        this.props.handleAxios()
        this.props.handleAxiosWeatherInfo()
    
    }

    render() {
        const { 
            locationName, 
            description, 
            temperature, 
            windSpeed, 
            rainPassibility, 
            observationTime, 
            handleClick, 
            isLoading, 
            comfortability, 
            weatherCode, 
            weatherIcon, 
            weatherCode2Type 
        } = this.props;
        return (
                <Container>
                    {console.log(dayjs(observationTime).format("HH")*1)}
                    <WeatherCard>
                        <Location>
                        {locationName}
                        <hr />
                        </Location>
                        <Description>{description}{' '}{comfortability}</Description>
                        <CurrentWeather>
                            <Temperature>
                                {Math.round(temperature)}
                            </Temperature>
                            <Celsius>°C</Celsius>
                            {
                            weatherIcon(weatherCode2Type(weatherCode), dayjs(observationTime).format("HH")*1 >= 4 && dayjs(observationTime).format("HH")*1 <= 18 ? 'day': 'night')
                            }
                        </CurrentWeather>
                        <AirFlow> 
                            <AirFlowIcon/> {windSpeed} m/h 
                        </AirFlow>
                        <IconWrapper>
                            <Rain> 
                                <RainIcon />{rainPassibility}% 
                            </Rain>
                            <Refresh onClick={() => handleClick(isLoading)} isLoading={isLoading}> 
                            最後觀測時間:
                                {
                                    new Intl.DateTimeFormat('zh-TW', {
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    }).format(dayjs(observationTime))
                                }
                                {isLoading ? <LoadingIcon/> : <RefreshIcon/>} 
                            </Refresh>
                        </IconWrapper>
                    </WeatherCard>
                </Container> 
            
            
        );
    }

    
}

const mapStateToProps = (state) => {
    return {
        locationName: state.weather.locationName,
        description: state.weather.description,
        comfortability: state.weather.comfortability,
        windSpeed: state.weather.windSpeed,
        temperature: state.weather.temperature,
        rainPassibility: state.weather.rainPassibility,
        weatherCode: state.weather.weatherCode,
        observationTime: state.weather.observationTime,
        isLoading: state.weather.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAxios() {
            const action = axiosWeather();
            dispatch(action);
        },
        handleAxiosWeatherInfo() {
            const action = axiosWeatherInfo();
            dispatch(action)
        },
        handleClick(state) {
            const action = updateWeather();
            dispatch(action)
            if(state === false) {
                const action = axiosWeather();
                dispatch(action);
            }
        },
        //weather relative fn
        weatherCode2Type(weatherCode) {
            const [weatherType] = Object.entries(weatherTypes).find(([weatherType, weatherCodes]) => weatherCodes.includes(Number(weatherCode))) || [];
            return weatherType;
        },
        weatherIcon(type, moment) {
            const weatherType = type;
            const weatherIcon = weatherIcons[moment][weatherType];
            return (weatherIcon);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);