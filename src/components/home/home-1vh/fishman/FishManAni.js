import React, { PureComponent } from 'react'
import fishman from '../../../../assets/img/homepage-ani/fishman.png';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring'




const Fishmann = styled.figure`
    width: 20vw;
    height: 42vh;
    position: absolute;
    top: 0;
    right: 25%;
    margin: 0;
    z-index: 5;
`

export default class FishManAni extends PureComponent {
    
    render() {
        return (
            <div>
                <Fishmann>
                    <LoopObject/>
                </Fishmann>
            </div>
            
        )
    }
}

function LoopObject() {
    const styles = useSpring({
      loop: { reverse: false },
      config: { duration: 8000 },
      from: { x: 400, y: -500 },
      to: { x: 0, y: 20 },
    })
  
    return (
      <animated.img
        src={fishman}
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          ...styles,
        }}
      />
    )
  }







 

