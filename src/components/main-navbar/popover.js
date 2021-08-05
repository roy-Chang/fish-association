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
                                    <div key={item.id} className="shopping-product-wrapper">
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
                                    {this.props.isLogin === false && this.props.shoppingCartContent.length === 0 ? 
                                    (
                                        <Link 
                                          to="/auth" 
                                          style={{color: 'white', textDecoration: 'none'}}>
                                              立即購買
                                        </Link>
                                    ) : this.props.shoppingCartContent.length === 0 ? 
                                    (
                                        <Link 
                                          to="/products" 
                                          style={{color: 'white', textDecoration: 'none'}}>
                                              立即購買
                                        </Link>
                                    ) : this.props.isLogin === false ?
                                    (
                                        <Link 
                                          to="/auth" 
                                          style={{color: 'white', textDecoration: 'none'}}
                                          onClick={() => {
                                            this.props.handleJumpToRoute()
                                          }} 
                                        >
                                            立即購買
                                        </Link>
                                    ) :
                                    (
                                        <Link 
                                          to="/products/order" 
                                          style={{color: 'white', textDecoration: 'none'}}
                                          onClick={() => (this.props.insertShoppingCart(this.props.CartList))}
                                        >
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
        handleJumpToRoute() {
            const action = toGoRoute({
                fromWhere: '/products/order',
                toRouter: '/products/order'
            })
            dispatch(action)
            
        },
        insertShoppingCart(data) {
            //insert db data
            let products = []
            data.forEach((item) => {
                products.push({
                    product_id: item.id,
                    buy_num: item.buy_num
                })
            })
            const action = axiosShowShoppingCartItems(products)
            dispatch(action)
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopoverShopping)