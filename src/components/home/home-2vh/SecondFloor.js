import React, { PureComponent, Fragment } from 'react'
//styled
import { Container, Navigation, WrapperInfo, GiftWrapper, GiftPosition } from './styled';
//new blog card
import NewBlog from './shar-blog/NewBlog';
//discount card
import DiscountCard from './new-discount/DiscountCard';
//VerticalBar
import VerticalBar from './chart/VerticalBar';
//gift
import Gift from './gift/Gift';


export default class SecondFloor extends PureComponent {
    render() {
        return (
            <Fragment>
                <Navigation />
                  <GiftPosition>
                    <GiftWrapper>
                        <Gift/>
                    </GiftWrapper>
                  </GiftPosition> 
                <Container>
                    <h1 style={{color: 'white'}}>最新消息</h1>
                    <hr />
                    <WrapperInfo>
                        <NewBlog />
                        <DiscountCard />
                    </WrapperInfo>
                    <VerticalBar/>
                </Container>
            </Fragment>
        )
    }
}

