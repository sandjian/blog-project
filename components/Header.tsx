"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import { IconMaximize, IconMinimize, IconNotification } from '@tabler/icons-react';
import React, { useState } from 'react';

export default function Header() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { user } = useUser(); // Obtener la información del usuario

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullscreen(true);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    setIsFullscreen(false);
                });
            }
        }
    }

    return (
        <header className=' top-0 w-full bg-gray-100 p-4   flex items-center justify-between'>
            <div className=' flex gap-2 items-center'>
                <h1 className=' font-bold text-black'>
                    ADMIN
                </h1>
            </div>
            <div className='flex gap-2 items-center'>
                <div
                    onClick={toggleFullscreen}
                    className='w-10 h-10 bg-slate-200 text-black text-xl rounded-full flex items-center justify-center cursor-pointer'
                >
                    {isFullscreen ? <IconMinimize /> : <IconMaximize />}
                </div>
                <div>
                    {/* Mostrar el nombre del usuario autenticado */}
                    <h3>Welcome {user?.fullName || "User"}</h3>
                </div>
                <div className='cursor-pointer'>
                    <IconNotification className='w-10 h-10'/>
                </div>
                <div className='cursor-pointer'>
                    <UserButton />
                </div>
            </div>
        </header>
    );
}
