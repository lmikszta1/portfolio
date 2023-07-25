"use client"
import Nav from '../components/nav/page';
import Typography from '@mui/joy/Typography';

export default function Page(){
    return (
        <>
            <Nav />
            <main className="flex max-h-screen min-h-screen flex-col items-center justify-start p-10 gap-5">
                <p className="text-slate-300 text-6xl" >Blackjack!</p>
                <p className="text-slate-200 text-3xl" >Blackjack web application built using vanilla Javascript, HTML and CSS.</p>
            </main>
        </>
    )
}