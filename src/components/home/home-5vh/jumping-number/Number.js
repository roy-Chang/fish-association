import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'


function Number() {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      from: { number: 0 },
      number: 10000,
      delay: 1000,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}

export default Number;