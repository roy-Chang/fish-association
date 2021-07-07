import React, { PureComponent } from 'react';
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
//css
import { Wrapper, Card, Money, BtnInfo } from './styled';
//JoinCard component
import JoinCount from '../join/JoinCount';
//photo fishingman
import aquarium from '../../../../../assets/img/aquarium.jpg';
//rank gold svg
import { ReactComponent as Copper } from '../../../../../assets/img/rank-svg/copper.svg';

const rankStyle = {
    zIndex: 5,
    position: 'absolute',
    width: '10%',
    top: '62%',
}

export default class ActivityThree extends PureComponent {
    render() {
        return (
             <>
                <Copper style={rankStyle}/>
                <Wrapper style={{opacity: '100%'}}>
                    <figure>
                        <img src={aquarium} alt="activity1" />
                    </figure>
                    <Card>
                        <h2>基隆 | 海生館</h2>
                        <p>豐富的海洋之旅 享受親子時光最好的選擇 </p>
                        <div>
                            <FontAwesomeIcon icon={faStar} color="#457B9D"/>
                            <FontAwesomeIcon icon={faStar} color="#457B9D"/>
                            <FontAwesomeIcon icon={faStar} color="#457B9D"/>
                            <FontAwesomeIcon icon={faStar} color="#457B9D"/>
                            <FontAwesomeIcon icon={faStarHalfAlt} color="#457B9D"/>
                            <span style={{color: "#8A8A8A"}}>(27459)</span>
                        </div>
                        <Money>
                            <p>TWD <span>500</span> (成人)</p>
                            <p>TWD <span>250</span> (成人)</p>
                            
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
