import React from 'react'
import { FaDiscord, FaInstagram, FaTwitch } from 'react-icons/fa' 

const links = [
    {href : 'https://discord.com', icon: <FaDiscord />},
    {href : 'https://instagram.com', icon: <FaInstagram />},
    {href : 'https://twitch.com', icon: <FaTwitch />},

]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center uppercase font-circular-web text-md md:text-left '>
              &#123; / &#125; BY Khyzer
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link) => (
                    <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {link.icon}
                        </a>
                ))}
            </div>
            <a href="#privacy-policy" className='text-center text-md hover:underline md:text-right lg:mr-5'>
                   Privacy Policy 
            </a>
        </div>
    </footer>
  )
}

export default Footer