import React, { PureComponent } from 'react'
import { Title, ActivityWrapper, Fishing } from './styled'

import ActivityOne from './activity/ac-one/ActivityOne';
import ActivityTwo from './activity/ac-two/ActivityTwo';
import ActivityThree from './activity/ac-three/ActivityThree';
//conversation
import Conversation from './conversation/Conversation';
//fishing
import fishing from '../../../assets/img/homepage-ani/fishing.png';


export default class ThirdFloor extends PureComponent {
    render() {
        return (
            <>
              <Title>
                  <h1>地方體驗活動</h1>
                  <hr/>
              </Title>  
              <ActivityWrapper>
                  <ActivityOne />
                  <ActivityTwo />
                  <ActivityThree />
              </ActivityWrapper> 
                <Conversation/>
              <div>
                <Fishing>
                    <img src={fishing} alt="fishing"/>
                </Fishing>
              </div> 
                                  
            </>
        )
    }
}

