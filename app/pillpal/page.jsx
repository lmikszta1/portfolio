"use client"
import Nav from '../components/nav/page';

export default function Page(){
    return (
        <>
            <Nav />
            <main className="flex max-h-screen min-h-screen flex-col items-center justify-start p-10 gap-5">
                <h1>This is pillpal</h1>
            </main>
        </>
    )
}