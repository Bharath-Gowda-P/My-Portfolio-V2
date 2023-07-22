import React from 'react'
import "./componentStyles/Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='flex flex-col p-[2rem] gap-[0.5rem] text-[0.9rem] items-center'>
            <p>Built with passion and React.js by Bharath Gowda.</p>
            <p className='text-[10px]'>Codeemonk <span>&copy;</span> 2023 - Crafting Tomorrow's Tech, Today.</p>
        </div>
    </div>
  )
}
