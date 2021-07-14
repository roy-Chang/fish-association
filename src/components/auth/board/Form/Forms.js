import React from "react";
import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
// import "./JoinForm/MemberJoin2.css";
import "./MemberJoin2.css";

function Forms(props) {
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
  });

  //每個欄位的錯誤訊息
  const [fieldsErrors, setFieldsErrors] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
  });

  //處理每個表單的變動
  const handleFieldChange = (e) => {
    const updateFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(updateFields);
  };

  //表單有變動(ex.欄位輸入)
  const handleFormChange = (e) => {
    console.log("更動的欄位", e.target.name);

    //欄位的錯誤訊息清空
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: "",
    };

    setFieldsErrors(updateFieldErrors);
  };

  //表單內有不合法的輸入
  const handleFormInvalid = (e) => {
    //擋住跳出的訊息提示框
    e.preventDefault();

    //validationMessage屬性 是最新的HTML錯誤提示訊息API
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldsErrors(updateFieldErrors);

    //當帳號不符合規定使用ref聚焦focus
    if (e.target.name === "account") inputAccountElement.current.focus();

    //當信箱不符合規定使用ref聚焦focus
    //當密碼不符合規定使用ref聚焦focus
    //當確認密碼不符合規定使用ref聚焦focus
  };

  return (
    <>
      <Form>
        <Form.Text className="AmemberEnter">
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">會員帳號</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="account"
                type="text"
                value={fields.account}
                onChange={(handleFieldChange, props.handleChange)}
                required
                ref={inputAccountElement}
              />
              {fieldsErrors.account !== "" && (
                <Form.Text className="Acheck AcheckAccount">
                  該帳號已創建
                </Form.Text>
              )}
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">信箱</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="email"
                type="email"
                value={fields.email}
                onChange={(handleFieldChange, props.handleChange)}
                required
              />
              {fieldsErrors.email !== "" && (
                <Form.Text className="Acheck AcheckAccount">
                  該信箱已創建
                </Form.Text>
              )}
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">密碼</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="password"
                type="password"
                value={fields.password}
                onChange={(handleFieldChange, props.handleChange)}
                required
                minLength="3"
              />
              {fieldsErrors.password !== "" && (
                <Form.Text className="Acheck AcheckAccount">
                  該密碼不符合長度限制
                </Form.Text>
              )}
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">確認密碼</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="repassword"
                type="password"
                value={fields.repassword}
                onChange={(handleFieldChange, props.handleChange)}
                required
                title="OOOXXX"
              />
              {fields.repassword !== fields.password && (
                <Form.Text className="Acheck AcheckAccount">
                  與密碼不相符
                </Form.Text>
              )}
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
  const [selectYear, setSelectYear] = useState(null);
  const years = [
    { value: 1990, label: "1990" },
    { value: 1991, label: "1991" },
    { value: 1992, label: 1992 },
    { value: 1993, label: 1993 },
    { value: 1994, label: 1994 },
    { value: 1995, label: 1995 },
    { value: 1996, label: 1996 },
    { value: 1997, label: 1997 },
    { value: 1998, label: 1998 },
    { value: 1999, label: 1999 },
    { value: 2000, label: 2000 },
  ];

  return (
    <>
      <Form>
        <Form.Group className="ML2memberEnter">
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" for="">
              姓名
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="name"
              value=""
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" for="">
              性別
            </Form.Text>
            <Form.Group className="ML2itemContent">
              <Form.Group type="checkbox" className="ML2gender">
                <Form.Label style={{ fontSize: "24px" }} for="men">
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
                <Form.Label style={{ fontSize: "24px" }} for="women">
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
            <Form.Text className="ML2itemLabel" for="">
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
                <option value="">1990</option>
                <option value="">1991</option>
                <option value="">1992</option>
                <option value="">1993</option>
                <option value="">1994</option>
                <option value="">1995</option>
                <option value="">1996</option>
                <option value="">1997</option>
                <option value="">1998</option>
                <option value="">1999</option>
                <option value="">2000</option>
              </Form.Control>
              年
              <Form.Control
                as="select"
                size="sm"
                className="ML2dateInput"
                name=""
                id=""
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </Form.Control>
              月
              <Form.Control
                as="select"
                size="sm"
                className="ML2dateInput"
                name=""
                id=""
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
                <option value="">13</option>
                <option value="">14</option>
                <option value="">15</option>
                <option value="">16</option>
                <option value="">17</option>
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
              </Form.Control>
              日
            </Form.Group>
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" for="">
              連絡電話
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="phone"
              value=""
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="ML2item">
            <Form.Text className="ML2itemLabel" for="">
              地址
            </Form.Text>
            <Form.Control
              className="ML2itemInput"
              type="text"
              name="address"
              value=""
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
