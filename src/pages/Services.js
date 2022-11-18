import React from 'react'
import Contant from '../components/Contant'
import Header from '../components/Header'
import Image from '../Images/Library_1.jpg'
import {motion} from 'framer-motion'
import { animationThree } from '../animation'
const Services = () => {
    return(
        <motion.div initial = 'out' animate = 'in' exit='out' variants={animationThree}>
            <Header />
            <Contant image={Image} title = 'Mission' desc='Our mission is to provide books the world and make   knowledge accessible and useful.'/>
            Services
        </motion.div>
    )
}

export default Services