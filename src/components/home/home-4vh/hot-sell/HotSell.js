import React, { PureComponent } from 'react'
import { Container, Left, Right } from './styled'
//unit
import Unit from './unit/Unit'
//crown
import { ReactComponent as Crown } from '../../../../assets/img/rank-svg/crown.svg'



export default class HotSell extends PureComponent {
    render() {
        return (
            <Container>
                <Left>              
                    <Unit color="#FFCC5B" text="生蠔"/>
                    <Unit color="#C9C4BB" text="扇貝"/>
                    <Unit color="#F18634" text="章魚"/>
                    <Unit text="鮭魚"/>
                    <Unit text="櫻花蝦"/>
                </Left>
                <Right>
                    <Unit text="生蠔"/>
                    <Unit text="蒲燒鰻"/>
                    <Unit text="秋刀魚"/>
                    <Unit text="龍蝦"/>
                    <Unit text="草蝦"/>
                </Right>
            </Container>
        )
    }
}
