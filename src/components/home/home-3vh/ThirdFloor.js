import React, { PureComponent } from 'react'
import { Navigation, Title, ActivityWrapper } from './styled'

import Activity from './activity/Activity';
//rank svg
// import { ReactComponent as Golden } from '../../../images/rank-svg/golden.svg';



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
                  <Activity />
                  <Activity />
                  <Activity />
              </ActivityWrapper>  
                                  
            </>
        )
    }
}

