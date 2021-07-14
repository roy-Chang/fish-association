import React, { useState } from "react";
import "./MemberJoin2.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Step2(props) {
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
      <Form.Group className="ML2memberEnter">
        <Form.Group className="ML2item">
          <Form.Text className="ML2itemLabel" for="">
            姓名
          </Form.Text>
          <Form.Control
            className="ML2itemInput"
            type="text"
            name="name"
            value={props.getState("name", "")}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group className="ML2item">
          <Form.Text className="ML2itemLabel" for="">
            性別
          </Form.Text>
          <Form.Group className="ML2itemContent">
            <Form.Group className="ML2gender">
              <span>男</span>
              <Form.Check
                inline
                className="ML2itemCheck"
                type="radio"
                id="men"
                name="gender"
                onChange={props.handleChange}
              />
              <span>女</span>
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
            value={props.getState("phone", "")}
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
            value={props.getState("address", "")}
            onChange={props.handleChange}
          />
        </Form.Group>
        <button className="ML2btn" type="submit">
          送出
        </button>
      </Form.Group>
    </>
  );
}

export default Step2;
