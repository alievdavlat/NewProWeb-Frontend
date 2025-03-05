import React from 'react'
import { cn } from '@/lib/utils'
export function VideoBg({videoClass}) {
    return (
        <video poster={'/images/banner/poster-img.jpg'} className={cn(`video-size ${videoClass}`)} muted loop autoPlay preload="none">
        <source src={'/videos/hero-video.webm'} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    )
}