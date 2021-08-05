import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./check.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import visa from "../../../assets/img/mastercard.png";
import { useTwZipCode, cities, districts } from "use-tw-zipcode";
//action creator
import { saveOrderDetailAll } from '../../../redux/actions/shoppingCart';
//dispatch
import { useDispatch, useSelector } from 'react-redux'

function Check(props) {
  //store
  const discount_count = useSelector((state) => state.shoppingOrderDetail.discount_count)
  const {
    city,
    district,
    zipCode,
    handleCityChange,
    handleDistrictChange
  } = useTwZipCode();
  
  //define form data
  const inputValue = {
    discount_count,
    original_total: props.oringinSum,
    pay_total: props.sum,
    pay_way: 1,
    city: "",
    postal: 324,
    address: ""
  }
  //save input value
  const[orderValue, setOrderValue] = useState(inputValue)
  
  //define checkbox value
  const payWay = [
    { id: 1, way: "虛擬ATM"}, 
    { id: 2, way: "信用卡"},
    { id: 3, way: "Line"},
    { id: 4, way: "google pay"}
  ];
  const deliver = [ 
    { id: 1, way: "黑貓宅急便"}, 
    { id: 2, way: "超商取貨"}, 
    { id: 3, way: "貨到付款"}
  ]
  //onChange
  const getAllInputValue = (e) => {
      setOrderValue({
        ...orderValue,
        [e.target.name]: e.target.value
      })
  }

  const cityInput = (city) => {
    setOrderValue({
      ...orderValue,
      city: city,
    })
  }
  const distInput = (dist, address, zipCode) => {
    setOrderValue({
      ...orderValue,
      address: dist + address,
      postal: zipCode
    })
  }
  //dispatch
  const dispatch = useDispatch()
  const insertOrderDetal = () => {
    dispatch(saveOrderDetailAll(orderValue))
  }

  return (
    <>
      <div className="checkWrapper">
          <Form>
            <Row style={{ margin: "10px auto" }}>
              <Form.Label
                style={{ fontSize: "20px", color: "var(--fontWhite)" }}
              >
                付款方式
              </Form.Label>
              <Form.Group className="">
                <Form.Check type="checkbox" className="">
                  {
                    payWay.map((way) => (
                        <Form.Check key={way.id}
                            inline
                            name="pay_way"
                            type="radio"
                            label={way.way}
                            value={way.id}
                            style={{
                              color: "var(--fontWhite)",
                              fontSize: "16px",
                              marginLeft: "30px",
                            }}
                            onChange={getAllInputValue}
                          />
                    ))
                  }
                </Form.Check>
              </Form.Group>
            </Row>
            <Row style={{ margin: "10px auto" }}>
              <Form.Label
                style={{ fontSize: "20px", color: "var(--fontWhite)" }}
              >
                運送方式
              </Form.Label>
              <Form.Group className="">
                <Form.Check type="checkbox" className="">
                  {
                    deliver.map((deliver) => (
                      <Form.Check key={deliver.id}
                        inline
                        name="deliver_way"
                        type="radio"
                        label={deliver.way}
                        value={deliver.id}
                        style={{
                          color: "var(--fontWhite)",
                          fontSize: "16px",
                          marginLeft: "30px",
                        }}
                        onChange={getAllInputValue}
                      />
                    ))
                  }                 
                </Form.Check>
              </Form.Group>
            </Row>
            <Row className="personal">
              <Row className="left">
                <Row className="perType">
                  <Form.Label className="formLabel">收件人</Form.Label>
                  <Form.Control
                    className=""
                    type="text"
                    name="name"
                    placeholder="請輸入姓名"
                    onChange={getAllInputValue}
                  />
                </Row>
                
                  <div style={{marginTop: '10px'}}>
                  <Row>
                    <select name="city" className="tw-select" onChange={e => {
                      handleCityChange(e.target.value)
                      cityInput(e.target.value)
                    }}>
                      {cities.map((city, i) => {
                        return <option key={i}>{city}</option>;
                      })}
                    </select>
                  
                    <select className="tw-select" onChange={e => {
                        handleDistrictChange(e.target.value)
                        // distInput(e.target.value)
                      }
                    }>
                      {districts[city].map((district, i) => {
                        return <option key={i}>{district}</option>;
                      })}
                    </select>
                  </Row>
                    <div style={{color: 'white', marginTop: '5px'}}>
                      {city}
                      {district}
                      <span style={{marginLeft: '10px'}}>
                        <input value={zipCode} className="zip" style={{ color: 'black'}} disabled/>
                      </span>
                    </div>
                  </div>
                
                
                <Row className="perType">
                  <Form.Label className="formLabel">地址</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="請輸入地址"
                    onChange={(e) => {distInput(district, e.target.value, zipCode)}}
                  />
                </Row>
              </Row>
              <Row className="right">
                <Row className="perType RperType">
                  <Form.Label className="formLabel">信用卡號</Form.Label>
                  <Form.Text className="visaCard">
                    <Form.Control className="visaInput" type="text" />
                    <img className="visa" src={visa} />
                  </Form.Text>
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">持有人名字</Form.Label>
                  <Form.Control className="input" type="text" />
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">到期日</Form.Label>
                  <Form.Control className="" type="month" />
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">CVV</Form.Label>
                  <Form.Control className="inputNum" type="text" />
                </Row>
              </Row>
            </Row>
            <Row className="checkTotal">
              <Row className="checkTotalPri">總計 $ {props.sum}</Row>
            </Row>    
          </Form>
          <div className="btnStep">
                <Button 
                  className="cbtn"
                  onClick={
                    props.prevBtn
                  }
                >
                  上一步
                </Button>
                <Button
                  className="cbtn"
                  onClick={() => {
                    props.nextBtn();
                    insertOrderDetal()
                  }}
                >
                  確認訂單
                </Button>
          </div>
      </div>
    </>
  );
}

export default Check;
