import React, { Component } from "react";
import WeatherFcst from "./WeatherFcst";
import { Wrapper, BgSea, WeatherInfo } from "./styled";
import WaveFcst from "./WaveFcst";
class Forthpage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="activity-bg-deepgreen">
          <Wrapper>
            <BgSea>
              <WeatherInfo className="activity-bg-blue">
                <h2>地方氣候</h2>
                <h3>未來一週天氣</h3>
                <WeatherFcst></WeatherFcst>
                <div class="wave-info">
                  <h3>潮浪預測</h3>
                  <WaveFcst />
                </div>
              </WeatherInfo>
            </BgSea>
          </Wrapper>
        </div>
        <div style={{ height: "600px" }}></div>
      </>
    );
  }
}

export default Forthpage;
