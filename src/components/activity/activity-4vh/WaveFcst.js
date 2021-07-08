// <div class="wave-forecast">
//   <canvas
//     style={{ margin: "auto", width: "1000px", height: "500px" }}
//     ref={this.chartRef}
//   ></canvas>
// </div>;
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
const config = {
  type: "line",
  data: {
    labels: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    datasets: [
      {
        label: "今日高度",
        backgroundColor: "#abdadc",
        borderColor: "RGB(11, 174, 255)",
        borderWidth: 3,
        data: [10, 30, 20, 40, 30, 10, 45],
      },
    ],
  },
  options: {
    responsive: true,
    font: {
      size: "24px",
      color: "white",
    },

    scales: {
      x: {
        grid: {
          borderColor: "yellow",
          borderWidth: 3,
        },
      },
      y: {
        grid: {
          borderColor: "yellow",
          borderWidth: 3,
        },
      },
    },
  },
};
class WaveFcst extends Component {
  render() {
    return (
      <>
        <div style={{ margin: "auto", width: "1000px" }}>
          <Line data={config.data} options={config.options} />
        </div>
      </>
    );
  }
}
export default WaveFcst;
