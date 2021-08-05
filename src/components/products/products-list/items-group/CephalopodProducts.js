import React, { Component } from "react";
// import ProductCard2 from "./ProductCard2";
import { Card } from "react-bootstrap";
/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
/*items json*/
import { likeProducts } from '../../../../utils/handleFilterItemData';
import { Link } from "react-router-dom";
//connect store
import { connect } from 'react-redux'
//action creator
import { addShoppingCartItems } from '../../../../redux/actions/shoppingCart';



class CephalopodProducts extends Component {

  addCart(id) {
    let itemObj = { 
      product_id: id, buy_num: 1
    }
    this.props.addShoppingCart(itemObj);
  }

  render() {
    return (
      <>
        {likeProducts(this.props.like, 'cephalopodProducts').map((item) => {
          return (
            <div key={item.id}>
              <Card className="P-product-card my-3" style={{marginRight: '20px'}}>
                <figure className="P-product-card-pic">
                  <img src={require(`../../../../assets/img/products/cephalopod/${item.image}.jpg`).default} alt="" />
                </figure>
                <div className="d-flex justify-content-end align-items-center mr-3">
                  <BsHeartFill
                    style={{ width: "25px", height: "25px", color: `${item.like === true ? 'red' : ''}` }}
                    className="mx-2 heart"
                  />
                  <FaShoppingCart
                    style={{ width: "25px", height: "25px" }}
                    className="shopping-cart"
                    onClick={() => {this.addCart(item.id)}}
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                  <Link to={`/detail/cephalopodProducts/${item.name}/${item.id}`}>{item.name}</Link>
                  </Card.Title>
                  <Card.Text>定價 ${item.price}</Card.Text>
                </Card.Body>
              </Card> 
            </div>
          )
        })}
        
          
        
      </>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    shoppingCartContent: state.shoppingCartContent,
    like: state.like
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShoppingCart(item) {
      const action = addShoppingCartItems(item)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CephalopodProducts)
