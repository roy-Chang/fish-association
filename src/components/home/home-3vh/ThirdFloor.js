import React, { PureComponent } from 'react'
import { Navigation, Title, ActivityWrapper } from './styled'

import ActivityOne from './activity/ac-one/ActivityOne';
import ActivityTwo from './activity/ac-two/ActivityTwo';
import ActivityThree from './activity/ac-three/ActivityThree';


export default class ThirdFloor extends PureComponent {
    render() {
        return (
            <>
              <Navigation/>
              <Title>
                  <h1>地方體驗活動</h1>
                  <hr/>
              </Title>  
              <ActivityWrapper>
                  <ActivityOne />
                  <ActivityTwo />
                  <ActivityThree />
              </ActivityWrapper>  
                                  
            </>
        )
    }
}

