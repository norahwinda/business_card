import React from 'react'
import profile from '../Images/profile.png'
import {GrMail} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'

export default function Main(){
    return(
        <div className='div--main'>
         <img className="profile" src={profile} alt='My profile'/>
         <h4 className='my--name'>Norah Winda</h4>
         <h5 className='major'>Frontend Developer</h5>
         <h6 className='website'>norahwinda.website</h6>
         <button className='mail--btn'><GrMail /> Mail</button>
         <button className='ln--btn'> <BsLinkedin/> LinkedIn</button>
         <h3 className='about'>About</h3>
         <p className='about--p'>I am a Frontend Developer, a web fanatic and a crypto enthusiast. 
            I like to think that am a very flexible and resourceful person. 
            Even when things change at the last minute, I am able to adjust 
            accordingly and meet tight deadlines. 
            Am always ready to learn new things.</p>
            <h3 className='interests'>Interests</h3>
            <p className='interests--p'>Food expert. Music scholar. Reader. Internet Fanatic.
                 Entrepreneur.Travel geek. Pop culture ninja. Coffee Fanatic.</p>
        </div>
    )
}