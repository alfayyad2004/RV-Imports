"use client"

import Image from 'next/image'

export function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
            <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
                <Image
                    src="/logo-new.png"
                    alt="R&R Trading Logo"
                    fill
                    className="object-contain brightness-0 invert"
                    priority
                />
            </div>
            <div className="mt-8 flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            </div>
        </div>
    )
}
