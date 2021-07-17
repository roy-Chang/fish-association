import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { ReactComponent as Ship } from '../../../../assets/img/homepage-ani/shipani.svg'
import { ReactComponent as GoodThing } from '../../../../assets/img/homepage-ani/100.svg'


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')
//open click-> true & dbclick -> false
function Gift() {
  const [open, setOpen] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
    to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 }
  })

  return (
      <>
        {open === false ? ('') : (
            <>
                <div className="shipWrapper">
                    <LoopFunction/>
                </div>
                <Money/>
            </>
        )}
        <div onClick={() => setOpen({open: true})}>
        <animated.svg style={{ transform, opacity }} viewBox="0 0 1278 446">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8" />
            <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
          </filter>
        </defs>
        <g filter="url(#water)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 15 7">
                <path d="M 1 0 L 1 0 C -5 0 -4 7 0 7 C 2 7 3 6 3 4 L 2 4 L 0 4 C 2 5 1 6 0 6 C -1 6 -2 5 -2 4 C -2 2 -1 1 2 2 Z M 4 4 L 4 7 L 5 7 L 5 4 L 4 4 Z M 4 2 L 4 2 A 1 1 0 0 0 4 3 A 1 1 0 0 0 5 3 A 1 1 0 0 0 5 2 A 1 1 0 0 0 4 2 Z M 7 7 L 7 3 L 6 3 L 6 2 L 7 2 C 7 1 7 0 8 0 L 9 0 L 9 1 C 8 1 8 1 8 2 L 9 2 L 9 3 L 8 3 L 8 7 L 7 7 Z M 10 4 L 10 3 L 11 3 L 11 2 L 12 2 L 12 3 L 13 3 L 13 4 L 12 4 C 12 6 12 6 13 6 L 13 7 C 12 7 11 7 11 6 L 11 4 L 10 4 Z" fill="#F1426C"/>
            </svg>
          <animated.path
            d="M 1 0 L 1 0 C -5 0 -4 7 0 7 C 2 7 3 6 3 4 L 2 4 L 0 4 C 2 5 1 6 0 6 C -1 6 -2 5 -2 4 C -2 2 -1 1 2 2 Z M 4 4 L 4 7 L 5 7 L 5 4 L 4 4 Z M 4 2 L 4 2 A 1 1 0 0 0 4 3 A 1 1 0 0 0 5 3 A 1 1 0 0 0 5 2 A 1 1 0 0 0 4 2 Z M 7 7 L 7 3 L 6 3 L 6 2 L 7 2 C 7 1 7 0 8 0 L 9 0 L 9 1 C 8 1 8 1 8 2 L 9 2 L 9 3 L 8 3 L 8 7 L 7 7 Z M 10 4 L 10 3 L 11 3 L 11 2 L 12 2 L 12 3 L 13 3 L 13 4 L 12 4 C 12 6 12 6 13 6 L 13 7 C 12 7 11 7 11 6 L 11 4 L 10 4 Z"
            fill="lightblue"
          />
        </g>
      </animated.svg>


    </div>
      </>
    
  )
}


function LoopFunction() {
    const styles = useSpring({
      config: { duration: 3500 },
      from: { y: "10%" },
      to: { y: "75%" },
    })
  
    return (
      <animated.div style={{...styles}}>
          <Ship className="ship"/>
      </animated.div>
    )
}

function Money() {
    //const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0, x: "25%", y: 120 },
      reset: true,
      delay: 3500,
      //config: config.molasses,
      //onRest: () => set(!flip),
    })
  
    return (
        <>
          <animated.div className="goodthing" style={{...props}} >
            <GoodThing/>
          </animated.div>
          <animated.p style={{
              paddingTop: '2vh',
              fontSize: "1.6vw",
              fontWeight: 900,
              ...props
            }} >
            恭喜您獲得了100元折價券<br/>歡迎每周二來領取獎勵喔
          </animated.p>
        </>
    
    )
}

export default Gift;