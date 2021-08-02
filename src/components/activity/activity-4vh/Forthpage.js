import React, { useState } from "react";
import WeatherFcst from "./WeatherFcst";
import { Wrapper, BgSea, WeatherInfo } from "./styled";
import WaveFcst from "./WaveFcst";
import PlaceSetting from "./PlaceSetting";
function Forthpage() {
  const [locationName, setLocationName] = useState("基隆中正區");
  return (
    <>
      <div class="activity-bg-deepgreen">
        <Wrapper>
          <BgSea>
            <WeatherInfo className="activity-bg-blue">
              <h2>地方氣候</h2>
              <h3>
                未來一週天氣
                <br />
                <span style={{ fontSize: "24px", color: "orange" }}>
                  {locationName}
                </span>
              </h3>
              <PlaceSetting setLocationName={setLocationName}></PlaceSetting>
              <WeatherFcst
                className="p-4"
                locationName={locationName}
              ></WeatherFcst>
              <div>
                <h3 className="mt-3 mb-3">七日潮浪預測</h3>
                <WaveFcst
                  locationName={locationName}
                  style={{ weidth: "800px" }}
                />
              </div>
            </WeatherInfo>
          </BgSea>
        </Wrapper>
      </div>
      <div style={{ height: "700px" }}></div>
    </>
  );
}

export default Forthpage;
