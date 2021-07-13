import React, { PureComponent } from 'react';
//icon
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
//css
import { Wrapper, Card, Money, BtnInfo } from './styled';
//JoinCard component
import JoinCount from '../join/JoinCount';
//photo fishingman
import snorkeling from '../../../../../assets/img/snorkeling.jpg';
//rank gold svg
import { ReactComponent as Silver } from '../../../../../assets/img/rank-svg/silver.svg';

const rankStyle = {
    zIndex: 5,
    position: 'absolute',
    width: '10%',
    top: '28.8%',
}

const iconStyle = {
    color: "#457B9D", 
    fontSize: '1.2vw'
}

export default class ActivityTwo extends PureComponent {
    render() {
        return (
             <>
                <Silver style={rankStyle}/>
                <Wrapper style={{opacity: '100%'}}>
                    <figure>
                        <img src={snorkeling} alt="activity1" />
                    </figure>
                    <Card>
                        <h2>龍洞 | 浮淺</h2>
                        <p>探索海洋世界 享受穿梭於海底的涼夏感 </p>
                        <div>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarFullOutline style={iconStyle}/>
                            <TiStarHalfOutline style={iconStyle}/>
                            <span style={{color: "#8A8A8A"}}>(27459)</span>
                        </div>
                        <Money>
                            <p>TWD <span>1000</span> (成人)</p>
                            
                            <p>截止日期: 16/29</p>
                        </Money>
                        <BtnInfo>活動詳情</BtnInfo>
                        <JoinCount />
                    </Card>
                </Wrapper>
            </>
        )
    }
}
