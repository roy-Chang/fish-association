import { Component } from 'react';
//bootstrap
import { Popover, OverlayTrigger , Button, PopoverTitle, PopoverContent } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
//react redux
import { connect } from 'react-redux'
//action creator
import { axiosShowShoppingCartItems, showShoppingCartList, handleShoppingBtn, handleShoppingBtnSwitch } from '../../redux/actions/shoppingCart';
//img
import fishPic from '../../assets/img/products/fish/eel2.jpg'
//buy filter
import { buyFilter } from '../../utils/handleFilterItemData';





class PopoverShopping extends Component {

    
    render() {
        return (
            <>
            {console.log(this.props.isLogin)}
                <OverlayTrigger 
                  trigger={["hover", "focus"]}
                  placement="bottom" 
                  overlay={
                    <Popover id="popover-basic">
                        <PopoverTitle as="h3">購物車</PopoverTitle>
                        <PopoverContent style={{ width: "250px" }}>
                            

                            {/*沒有購物時 */}
                            {this.props.shoppingCartContent.length === 0 ? (
                                <>
                                   <BsFillExclamationTriangleFill 
                                        style={{ 
                                            width: "25px", 
                                            height: "25px", 
                                            marginRight: "5px",
                                            color: 'rgba(0,0,0,0.3)' 
                                        }}
                                    />目前沒有內容
                                </>  
                                
                            ) : 
                                
                                this.props.CartList.map((item) => (
                                    <div className="shopping-product-wrapper">
                                        <figure className="product-pic">
                                            <img src={item.image} alt="" />
                                        </figure>
                                        <span>{item.name}</span>
                                        <span>x {item.buy_num}</span>
                                    </div>
        
                                ))
                            
                            }
                            
                            
                            
                            
                            </PopoverContent>
                
                            
                    </Popover>

                  }>

                    <Button
                      onMouseEnter={() => { 
                        this.props.showCartItems(this.props.shoppingCartContent) 
                        this.props.handleShoppingBtn()
                      }}
                      onMouseLeave={() => { this.props.handleShoppingSwitch()}}
                      >
                        {this.props.btnState.isShow === false ? (
                            <FaShoppingCart
                                className="shopping-go" 
                                style={{ width: "70px", height: "25px" }} 
                            />
                            )
                            :
                            (<div className="buy-now-btn">
                                    立即購買
                            </div>)
                        }
                        
                    </Button>
                </OverlayTrigger>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        shoppingCartContent: state.shoppingCartContent,
        CartList: state.shoppingCartList,
        btnState: state.shoppingBtn,
        isLogin: state.memberLogin.isLogin
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCartItems(data) {
            const action = showShoppingCartList(buyFilter(data))
            dispatch(action)
        },
        handleShoppingBtn() {
            const action = handleShoppingBtn()
            dispatch(action)
        },
        handleShoppingSwitch() {
            const action = handleShoppingBtnSwitch()
            dispatch(action)
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopoverShopping)