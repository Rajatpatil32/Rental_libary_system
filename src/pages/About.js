import React from 'react'
import Contant from '../components/Contant'
import Header from '../components/Header'
import Image from '../Images/about_us.jpg'
import {motion} from 'framer-motion'
import { animationTwo } from '../animation'
const About = () => {
    return(
        <motion.div initial = 'out' animate = 'in' exit='out' variants=
        {animationTwo}>
            <Header /> 
            <Contant image={Image} title = 'We Offer!' desc='We provide a variety of services for you to learn, thrive and also have fun!'/>
            About
        </motion.div>
    )
}

export default About