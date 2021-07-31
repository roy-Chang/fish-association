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
  const [userDetail, setUserDetail] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let element = {};
  let cart = [];
  //const FormData = require("form-data");
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

    Object.keys(location.state.data).forEach((key) => {
      console.log(key.substr(1), location.state.data[key]);
    });
  }, []);
  console.log(cart);
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
            <li>付款方式 {location.state.payment}</li>
            <li>
              總人數 大人{location.state.normalNum}名，小孩
              {location.state.childlNum}名
            </li>
            <li>
              總金額
              {location.state.normalNum * normalCost +
                location.state.childlNum * childCost}
            </li>
            <li>姓名</li>
            <li>聯絡電話 0999888777</li>
            <li>信箱 rrr@yahoo.com</li>
          </ul>
        </CheckOrder>
        <div className="text-center">
          <Button variant="primary" className="mt-3 mr-5">
            <Link
              to={`/order/activity/${name}/second`}
              style={{ color: "white" }}
            >
              上一頁
            </Link>
          </Button>
          <Button variant="primary" className="mt-3 ml-5">
            送出訂單
          </Button>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
export default ThirdOrder;
