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
                <p className="text-slate-300 text-6xl slideInUp delay-300" >WeatherWiz!</p>
                <p className="text-slate-200 text-2xl mt-4 slideInUp delay-200">Developed a robust full stack MERN application in a tight timeline of 1.5 weeks, working collaboratively as a pair, demonstrating strong teamwork and time management skills. Utilized MOB programming techniques to construct a responsive weather web app, ensuring seamless usability on both desktop and mobile devices. Leveraged MongoDB/Mongoose and Express.js for the backend to efficiently store and manage city names, while employing React, Node.js, Bootstrap, React-Bootstrap, and React-Responsive for the frontend. By integrating these technologies with a weather API, we successfully delivered a real-time weather application catering to global users.</p>
                <div className='flex gap-2 items-center slideInUp delay-150'>
                    <Link href="https://github.com/lmikszta1/weather-wiz" target='_blank'><IconButton aria-label="GitHub Link" variant="plain" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }} fontSize="large">
                        <GitHubIcon />
                    </IconButton></Link>
                    <Link href="https://weatherwiz.onrender.com" target='_blank'><IconButton aria-label="Live Link" variant="plain" fontSize="large" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }}>
                        <LaunchIcon />
                    </IconButton></Link>
                </div>
                <div className='w-full max-w-5xl h-[1000px] slideInUp delay-0'>
                    <Carousel>
                        <img alt="first" src="https://i.imgur.com/iv6Epcm.png"/>
                        <img alt="second" src="https://i.imgur.com/A6wUZyq.png"/>
                        <img alt="third" src="https://i.imgur.com/TzOuE5a.png"/>
                        <img alt="fourth" src="https://i.imgur.com/c9jj9rT.png"/>
                    </Carousel>
                </div>
            </main>
        </div>
    )
}