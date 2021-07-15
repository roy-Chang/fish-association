import React, { PureComponent } from 'react'
//css
import { CardWrapper, Card, ItemWrapper } from './styled';
//hot sell
import HotSell from './hot-sell/HotSell';
//item
import Item from './item/Item';


export default class FourFloor extends PureComponent {
    render() {
        return (
            <div>
                <CardWrapper>
                    <Card>
                        <h1>熱銷排行榜</h1>
                        <hr/>
                        <HotSell/>
                        <h1 style={{marginTop: '3vh'}}>新鮮漁貨大搶購</h1>
                        <hr style={{width: '12vw'}}/>
                        <ItemWrapper>
                            <Item/>
                        </ItemWrapper>
                    </Card>
                </CardWrapper>
            </div>
        )
    }
}
