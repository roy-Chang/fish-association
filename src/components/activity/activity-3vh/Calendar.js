import React, { Component } from "react";
import styled from "@emotion/styled";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const CalendarStyle = styled.div`
  padding: 40px;
  width: 50%;
  background: #efead2;
  color: #1d3557;
  border-radius: 20px 0 0 20px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
  @media (max-width: 576px) {
    border-radius: 0px;
  }
`;
const listOne = [];
const listTwo = [];
const listThree = [];
const listFour = [];
const listFive = [];
class Calendardate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.clickDate = this.clickDate.bind(this);
  }
  //點選日期時處理時間格並傳回父層
  clickDate(newDate) {
    const year = newDate.getFullYear();
    const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    const day = ("0" + newDate.getDate()).slice(-2);
    this.props.onChange([year, month, day].join("-"));
    const result = [day, month, year].join(".");
  }

  //把父層讀來的地區陣列資料，轉換成react-calendar資料格式DD-MM-YYYY
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps, prevState, this.props);
    if (prevProps.zhengbinArray !== this.props.zhengbinArray) {
      this.props.zhengbinArray.forEach((element) => {
        listOne.push(element.apply.split("-").reverse().join("-"));
      });
    }
    if (prevProps.wanliArray !== this.props.wanliArray) {
      this.props.wanliArray.forEach((element) => {
        listTwo.push(element.apply.split("-").reverse().join("-"));
      });
    }
    if (prevProps.ruifangArray !== this.props.ruifangArray) {
      this.props.ruifangArray.forEach((element) => {
        listThree.push(element.apply.split("-").reverse().join("-"));
      });
    }
    if (prevProps.longdongArray !== this.props.longdongArray) {
      this.props.longdongArray.forEach((element) => {
        listFour.push(element.apply.split("-").reverse().join("-"));
      });
    }
    if (prevProps.keelungArray !== this.props.keelungArray) {
      this.props.keelungArray.forEach((element) => {
        listFive.push(element.apply.split("-").reverse().join("-"));
      });
    }
    // console.log(this.props.zhengbinArray, listOne);
    // console.log(this.props.wanliArray, listTwo);
    // console.log(this.props.ruifangArray, listThree);
    // console.log(this.props.longdongArray, listFour);
    // console.log(this.props.keelungArray, listFive);
  }
  //不同地點在日曆上有不同的樣式，用className來調整
  setClass = (date) => {
    let a;
    listOne.forEach((element) => {
      if (element === moment(date).format("DD-MM-YYYY")) {
        a = "activitylistOne";
      }
    });
    listTwo.forEach((element) => {
      if (element === moment(date).format("DD-MM-YYYY")) {
        a = "activitylistTwo";
      }
    });
    listThree.forEach((element) => {
      if (element === moment(date).format("DD-MM-YYYY")) {
        a = "activitylistThree";
      }
    });
    listFour.forEach((element) => {
      if (element === moment(date).format("DD-MM-YYYY")) {
        a = "activitylistFour";
      }
    });
    listFive.forEach((element) => {
      if (element === moment(date).format("DD-MM-YYYY")) {
        a = "activitylistFive";
      }
    });
    return a;
  };
  render() {
    return (
      <>
        <CalendarStyle>
          <Calendar
            minDate={new Date()}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
            tileClassName={({ activeStartDate, date, view }) =>
              this.setClass(date)
            }
            value={this.state.value}
            onChange={this.clickDate}
          />
        </CalendarStyle>
      </>
    );
  }
}
export default Calendardate;
