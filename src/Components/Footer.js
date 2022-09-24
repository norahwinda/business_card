import React from 'react'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

export default function Footer()
{
    return(
        <div className='div--footer'>
          <FaTwitterSquare className='twitter' />
          <AiOutlineFacebook className='facebook' />
          <AiOutlineInstagram  className='instagram'/>
          <AiFillGithub className='github'/>
        </div>
    )
}