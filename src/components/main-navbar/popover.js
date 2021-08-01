import { Component } from 'react';
//bootstrap
import { Popover, OverlayTrigger , Button, PopoverTitle, PopoverContent } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
//react redux
import { connect } from 'react-redux'
//action creator
import { axiosShowShoppingCartItems, showShoppingCartList, handleShoppingBtn, handleShoppingBtnSwitch } from '../../redux/actions/shoppingCart';
import { toGoRoute } from '../../redux/actions/jumpRouter';
//buy filter
import { buyFilter } from '../../utils/handleFilterItemData';
//link
import { Link } from 'react-router-dom'





class PopoverShopping extends Component {

    
    render() {
        return (
            <>
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
                                    />
                                    目前沒有內容
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
                                    {this.props.isLogin === false ? (
                                        <Link 
                                          onClick={() => {
                                              this.props.handleJumpToRoute(this.props.shoppingCartContent.length)
                                          }} 
                                          to="/auth" 
                                          style={{color: 'white', textDecoration: 'none'}}>
                                              立即購買
                                        </Link>
                                    ) : (
                                        <Link to="/products/order" style={{color: 'white', textDecoration: 'none'}}>
                                            立即購買
                                        </Link>
                                    )
                                    }                                
                                    
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
        },
        handleJumpToRoute(item) {
            console.log(item)
            if (item !== 0) {
                const action = toGoRoute({
                    fromWhere: '/products/order',
                    toRouter: '/products/order'
                })
                dispatch(action)
            } 
            
            
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopoverShopping)