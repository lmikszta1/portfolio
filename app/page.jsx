"use client"
import Nav from './components/nav/page'
import Box from '@mui/material/Box'
import Image from 'next/image'
import profilePic from "./images/profile_pic.jpeg"
import "./style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <div className='slideInUp'>
                <div className='sticky top-0 slideInUp delay-500 flex justify-center items-center'>
                    <Nav />
                </div>
            <div className='flex justify-center mt-5 slideInUp delay-300'>
                <Image src={profilePic} width={225} height={100} alt="LM pic" className='rounded-full border-2 border-slate-300' quality={100}/>
            </div>
            <h1 className="text-6xl text-slate-400 flex justify-center mt-5 font-roboto slideInUp delay-200 text-center">Luke Mikszta | Full Stack Developer</h1>
            <main className="flex min-h-max flex-col items-center justify-evenly p-7 text-slate-400">
                <div className='justify-self-start text-center w-1/2 slideInUp delay-150'>
                    <p className='text-2xl font-roboto'>Welcome to my portfolio site!</p>
                    <p className='text-xl font-roboto mt-5'>I&apos;m a full stack developer currently based in Orlando, Florida and I&apos;m looking for work! I&apos;m willing to relocate or work remotely. If you are interested in working with me feel free to connect on LinkedIn and send me a message!</p>
                </div>
                <div className='mt-10 flex gap-5 slideInUp delay-0'>
                    <a href="https://www.linkedin.com/in/luke-mikszta/" target='_blank'><LinkedInIcon aria-label="LinkedIn" variant="plain" color="neutral" fontSize="large" sx={{ ":hover":{color: '#f8fafc'} }} /></a>
                    <a href="https://github.com/lmikszta1" target='_blank'><GitHubIcon aria-label="GitHub" variant="plain" color="neutral" fontSize="large" sx={{ ":hover":{color: '#f8fafc'} }}/></a>
                </div>
            </main>
        </div>
    )
}
