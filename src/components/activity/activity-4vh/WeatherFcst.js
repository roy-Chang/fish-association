import React, { Component } from "react";
import styled from "@emotion/styled";
import Sunnyday from "../../../assets/img/Activity/WeatherFcst-svg/big-sun.svg";
import Rainyday from "../../../assets/img/Activity/WeatherFcst-svg/day-rain.svg";
import Humidity from "../../../assets/img/Activity/WeatherFcst-svg/humidity.svg";
const WeatherIcon = styled.div`
  position: relative;
  width: 150px;
  height: 180px;
  img {
    width: 80%;
  }
`;
const IconAm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const IconPm = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const YellowSlashline = styled.div`
  border-right: #fff579 solid 3px;
  height: 110px;
  position: absolute;
  top: 20%;
  left: 40%;
  transform: rotate(45deg);
`;
const YellowLine = styled.div`
  margin: 10px 0;
  height: 60px;
  width: 50%;
  border-right: #fff579 solid 8px;
`;
const Date = styled.div``;
const RainRate = styled.div``;
const Temperature = styled.div``;
const HighTemperature = styled.div``;
const LowTemperature = styled.div``;

class WeatherFcst extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <>
        {" "}
        <ul class="d-flex">
          <li>
            <div class="date">週一</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週二</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週三</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週四</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週五</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週六</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
          <li>
            <div class="date">週日</div>
            <WeatherIcon>
              <IconAm>
                <img src={Sunnyday} alt="" />
              </IconAm>
              <YellowSlashline></YellowSlashline>
              <IconPm>
                <img src={Rainyday} alt="" />
              </IconPm>
            </WeatherIcon>
            <div className="rain-rate">
              <img src={Humidity} alt="" />
              31%
            </div>
            <div className="temperature">
              <div className="high-temperature">31度</div>
              <YellowLine></YellowLine>
              <div className="low-temperature">31度</div>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
export default WeatherFcst;
