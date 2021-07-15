import React, { PureComponent } from 'react';

//icon
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
//css
import { Wrapper, Card, Money, BtnInfo } from './styled';
//JoinCard component
import JoinCount from '../join/JoinCount';
//photo fishingman
import fishing from '../../../../../assets/img/fishing.jpg';
//rank gold svg
import { ReactComponent as Gold } from '../../../../../assets/img/rank-svg/golden.svg';

const rankStyle = {
    zIndex: 5,
    position: 'absolute',
    width: '10%',
    top: '-5%',
}

const iconStyle = {
    color: "#457B9D", 
    fontSize: '1.2vw'
}

export default class ActivityOne extends PureComponent {
    render() {
        return (
             <>
                <Gold style={rankStyle}/>
                <Wrapper style={{opacity: '100%'}}>
                    <figure>
                        <img src={fishing} alt="activity1" />
                    </figure>
                    <Card>
                        <h2>海釣 | (正濱漁港/深澳漁港/龜吼漁港)</h2>
                        <p>遊覽各漁港當地特色 品嘗當地海鮮 海釣活動 </p>
                        <div>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarHalfOutline style={iconStyle}/>
                            <span style={{color: "#8A8A8A"}}>(27459)</span>
                        </div>
                        <Money>
                            <p>TWD <span>500</span> (成人) / <span>250</span> (小孩)</p>
                            <p>截止日期: 5/29</p>
                        </Money>
                        <BtnInfo>活動詳情</BtnInfo>
                        <JoinCount />
                    </Card>
                </Wrapper>
            </>
        )
    }
}
