"use client"
import Link from 'next/link';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ title = "", gitLink = "", liveLink = "", imgLink = "", hrefLink = "", description = "" }){
    return (
        <>
            <Card variant="outlined" sx={{width: 320, padding: 1}} className="transition ease-in-out delay-100 bg-slate-400 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-200 z-0" >
                <div>
                    <h2 className='font-roboto text-md font-semibold'>{title}</h2>
                    <p className='font-roboto text-sm text-center mt-2'>{description}</p>
                    <Link href={gitLink} target='_blank'><IconButton aria-label="GitHub Link" variant="plain" color="neutral" size="sm" sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}  >
                        <GitHubIcon />
                    </IconButton></Link>
                    <Link href={liveLink} target='_blank'><IconButton aria-label="Live Link" variant="plain" color="neutral" size="sm" sx={{ position: 'absolute', top: '0.5rem', right: '2.5rem' }}  >
                        <LaunchIcon />
                    </IconButton></Link>
                    <AspectRatio minHeight="120px" maxHeight="300px">
                        <img src={imgLink} loading="lazy" alt="" />
                    </AspectRatio>
                    <div className='flex justify-center mt-2'>
                        <div className='flex justify-center bg-slate-500 w-20 rounded-md hover:bg-slate-400 font-roboto'>
                            <Link href={hrefLink}>Details</Link>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}