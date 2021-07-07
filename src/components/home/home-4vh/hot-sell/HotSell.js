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
                    <Unit color="#FFCC5B"/>
                    <Unit color="#C9C4BB"/>
                    <Unit color="#F18634"/>
                    <Unit />
                    <Unit />
                </Left>
                <Right>
                    <Unit/>
                    <Unit/>
                    <Unit/>
                    <Unit/>
                    <Unit/>
                </Right>
            </Container>
        )
    }
}
