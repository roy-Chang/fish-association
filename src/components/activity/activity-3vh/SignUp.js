import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Calendardate from "./Calendar";
import StarRating from "./StarRating";
import { SignUpArea, SignUpDetail, SignUpPrice } from "./styled";
import { Button } from "react-bootstrap";
import { createBrowserHistory } from 'history';
const axios = require("axios");




class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "活動",
      place: "",
      cost_adult: 1000,
      cost_children: 500,
      current_apply: 0,
      limit_num: 20,
      schedule: "",
      apply: [""],
      clickDate: [],
      dataArry: [],
      zhengbinArray: [],
      wanliArray: [],
      ruifangArray: [],
      longdongArray: [],
      keelungArray: [],
      msg: "請選擇日期",
      isChoosen: false,
    };
    this.chooseDate = this.chooseDate.bind(this);
  }

  history = createBrowserHistory()

  componentDidMount() {
    axios({
      method: "get",
      baseURL: "http://localhost:3000",
      url: "/api/activity",
      "Content-Type": "application/json",
    })
      .then((result) => {
        this.setState({ dataArry: result.data.ret });
        console.log(this.state.dataArry);
        let zhengbinArray = [];
        let wanliArray = [];
        let ruifangArray = [];
        let longdongArray = [];
        let keelungArray = [];
        result.data.ret.forEach((item, index) => {
          if (item.place === "正濱漁港") {
            zhengbinArray.push(item);
          }
          if (item.place === "龜吼漁港") {
            wanliArray.push(item);
          }
          if (item.place === "深澳漁港") {
            ruifangArray.push(item);
          }
          if (item.place === "龍洞") {
            longdongArray.push(item);
          }
          if (item.place === "基隆") {
            keelungArray.push(item);
          }
        });
        this.setState({ zhengbinArray: zhengbinArray });
        this.setState({ wanliArray: wanliArray });
        this.setState({ ruifangArray: ruifangArray });
        this.setState({ longdongArray: longdongArray });
        this.setState({ keelungArray: keelungArray });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.clickDate !== this.state.clickDate) {
      this.state.dataArry.forEach((item) => {
        if (item.apply === this.state.clickDate) {
          this.handleClick(item.place);
          this.setState({
            id: item.id,
            name: item.activity_name,
            place: item.place,
            cost_adult: item.cost_adult,
            cost_children: item.cost_children,
            current_apply: item.current_apply,
            limit_num: item.limit_num,
            schedule: item.schedule,
            apply: item.apply,
            msg: null,
          });
        }
      });
    }
  }
  chooseDate = (e) => {
    this.setState({ clickDate: e });
    this.state.dataArry.forEach((item) => {
      if (item.apply !== this.state.clickDate) {
        this.setState({
          msg: "今天沒有活動喔",
          name: null,
          place: null,
          cost_adult: null,
          cost_children: null,
          current_apply: null,
          limit_num: null,
          schedule: null,
          apply: null,
        });
      }
    });
  };
  handleClick = (name) => {
    console.log(name);
    //const name = e.target.innerHTML;
    // switch (name) {
    //   case "正濱漁港":
    //     this.setState({ isChoosen: !this.state.isChoosen });
    //     //this.setState({ isChoosen: "actone" });
    //     break;
    //   case "龜吼漁港":
    //     this.setState({ isChoosen: !this.state.isChoosen });
    //     //this.setState({ isChoosen: "acttwo" });
    //     break;
    //   case "深澳漁港":
    //     this.setState({ isChoosen: !this.state.isChoosen });
    //     //this.setState({ isChoosen: "actthree" });
    //     break;
    //   case "龍洞":
    //     this.setState({ isChoosen: !this.state.isChoosen });
    //     //this.setState({ isChoosen: "actfour" });
    //     break;
    //   case "基隆":
    //     this.setState({ isChoosen: !this.state.isChoosen });
    //     //this.setState({ isChoosen: "actfive" });
    //     break;
    // }
    //console.log(e.target.innerHTML, this.state.isChoosen);
  };
  render() {
    let chooserClass = this.state.isChoosen ? "" : "actacitve";
    console.log(chooserClass);
    return (
      <>
          <SignUpArea>
            <ul className="d-flex">
              <li>
                <a
                  href="#"
                  //onClick={this.handleClick}
                  className={`actone ${chooserClass}`}
                  style={{ borderRadius: "20px 0 0 0" }}
                >
                  正濱漁港
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`acttwo ${chooserClass}`}
                  //onClick={this.handleClick}
                >
                  龜吼漁港
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`actthree ${chooserClass}`}
                  //onClick={this.handleClick}
                >
                  深澳漁港
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`actfour ${chooserClass}`}
                  //onClick={this.handleClick}
                >
                  龍洞
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`actfive ${chooserClass}`}
                  //onClick={this.handleClick}
                  style={{ borderRadius: "0 20px 0 0" }}
                >
                  基隆
                </a>
              </li>
            </ul>
          </SignUpArea>
          <SignUpDetail className="d-flex">
            <Calendardate
              onChange={this.chooseDate}
              className="calendar"
              zhengbinArray={this.state.zhengbinArray}
              wanliArray={this.state.wanliArray}
              ruifangArray={this.state.ruifangArray}
              longdongArray={this.state.longdongArray}
              keelungArray={this.state.keelungArray}
              id="calendar"
            ></Calendardate>
            <SignUpPrice>
              <h3 className="mb-2">
                {this.state.name}報名{" "}
                <span style={{ color: "#E63946" }}>{this.state.msg}</span>
              </h3>
              <ul>
                <li>地點:{this.state.place}</li>
                <li>日期:{this.state.apply}</li>
                <li>魚種:{this.state.schedule}</li>
              </ul>
              <p style={{ margin: "0" }}>{this.state.clickDate}</p>
              <StarRating />
              <div className="d-flex">
                <ul>
                  <li>
                    成人<span className="age">(18-64歲)</span>
                  </li>
                  <li>
                    兒童<span className="age">(04-11歲)</span>
                  </li>
                </ul>
                <ul>
                  <li>TWD{this.state.cost_adult}/每人</li>
                  <li>TWD{this.state.cost_children}/每人</li>
                </ul>
              </div>
              <div style={{ color: " #1d3557" }}>
                <p>
                  目前已有{this.state.current_apply}位報名 ， 最後剩下
                  {this.state.limit_num}個名額
                </p>
              </div>
              <Link to="/order/activity">
                <Button className="sign-up-btn">立即報名</Button>
              </Link>
              <Button className="member-sign-up-btn" href="#">
                會員報名
              </Button>
            </SignUpPrice>
          </SignUpDetail>
        
      </>
    );
  }
}

export default SignUp;
