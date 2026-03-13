import React from 'react'
import './About.css'
import ContentBlock from './ContentBlock'
import Staff from '../home/Staff'
import Parallex from './Parallex'
import Joinus from './Joinus'
import Program from './Program'

const About = () => {
  return (
    <div>
      <ContentBlock/>
       <Parallex hero="A Happy Beginning for Lifelong Learning"/>
      <Staff/>
   <Joinus/>
      <Program/>

    </div>
  )
}

export default About
