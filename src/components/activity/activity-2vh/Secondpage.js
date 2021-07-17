import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {
  InfoSchedule,
  InfoDetail,
  LocationInfo,
  LeftLoc,
  InfoContent,
  RightLoc,
  Wrapper,
} from "./styled";
import ChenPin from "../../../assets/img/Activity/Chen-Pin2.jpeg";
import ChenPin2 from "../../../assets/img/Activity/Chen-Pin.jpeg";

class Secondpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "正濱漁港",
      nickName: "台灣版的彩虹島",
      info: "嚴選豐富經驗船長+全套釣魚用具+尚青海鮮漁人料理，讓你釣好釣滿，吃飽心滿意足，然後滿載而歸！有小管、白帶魚、透抽、鰹魚、竹筴魚等各種豐富漁獲，品味現撈海鮮料理。",
      schedule: [
        "09:00 從火車站出發",
        "09:30 抵達目的地",
        "12:00 結束海釣",
        "12:30 回到溫暖的家",
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case "1":
        this.setState({
          name: "龜吼漁港",
          nickName: "因萬里蟹聲名大噪",
          info: "龜吼漁港每年9-11月秋季時分，鄰近龜吼漁港的「漁夫市集」就會聚集人潮搶購萬里蟹，從台灣新北市萬里區捕獲的海蟹，此地區佔台灣八成以上的海蟹捕撈量",
          schedule: [
            "11:30 當地集合(711前)",
            "12:00 海鮮餐廳午餐",
            "13:30 出發海釣",
            "17:00 當地解散",
          ],
        });
        break;
      case "2":
        this.setState({
          name: "正濱漁港",
          nickName: "台灣版的彩虹島",
          info: "嚴選豐富經驗船長+全套釣魚用具+尚青海鮮漁人料理，讓你釣好釣滿，吃飽心滿意足，然後滿載而歸！有小管、白帶魚、透抽、鰹魚、竹筴魚等各種豐富漁獲，品味現撈海鮮料理。",
          schedule: [
            "09:00 從火車站出發",
            "09:30 抵達目的地",
            "12:00 結束海釣",
            "12:30 回到溫暖的家",
          ],
        });
        break;
      case "3":
        this.setState({
          name: "深澳漁港",
          nickName: "休閒海釣聞名全臺",
          info: "深奧海岬、象鼻岩、酋長岩是位在漁港最裡面的自然景觀，在漁港邊可以看到許多漁船，這裡是北台灣補小卷、透抽的重要漁港。深澳漁港舊名「番仔澳」。",
          schedule: [
            "17:00 瑞芳火車站集合",
            "18:00 晚餐小管米粉",
            "19:00 出發夜釣",
            "22:00 瑞芳火車站解散",
          ],
        });
        break;
      case "4":
        this.setState({
          name: "龍洞",
          nickName: "灣岸弧形如蛟龍盤據",
          info: "可在此聽濤觀景、游泳、浮潛、生態觀察之外，發達的海蝕平臺，則是觀察綠藻、蜑螺、海參、蛇尾、寄居蟹、海兔等海濱生物以及珊瑚藻、海葵、藤壺各種藻類的大自然教室。",
          schedule: [
            "11:00 海洋公園烤肉準備",
            "13:00 團康活動",
            "14:00 出發海釣",
            "17:30 海洋公園解散",
          ],
        });
        break;
      case "5":
        this.setState({
          name: "基隆海生館",
          nickName: "科技與實境兼具",
          info: "不用再大老遠跑去其他縣市欣賞海底世界啦！這裏有AR、VR海底隧道、2層樓大型挑高水缸等空間，總共有4層樓，同是兼具科技與實境，讓旅客徜徉在海洋世界中。",
          schedule: [
            "13:00 潮境公園野餐",
            "14:00 潮境智能海洋館",
            "15:00 參觀常設展",
            "18:00 原地解散",
          ],
        });
        break;
    }
  }
  render() {
    return (
      <>
        <Wrapper>
          <LocationInfo className="wrapper activity-bg-blue d-flex">
            <LeftLoc>
              <img src={ChenPin} alt="Chen-Pin-Port" />
            </LeftLoc>
            <InfoContent className="d-flex">
              <h2>
                {this.state.name} <span>{this.state.nickName}</span>
              </h2>
              <div className="d-flex">
                <InfoDetail>
                  <p>{this.state.info}</p>
                </InfoDetail>
                <InfoSchedule>
                  <ul>
                    {this.state.schedule.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </InfoSchedule>
              </div>

              <RightLoc>
                <img src={ChenPin2} alt="Chen-Pin-Port" />
              </RightLoc>
            </InfoContent>
          </LocationInfo>
        </Wrapper>
        <Button
          style={{ width: "100px", margin: "10px" }}
          id="1"
          onClick={this.handleClick}
        >
          龜吼漁港
        </Button>
        <Button
          style={{ width: "100px", margin: "10px" }}
          id="2"
          onClick={this.handleClick}
        >
          正濱漁港
        </Button>
        <Button
          style={{ width: "100px", margin: "10px" }}
          id="3"
          onClick={this.handleClick}
        >
          深澳漁港
        </Button>
        <Button
          style={{ width: "100px", margin: "10px" }}
          id="4"
          onClick={this.handleClick}
        >
          龍洞
        </Button>
        <Button
          style={{ width: "100px", margin: "10px" }}
          id="5"
          onClick={this.handleClick}
        >
          海生館
        </Button>
      </>
    );
  }
}

export default Secondpage;
