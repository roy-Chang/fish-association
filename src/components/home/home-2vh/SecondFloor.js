import React, { PureComponent, Fragment } from 'react'
//styled
import { Container, Navigation, WrapperInfo } from './styled';
//new blog card
import NewBlog from './shar-blog/NewBlog';
//discount card
import DiscountCard from './new-discount/DiscountCard';
//VerticalBar
import VerticalBar from './chart/VerticalBar';

export default class SecondFloor extends PureComponent {
    render() {
        return (
            <Fragment>
                <Navigation />
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

