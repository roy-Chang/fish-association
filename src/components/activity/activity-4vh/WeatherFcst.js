import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import WeatherIcon from "./WeatherIcon.js";
import Humidity from "../../../assets/img/weather-svg/humidity.svg";

const IconAm = styled.div``;
// position: absolute;
//   top: 0;
//   left: 0;
const IconPm = styled.div``;
// position: absolute;
// bottom: 0;
// right: 0;
const YellowSlashline = styled.div`
  border-right: #fff579 solid 3px;
  height: 80px;
  padding: 0px;
  transform: rotate(43deg);
  @media (max-width: 576px) {
    height: 50px;
  }
`;
const YellowLine = styled.div`
  height: 60px;
  margin-left: 50px;
  padding: 28px;
  border-left: #fff579 solid 5px;
  @media (max-width: 576px) {
    padding: 20px;
    margin-left: 30px;
  }
`;
const Weekdate = styled.p``;
const RainRate = styled.p``;
const Temperature = styled.div``;
const HighTemperature = styled.p``;
const LowTemperature = styled.p``;
function WeatherFcst(props) {
  //console.log("props.locationName", props.locationName);
  const [currentWeather, setWeather] = useState({
    locationName: "基隆中正區",
    weekdate: ["2021-07-09"],
    highTemperature: [32],
    lowTemperature: [10],
    rainRate: ["30%"],
    phenomenonAM: ["多雲時晴"],
    phenomenonPM: ["多雲時晴"],
    today: new Date(),
  });
  //讀取天氣api
  const fetchData = async () => {
    const url =
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-8C45EDAC-AB0F-4F1C-9C5B-C1BE8D5360EA&locationId=F-D0047-071,F-D0047-051";
    try {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          //console.log(myJson);
          //若當下拉式選單有變更時變更地區資料時，所取用的資料地點也不同
          let queryLocation = "";
          if (props.locationName == currentWeather.locationName) {
            queryLocation = myJson.records.locations[1].location[1];
          } else {
            if (props.locationName == "新北瑞芳區") {
              queryLocation = myJson.records.locations[0].location[0];
            }
            if (props.locationName == "新北萬里區") {
              queryLocation = myJson.records.locations[0].location[7];
            }
            if (props.locationName == "新北貢寮區") {
              queryLocation = myJson.records.locations[0].location[10];
            }
            if (props.locationName == "基隆中正區") {
              queryLocation = myJson.records.locations[1].location[5];
            }
          }
          //console.log("queryLocation", queryLocation);
          let maxArray = [];
          let minArray = [];
          let popArray = [];
          let wxArray = [];
          let timeArray = [];
          //一天兩次資料，並分別找出最高溫、最低溫、濕度和體感敘述，將相對應的資料塞入陣列
          for (let i = 0; i < 14; i++) {
            let MaxAT = queryLocation.weatherElement.find(
              (el) => el.elementName === "MaxAT"
            ).time[i].elementValue[0].value;
            let MinT = queryLocation.weatherElement.find(
              (el) => el.elementName === "MinT"
            ).time[i].elementValue[0].value;
            let PoP12h = queryLocation.weatherElement.find(
              (el) => el.elementName === "PoP12h"
            ).time[i].elementValue[0].value;
            let Wx = queryLocation.weatherElement.find(
              (el) => el.elementName === "Wx"
            ).time[i].elementValue[1].value;
            let time = queryLocation.weatherElement.find(
              (el) => el.elementName === "MaxAT"
            ).time[i].startTime;
            if (PoP12h != " ") {
              popArray.push(PoP12h);
            } else {
              popArray.push(0);
            }

            wxArray.push(Wx);
            maxArray.push(MaxAT);
            minArray.push(MinT);
            timeArray.push(time);
          }
          //weekAM:[0,2,4,6,8,10,12],
          //weekPM:[1,3,5,7,9,11,13],
          //因為若登入網站時間是上午，則當天會有兩筆資料，若登入網站時間是下午，則當天只有一筆資料
          //所以需要去判斷現在時間
          const wxArrayAM = [];
          const wxArrayPM = [];
          if (
            currentWeather.today.getHours() >= 6 &&
            currentWeather.today.getHours() < 18
          ) {
            wxArray.map((item, index) => {
              return index % 2 == 0
                ? wxArrayAM.push(item)
                : wxArrayPM.push(item);
            });
            timeArray = timeArray.filter((item, index) => {
              return index % 2 === 0;
            });
            maxArray = maxArray.filter((item, index) => {
              return index % 2 === 0;
            });
            minArray = minArray.filter((item, index) => {
              return index % 2 === 0;
            });
            popArray = popArray.filter((item, index) => {
              return index % 2 === 0;
            });
          } else {
            wxArray.map((item, index) => {
              return index % 2 == 0
                ? wxArrayAM.push(item)
                : wxArrayPM.push(item);
            });
            timeArray = timeArray.filter((item, index) => {
              return index % 2 === 1;
            });
            maxArray = maxArray.filter((item, index) => {
              return index % 2 === 1;
            });
            minArray = minArray.filter((item, index) => {
              return index % 2 === 1;
            });
            popArray = popArray.filter((item, index) => {
              return index % 2 === 1;
            });
          }
          //將資料設定回state當中
          setWeather((prevState) => {
            //console.log(timeArray, wxArray, wxArrayAM, wxArrayPM);
            return {
              ...prevState,
              locationName: queryLocation.locationName,
              highTemperature: [...maxArray],
              lowTemperature: [...minArray],
              rainRate: [...popArray],
              phenomenonAM: [...wxArrayAM],
              phenomenonPM: [...wxArrayPM],
              weekdate: [...timeArray].map((item) => {
                return item.slice(5, 10).replace("-", "/");
              }),
            };
          });
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [props]);
  return (
    <>
      <ul className="text-justify p-2">
        <li className="d-flex justify-content-around">
          {currentWeather.weekdate.map((item, index) => {
            return <Weekdate key={index}>{item}</Weekdate>;
          })}
        </li>
        <li className="d-flex justify-content-around" style={{ padding: "0" }}>
          {currentWeather.phenomenonAM.map((item, index) => {
            return (
              <WeatherIcon key={index} currentWeatherCode={item} moment="day" />
            );
          })}
        </li>
        <li className="d-flex justify-content-around" style={{ padding: "0" }}>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
          <YellowSlashline></YellowSlashline>
        </li>
        <li className="d-flex justify-content-around" style={{ padding: "0" }}>
          {currentWeather.phenomenonPM.map((item, index) => {
            return (
              <WeatherIcon
                key={index}
                currentWeatherCode={item}
                moment="night"
              />
            );
          })}
        </li>
        <li className="d-flex justify-content-around mt-2 mb-2">
          {currentWeather.rainRate.map((item, i) => (
            <RainRate key={i}>
              <img src={Humidity} style={{ width: "10px" }} />
              {item}%
            </RainRate>
          ))}
        </li>
        <div className="temperature">
          <li className="d-flex justify-content-around">
            {currentWeather.highTemperature.map((item, i) => {
              return <HighTemperature key={i}>{item}℃</HighTemperature>;
            })}
          </li>
          <li className="d-flex justify-content-between">
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
            <YellowLine></YellowLine>
          </li>
          <li className="d-flex justify-content-around mt-3">
            {currentWeather.lowTemperature.map((item, i) => {
              return <LowTemperature key={i}>{item}℃</LowTemperature>;
            })}
          </li>
        </div>
      </ul>
    </>
  );
}
export default WeatherFcst;
