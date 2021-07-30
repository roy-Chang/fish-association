import React, { useState } from "react";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar, CheckOrder } from "./styled";
import { Button } from "react-bootstrap";

function ThirdOrder() {
  const { name } = useParams();
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
            <li>報名活動 浮淺半日遊</li>
            <li>活動地點 龍洞</li>
            <li>活動日期 2021/10/10</li>
            <li>姓名 辣台妹</li>
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
