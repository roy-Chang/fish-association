import React, { PureComponent } from 'react'
import { Container } from './styled';
import { Link } from 'react-router-dom';



export default class NewBlog extends PureComponent {
    

    render() {
        return (
            <Container>
                <h1 style={{fontSize: '1.6vw'}}>最新札記分享</h1>
                <ul>
                    <li>2021/05/29   GO！化身美人魚的台灣秘境–龍洞浮潛＆絕美小峽谷攀岩 作者 By 小紅紅</li>
                    <li>2021/05/29   GO！化身美人魚的台灣秘境–龍洞浮潛＆絕美小峽谷攀岩 作者 By 小紅紅</li>
                    <li>2021/05/29   GO！化身美人魚的台灣秘境–龍洞浮潛＆絕美小峽谷攀岩 作者 By 小紅紅</li>
                </ul>
                <Link to="/travelNotes">
                    <button>查看更多</button>
                </Link>
            </Container>
        )
    }
}
