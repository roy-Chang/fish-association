import React, { PureComponent } from 'react'
import { Wrapper, Navigation, LoginCard, FifthBackground, RegisterBtn } from './styled'
//import { FifthBackground } from '../components/home/home-5vh/styled';


export default class FiveFloor extends PureComponent {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Wrapper>
                    <FifthBackground>
                    </FifthBackground>
                    <LoginCard>
                        <h1>加入會員即可獲得購物金3000元</h1>
                        <p>- 免費註冊新會員即可開啟，旅遊扎記，留言板好處多多</p>
                        <p>- 註冊付費會員想全館9折</p>
                        <RegisterBtn>加入會員</RegisterBtn>
                    </LoginCard>
               
                </Wrapper>
            </div>
        )
    }
}
