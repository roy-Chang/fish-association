import React, { Component } from "react";
import { Wrapper, Bg_blue, ProgressBar, OrderSchedule, Notice } from "./styled";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
export default function FirstOrder() {
  return (
    <Wrapper className="justify-content-center mt-5">
      <Bg_blue>
        <ProgressBar>
          <ul>
            <li>活動確認</li>
            <li>資料填寫</li>
            <li>報名完成</li>
          </ul>
        </ProgressBar>
        <OrderSchedule className="mt-5">
          <ul>
            <li>龍洞</li>
            <li>2021/08/10</li>

            <li>成人</li>
            <li>$2000</li>

            <li>
              <DropdownButton
                id="dropdown-basic-button"
                title="選擇人數"
                size="sm"
              >
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
          <ul>
            <li>海釣活動</li>
            <li style={{ visibility: "hidden" }}>2021/08/10 </li>
            <li>兒童</li>
            <li>$1500</li>
            <li>
              <DropdownButton
                id="dropdown-basic-button"
                title="選擇人數"
                size="sm"
              >
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </OrderSchedule>
        <Notice className="mt-5">
          <h3>注意事項&特別聲明</h3>
          <p>
            使用虛擬的身分證號碼進行報名，會構成刑法行使偽造準私文書罪。倘若使用虛擬身分證進行報名將排擠其他民眾報名的機會，破壞系統的公平性。
            <br />
            一經發現將取消報名紀錄。如果將取得的名額加價出售，或換取不正利益圖利，則有觸法的疑慮。刑法第三六○條：干擾電腦系統及相關設備罪。
            <br />
            無故以電腦程式或其他電磁方式干擾他人電腦或其相關設備，使公眾或他人因此遭受損害者，處以三年以下有期徒刑、拘役或科或併科十萬元以下罰金。
            <br />
            若因而造成本公司損害，應負完全之賠償責任。
            <br />
            若您未滿二十歲，應由您的法定代理人閱讀、瞭解並同意本聲明之所有內容後，方得使用本服務。若您選取同意本聲明，將視為您已取得法定代理人之同意。
            <br />
          </p>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="已詳細閱讀、瞭解並同意《特別聲明 》
            "
            />
          </Form.Group>
        </Notice>
        <div className="text-center">
          <Button variant="primary" className="mt-3">
            下一步
          </Button>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
