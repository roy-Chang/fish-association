import React from "react";
import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
// import "./JoinForm/MemberJoin2.css";
import "./MemberJoin2.css";

function Forms() {
  const [checked, setCheck] = useState(1);
  const changeForm = () => {
    setCheck(2);
  };

  return (
    <>{checked === 1 ? <Join1 go={changeForm} value={checked} /> : <Join2 />}</>
  );
}

const Join1 = (props) => {
  const inputAccountElement = useRef();

  //表單內的每個欄位
  // const [account, setAccount] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [repassword, setRepassword] = useState();
  const [fields, setFields] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
    username: "",
    gender: "",
    year: "",
    month: "",
    day: "",
    phone: "",
    address: "",
  });

  //每個欄位的錯誤訊息
  const [fieldsErrors, setFieldsErrors] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
    username: "",
    gender: "",
    year: "",
    month: "",
    day: "",
    phone: "",
    address: "",
  });

  return (
    <>
      <Form>
        <Form.Text className="AmemberEnter">
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">會員帳號</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control className="AitemInput" name="account" type="text" />

              <Form.Text className="Acheck AcheckAccount">
                該帳號已創建
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">信箱</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control className="AitemInput" name="email" type="email" />

              <Form.Text className="Acheck AcheckAccount">
                該信箱已創建
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">密碼</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="password"
                type="password"
              />

              <Form.Text className="Acheck AcheckAccount">
                該密碼不符合長度限制
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">確認密碼</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="repassword"
                type="password"
              />
              <Form.Text className="Acheck AcheckAccount">
                與密碼不相符
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <button className="Abtn" type="submit" onClick={props.go}>
            下一步
          </button>
        </Form.Text>
      </Form>
    </>
  );
};

const Join2 = (props) => {
  return (
    <>
      <Form>
        <Form.Group className="ML2memberEnter">
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" htmlFor="">
              姓名
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="name"
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" htmlFor="">
              性別
            </Form.Text>
            <Form.Group className="ML2itemContent">
              <Form.Group type="checkbox" className="ML2gender">
                <Form.Label style={{ fontSize: "24px" }} htmlFor="men">
                  男
                </Form.Label>
                <Form.Check
                  inline
                  className="ML2itemCheck"
                  type="radio"
                  id="men"
                  name="gender"
                  onChange={props.handleChange}
                />
                <Form.Label style={{ fontSize: "24px" }} htmlFor="women">
                  女
                </Form.Label>
                <Form.Check
                  inline
                  className="ML2itemCheck"
                  type="radio"
                  id="women"
                  name="gender"
                  onChange={props.handleChange}
                />
              </Form.Group>
            </Form.Group>
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" htmlFor="">
              出生日期
            </Form.Text>
            <Form.Group className="ML2itemContent">
              {/* <Form.Control as="select"
              defaultValue={selectYear}
              onChange={setSelectYear}
              options={years}
            /> */}
              <Form.Control
                as="select"
                size="sm"
                className="ML2dateInput"
                name=""
                id=""
              >
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
              </Form.Control>
              年
              <Form.Control
                as="select"
                size="sm"
                className="ML2dateInput"
                name=""
                id=""
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Form.Control>
              月
              <Form.Control
                as="select"
                size="sm"
                className="ML2dateInput"
                name=""
                id=""
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Form.Control>
              日
            </Form.Group>
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" htmlFor="">
              連絡電話
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="phone"
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" htmlFor="">
              地址
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="address"
              onChange={props.handleChange}
            />
          </Form.Group>
          <button className="ML2btn" type="submit">
            送出
          </button>
        </Form.Group>
      </Form>
    </>
  );
};
export default Forms;
