"use client"
import Nav from '../components/nav/page';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/joy/IconButton';
import Link from 'next/link';
import { Carousel } from 'flowbite-react'

export default function Page(){
    return (
        <div className=''>
            <div className='sticky top-0 '>
                <Nav />
            </div>
            <main className="flex max-h-screen min-h-screen flex-col items-center justify-start p-10 gap-5 font-roboto">
                <p className="text-slate-300 text-6xl" >Blackjack!</p>
                <p className="text-slate-200 text-2xl mt-4">Blackjack web application built using vanilla Javascript, HTML and CSS.</p>
                <div className='flex gap-2 items-center'>
                    <Link href="https://github.com/lmikszta1/Blackjack-Project" target='_blank'><IconButton aria-label="GitHub Link" variant="plain" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }} fontSize="large"  >
                        <GitHubIcon />
                    </IconButton></Link>
                    <Link href="https://lmikszta1.github.io/Blackjack-Project/" target='_blank'><IconButton aria-label="Live Link" variant="plain" fontSize="large" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }} >
                        <LaunchIcon />
                    </IconButton></Link>
                </div>
                <div className='w-full max-w-6xl h-[1000px]'>
                    <Carousel>
                        <img alt="first" src="https://camo.githubusercontent.com/a5d41e3f1390ee70addc4ac377532b7eca1dca3d13da2cc29a7b5173fbdab4ac/68747470733a2f2f692e696d6775722e636f6d2f567846534851592e706e67"/>
                        <img alt="second" src="https://camo.githubusercontent.com/3b7feafbef5014c5eb2fee984cb074a7cdf6acf35bfc9a347409575153afabd6/68747470733a2f2f692e696d6775722e636f6d2f4e64316f554e6c2e706e67"/>
                        <img alt="second" src="https://camo.githubusercontent.com/5e520030c08cebb338dea05c5b118b016e7ee6026c1c152848411f61f971c1a7/68747470733a2f2f692e696d6775722e636f6d2f753432436a35432e706e67"/>
                        <img alt="second" src="https://camo.githubusercontent.com/139920fc72cf980e2abaf621955cb843b1c2b49b292e5f55ff54a4ad9e19064a/68747470733a2f2f692e696d6775722e636f6d2f34724975566d432e706e67"/>
                        <img alt="second" src="https://camo.githubusercontent.com/a405776838795e4d2b40c3fd57d2209cf2b64213a052d32126aa2642b523bd55/68747470733a2f2f692e696d6775722e636f6d2f48424c383734632e706e67"/>
                    </Carousel>
                </div>
            </main>
        </div>
    )
}