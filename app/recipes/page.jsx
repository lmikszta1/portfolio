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
                <p className="text-slate-300 text-6xl slideInUp delay-300" >Recipe Lists!</p>
                <p className="text-slate-200 text-2xl mt-4 slideInUp delay-200">This is my second project I completed while at General Assembly, an Express.js web app, a culinary treasure! Pulling delicious recipes from TheMealDB API, you can curate personalized lists — favorites or least favorites — seamlessly. Explore recipes without logging in, and privately enjoy your custom lists. Join my gastronomic adventure on the live website and GitHub linked below! A blend of flavor and web mastery awaits. Let&apos;s cook up something extraordinary!</p>
                <div className='flex gap-2 items-center slideInUp delay-150'>
                    <Link href="https://github.com/lmikszta1/Project-2-Recipes" target='_blank'><IconButton aria-label="GitHub Link" variant="plain" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }} fontSize="large">
                        <GitHubIcon />
                    </IconButton></Link>
                    <Link href="https://recipelists.fly.dev" target='_blank'><IconButton aria-label="Live Link" variant="plain" fontSize="large" sx={{ color: "#94a3b8", ":hover": {color: "#334155"} }}>
                        <LaunchIcon />
                    </IconButton></Link>
                </div>
                <div className='w-full max-w-6xl h-[1000px] slideInUp delay-0'>
                    <Carousel>
                        <img alt="first" src="https://camo.githubusercontent.com/0e2369be1172576c67c99bece6ef16578f800ad1884ba3554cdb739fb7aa4103/68747470733a2f2f692e696d6775722e636f6d2f797078433043702e706e67"/>
                        <img alt="second" src="https://camo.githubusercontent.com/3f949620366d26d423627b49fd869ab9499281935be890a4aaeb3636b646b18b/68747470733a2f2f692e696d6775722e636f6d2f4c32684c56776e2e706e67"/>
                        <img alt="third" src="https://camo.githubusercontent.com/caa6d18b641a234ddd2331120b7af05b6d1193fdcef45db054f9627ec00eda87/68747470733a2f2f692e696d6775722e636f6d2f396e58355242472e706e67"/>
                        <img alt="fourth" src="https://camo.githubusercontent.com/5356a0dce273f87d46dfc6280a5e290d35b386eea1fea3092ee2a29ea9a84ad0/68747470733a2f2f692e696d6775722e636f6d2f455054614f56412e706e67"/>
                        <img alt="fifth" src="https://camo.githubusercontent.com/32e1f4c4f1f4f1b3527cd22b3b8aceefdc1fda80742cce7296cdfab35a0f5de1/68747470733a2f2f692e696d6775722e636f6d2f42546e6e3138522e706e67"/>
                        <img alt="sixth" src="https://camo.githubusercontent.com/1ae6fb0e90064ca523c585464f69f2a0fea3d244ea930bdc2c75a3bcaef10d8b/68747470733a2f2f692e696d6775722e636f6d2f646e37543541362e706e67"/>
                        <img alt="seventh" src="https://camo.githubusercontent.com/b6dc6c001129fcadc4d2702819060ab1c91db9d67efe010f33f8b1cbe4d160fb/68747470733a2f2f692e696d6775722e636f6d2f376439634e726a2e706e67"/>
                    </Carousel>
                </div>
            </main>
        </div>
    )
}