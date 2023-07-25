"use client"
import Link from 'next/link'
import { Drawer } from '@mui/material'
import Button from '@mui/joy/Button'
import * as React from 'react';



export default function Nav() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div className="flex justify-center mt-5">
            <Button onClick={toggleDrawer('top', true)} size="md" variant="solid" color="neutral" className="hover:text-slate-300 mt-5">MENU</Button>
            <Drawer
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                <div className="flex justify-evenly bg-slate-700 h-16">
                    <Button color="neutral" size="lg" variant="outline" component={Link} href="/" className='hover:text-slate-300'>Home</Button>
                    <Button color="neutral" size="lg" variant="outline" component={Link} href="/projects" className='hover:text-slate-300'>Projects</Button>
                </div>
            </Drawer>
        </div>
    )
}