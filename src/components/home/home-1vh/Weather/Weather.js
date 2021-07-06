import React, { PureComponent } from "react";
import { Container, WeatherCard, Location, Description, CurrentWeather, Temperature, Celsius, AirFlow, Rain, Refresh, IconWrapper } from './weather-styled';

//component svg
import { ReactComponent as DayCloudyIcon } from '../../../../assets/img/weather-svg/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from '../../../../assets/img/weather-svg/airFlow.svg';
import { ReactComponent as RainIcon } from '../../../../assets/img/weather-svg/rain.svg';
import { ReactComponent as RefreshIcon } from '../../../../assets/img/weather-svg/refresh.svg';

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
    render() {
        return (
            
                <Container>
                    <WeatherCard>
                        <Location>
                        台北市
                        <hr />
                        </Location>
                        <Description>多雲</Description>
                        <CurrentWeather>
                            <Temperature>
                                23
                            </Temperature>
                            <Celsius>°C</Celsius>
                            <DayCloudyIcon />
                        </CurrentWeather>
                        <AirFlow> 
                            <AirFlowIcon/> 23 m/h 
                        </AirFlow>
                        <IconWrapper>
                            <Rain> 
                                <RainIcon />48% 
                            </Rain>
                            <Refresh> 
                                最後觀測時間: 上午 12:03 <RefreshIcon />
                            </Refresh>
                        </IconWrapper>
                    </WeatherCard>
                </Container> 
            
            
        );
    }
}

export default Weather