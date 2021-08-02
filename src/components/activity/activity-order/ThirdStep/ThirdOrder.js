import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar, CheckOrder } from "./styled";
import { Button } from "react-bootstrap";
import axios from "axios";

function ThirdOrder() {
  const { name } = useParams();
  const location = useLocation();
  const [orderName, setorderName] = useState(null);
  const [place, setPlace] = useState(null);
  const [apply, setApply] = useState(null);
  const [normalCost, setnormalCost] = useState(null);
  const [childCost, setchildCost] = useState(null);
  //const FormData = require("form-data");
  location.state.data.forEach((value, index) => {
    console.log("value", value.email);
  });
  console.log(
    "3page-paymentWay",
    location.state.payment,
    "3page-報名資料",
    location.state.data,
    "3page-大人人頭",
    location.state.normalNum,
    "3page-小孩人頭",
    location.state.childlNum
  );
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/activity/${name}`)
      .then((res) => {
        console.log(res.data.ret[0]);
        setorderName(res.data.ret[0].activity_name);
        setPlace(res.data.ret[0].place);
        setApply(res.data.ret[0].apply);
        setnormalCost(res.data.ret[0].cost_adult);
        setchildCost(res.data.ret[0].cost_children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper className=" mt-5">
      <Bg_blue>
        <ProgressBar>
          <ul>
            <li>活動確認</li>
            <li>資料填寫</li>
            <li>報名完成</li>
          </ul>
        </ProgressBar>
        <CheckOrder className=" mt-5">
          <ul>
            <li>報名活動 {orderName}</li>
            <li>活動地點 {place}</li>
            <li>活動日期 {apply}</li>
            <li>
              付款：
              {(function () {
                if (location.state.payment == 1) return "信用卡";
                else if (location.state.payment == 2) return "電匯";
                else return "現場付費";
              })()}
            </li>
            <li>
              總人數 大人{location.state.normalNum}名，小孩
              {location.state.childlNum}名
            </li>
            <li>
              總金額
              {location.state.normalNum * normalCost +
                location.state.childlNum * childCost}
            </li>
            {location.state.data.map((value, index) => {
              return (
                <>
                  <p className="mt-2">------------------------------</p>
                  <li>姓名{value.name}</li>
                  <li>聯絡電話{value.phone}</li>
                  <li>信箱 {value.email}</li>
                </>
              );
            })}
          </ul>
        </CheckOrder>
        <div className="text-center">
          <Button variant="primary" className="mt-3 ml-5">
            送出訂單
          </Button>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
export default ThirdOrder;
