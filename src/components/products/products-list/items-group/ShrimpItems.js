import React, { Component } from "react";
import { Card } from "react-bootstrap";
/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
//like product filter
import { likeProducts } from '../../../../utils/handleFilterItemData';
//link
import { Link } from "react-router-dom";
//connect store
import { connect } from 'react-redux'
//action creator
import { addShoppingCartItems } from '../../../../redux/actions/shoppingCart';


class ShrimpItems extends Component {
  addCart(id) {
    let itemObj = { 
      product_id: id, buy_num: 1
    }
    this.props.addShoppingCart(itemObj);
  }

  render() {
    return (
      <>
      {console.log(likeProducts(this.props.like, 'shrimpProducts'))}
        {likeProducts(this.props.like, 'shrimpProducts').map((item) => {
          return (
            <div key={item.id}>
              <Card className="P-product-card my-3" style={{marginRight: '20px'}}>
                <figure className="P-product-card-pic">
                  <img src={require(`../../../../assets/img/products/shrimp/${item.image}.jpg`).default} alt="" />
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
                    <Link to={`/detail/shrimpProducts/${item.name}/${item.id}`}>{item.name}</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShrimpItems)
