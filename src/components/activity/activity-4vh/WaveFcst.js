//response.data.records.location [0]貢寮gongliao [1]萬里wanli  [2]瑞芳 [3]中山
//console.log(response.data.records.location[3].validTime); //32->一個月32天->抓七天
//console.log(response.data.records.location[3].validTime[0].endTime); //開始和結束的日期2021-07-15
// console.log(
//   response.data.records.location[3].validTime[0].weatherElement[0].time
// ); //[1][2][3][4]->一天4次
// console.log(
//   response.data.records.location[3].validTime[0].weatherElement[0].time[1]
//     .parameter[3].parameterValue
// ); //133cm

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
const axios = require("axios");

function WaveFcst(props) {
  const [currentWave, setCurrentWave] = useState([
    50, 100, 30, 100, 50, 100, 50,
  ]);
  const [currentLabel, setCurrentLabel] = useState([
    "2021-07-15",
    "2021-07-15",
    "2021-07-15",
    "2021-07-15",
    "2021-07-15",
    "2021-07-15",
  ]);
  const config = {
    type: "line",
    data: {
      labels: currentLabel,
      datasets: [
        {
          label: `${props.locationName}潮高-相對海圖(cm)`,
          borderColor: "RGB(11, 174, 255)",
          borderWidth: 4,
          data: currentWave,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            borderColor: "yellow",
            borderWidth: 3,
          },
          ticks: {
            color: "#fff579",
          },
        },
        y: {
          grid: {
            borderColor: "yellow",
            borderWidth: 3,
          },
          ticks: {
            color: "#fff579",
          },
        },
      },
    },
  };

  useEffect(() => {
    const GET = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-A0021-001?Authorization=CWB-8C45EDAC-AB0F-4F1C-9C5B-C1BE8D5360EA&limit=7&offset=0&format=JSON&locationName=%E5%9F%BA%E9%9A%86%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80,%E6%96%B0%E5%8C%97%E5%B8%82%E8%90%AC%E9%87%8C%E5%8D%80,%E6%96%B0%E5%8C%97%E5%B8%82%E8%B2%A2%E5%AF%AE%E5%8D%80,%E6%96%B0%E5%8C%97%E5%B8%82%E7%91%9E%E8%8A%B3%E5%8D%80&elementName=1%E6%97%A5%E6%BD%AE%E6%B1%90&sort=validTime",
          {
            transformRequest: (data, headers) => {
              delete headers.common["Authorization"];
            },
          }
        );
        console.log(props.locationName, "wavepage");
        let location = await response.data.records.location[3];
        switch (props.locationName) {
          case "新北瑞芳區":
            location = response.data.records.location[2];
            break;
          case "新北貢寮區":
            location = response.data.records.location[0];
            break;
          case "基隆中正區":
            location = response.data.records.location[3];
            break;
          case "新北萬里區":
            location = response.data.records.location[1];
            break;
        }
        console.log("潮浪", location);
        const labelArray = [];
        const valueArray = [];
        for (let i = 0; i < 7; i++) {
          for (let j = 0; j < 3; j++) {
            const labelData = await location.validTime[i].weatherElement[0]
              .time[j].dataTime;
            const valueData = await location.validTime[i].weatherElement[0]
              .time[j].parameter[3].parameterValue;
            valueArray.push(valueData);
            labelArray.push(labelData);
          }
        }
        setCurrentLabel(labelArray);
        setCurrentWave(valueArray);
      } catch (error) {
        console.log("GET Error!!", error);
      }
    };
    GET();
  }, [props]);

  return (
    <>
      <div style={{ margin: "0px", width: "95%" }}>
        <Line data={config.data} options={config.options} />
      </div>
    </>
  );
}
export default WaveFcst;
