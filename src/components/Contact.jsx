import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import React from 'react'
import "./componentStyles/Contact.css"

export const Contact = () => {
  return (
    <div id="contact" className=''>
        <div className='min-h-[90vh] flex flex-col items-center justify-center w-[90%] m-auto'>
            <div className='md:mb-[80px] mb-[40px] flex flex-col items-center justify-center w-[100%]'>
                <h2 className='text-[--color-header]'><span>03. </span>CONTACT</h2>
                <p className='mt-[20px] max-w-[600px] text-center desc'>If you have any questions, ideas, collaboration opportunities, or just want to connect, feel free to get in touch with me.</p>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center w-[100%] max-w-[1080px] card'>
                <div className='flex justify-center items-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                    <p><a href="mailto:bharathbg882@gmail.com">bharathbg882@gmail.com</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                    <p><a href="tel:+919538314487">+91 95383 14487</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaLinkedin></FaLinkedin></div>
                    <p><a href="https://www.linkedin.com/in/bharath-gowda-p/" target='_blank' rel='noreferrer'>Bharath-Gowda-P</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaGithub></FaGithub></div>
                    <p><a href="https://github.com/Bharath-Gowda-P" target='_blank' rel='noreferrer'>Bharath-Gowda-P</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaInstagram></FaInstagram></div>
                    <p><a href="https://www.instagram.com/bharaaathgowda/" target='_blank' rel='noreferrer'>bharaaathgowda</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
