"use client"
import Nav from '../components/nav/page';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/joy/IconButton';
import Link from 'next/link';
import { Carousel } from 'flowbite-react'
import "../style.css"

export default function Page(){
    return (
        <div className='slideInUp'>
            <div className='sticky top-0 flex justify-center items-center z-10 slideInUp delay-500'>
                <Nav />
            </div>
            <main className="flex max-h-screen min-h-screen flex-col items-center justify-start p-10 gap-5 font-roboto text-center">
                <p className="text-slate-300 text-6xl slideInUp delay-300" >PillPal</p>
                <p className="text-slate-200 text-2xl mt-4 slideInUp delay-200">Introducing our Django-powered group project — a user-friendly web application developed in just one week. Seamlessly track your medications and check stock at nearby pharmacies. Simplify your health management with our intuitive interface, designed to empower users. Join us in revolutionizing medication management for everyone!</p>
                <div className='flex gap-2 items-center slideInUp delay-150'>
                    <Link href="https://github.com/lmikszta1/Project-2-Recipes" target='_blank'><IconButton aria-label="GitHub Link" variant="plain" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }} fontSize="large">
                        <GitHubIcon />
                    </IconButton></Link>
                    <Link href="https://recipelists.fly.dev" target='_blank'><IconButton aria-label="Live Link" variant="plain" fontSize="large" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }}>
                        <LaunchIcon />
                    </IconButton></Link>
                </div>
                <div className='w-full max-w-5xl h-[1500px] slideInUp delay-0'>
                    <Carousel>
                        <img alt="first" src="https://i.imgur.com/DSQnESB.png?2"/>
                        <img alt="second" src="https://i.imgur.com/Pd2T1tO.png"/>
                        <img alt="third" src="https://i.imgur.com/SlXFV7r.png"/>
                        <img alt="fourth" src="https://i.imgur.com/SA07P26.png?1"/>
                        <img alt="fifth" src="https://i.imgur.com/0Ea1hBI.png"/>
                        <img alt="sixth" src="https://i.imgur.com/5vw9JWG.png"/>
                        <img alt="seventh" src="https://i.imgur.com/ceTPevZ.png"/>
                        <img alt="eighth" src="https://i.imgur.com/ceTPevZ.png"/>
                        <img alt="ninth" src="https://i.imgur.com/iNlseIy.png"/>
                        <img alt="tenth" src="https://i.imgur.com/kBWlrNL.png"/>
                    </Carousel>
                </div>
            </main>
        </div>
    )
}