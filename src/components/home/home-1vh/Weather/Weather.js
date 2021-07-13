import React, { PureComponent } from "react";
import { Container, WeatherCard, Location, Description, CurrentWeather, Temperature, Celsius, AirFlow, Rain, Refresh, IconWrapper } from './weather-styled';

//component svg
import { ReactComponent as DayCloudyIcon } from '../../../../assets/img/weather-svg/day-cloudy.svg';
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


class Weather extends PureComponent {
    

    componentDidMount() {
        this.props.handleAxios()
        this.props.handleAxiosWeatherInfo()
    }


    render() {
        const { locationName, description, temperature, windSpeed, rainPassibility, observationTime, handleClick, isLoading, comfortability } = this.props;
        return (
            
                <Container>
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
                            <DayCloudyIcon />
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);