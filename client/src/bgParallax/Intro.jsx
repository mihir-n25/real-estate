import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

import HouseImage from '../Image/download2.jpeg';

const Intro = () => {

  const container = useRef();
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ['192vh start' , 'end start']
  })

  const y = useTransform(scrollYProgress , [0,1] , ["0vh","150vh"])

  return (
    <div style={{height : "100vh" , overflow : "hidden"}}>
    <motion.div style={{position : "relative" , height : "100vh" , y : y }}>
      <img
      src={HouseImage}
      alt='bg'
      style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    </motion.div>
    </div>
  )
}

export default Intro