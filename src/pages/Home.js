import React from 'react'
import Contant from '../components/Contant'
import Header from '../components/Header'
import Image from '../Images/Library_1.jpg'
import { motion } from 'framer-motion'
import {animationOne, transition} from '../animation';
class Home extends React.Component {
    render(){
    return(
        <div>
        <motion.div
            initial = 'out' animate = 'in' exit='out' variants={animationOne} transition = {transition}
        >
            <Header />
            <Contant image= { Image} title = 'Welcome to Rental Library' desc='Have your book for Read'/>
        </motion.div>
        </div>
    )
    }

}

export default Home