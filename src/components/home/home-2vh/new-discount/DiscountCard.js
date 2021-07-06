import React, { PureComponent } from 'react'
import { Container, ImageWrapper, ImageOne, ImageTwo, DiscoundCard } from './styled';
//discount item1
import imageOne from '../../../../assets/img/discount-fish.png';
//discount item2
import imageTow from '../../../../assets/img/discount-shrimp.png';

export default class DiscountCard extends PureComponent {
    render() {
        return (
            <Container>
                <h1 style={{fontSize: '1.6vw'}}>特惠公告</h1>
                <ImageWrapper>
                    <figure>
                        <ImageOne src={imageOne} alt="item1"/>
                        <DiscoundCard/>
                    </figure>
                    <figure style={{borderRadius: '0 20px 20px 0'}}>
                        <ImageTwo src={imageTow} alt="item1"/>
                    </figure>
                </ImageWrapper>
            </Container>
        )
    }
}
