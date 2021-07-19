import {
    Row,
    Col,
    Container,
    Button,
    Carousel,
    Card,
    
  } from "react-bootstrap";
  import { TestRed , CardBody, CardText, CardLabel, CardIcon} from "./style";

  import cart from "../../../assets/img/Item/shopping-cart-solid.svg";
  import heart from "../../../assets/img/Item/heart-regular.svg";
  function ItemCard(props) {
    
  
    return (
      <>
        <CardBody>
            <div style={{padding:"10px"}}>
                <img alt="pic"></img>
            </div>
           
            <CardText>
                <div>草蝦</div>
                <div>$100</div>
            </CardText>
            <CardLabel>
                特價
            </CardLabel>
            <CardIcon>
            <img src={cart} style={{width:"20px" ,color:"red"}}></img>
            <img src={heart} style={{width:"20px"}}></img>
            </CardIcon>
        </CardBody>
      </>
    )
  }
  
  export default ItemCard