"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { cn } from "@/utils/cn"

interface ImageGalleryProps {
    images: string[]
    alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFullScreen, setIsFullScreen] = useState(false)

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isFullScreen) return
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'Escape') setIsFullScreen(false)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isFullScreen, currentIndex])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const currentImage = images[currentIndex] || '/placeholder-car.jpg'

    return (
        <div className="space-y-4">
            {/* Main Image Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={currentImage}
                        alt={`${alt} - View ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </>
                )}

                {/* Full Screen Trigger */}
                <button
                    onClick={() => setIsFullScreen(true)}
                    className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 text-white backdrop-blur-md hover:bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-medium"
                >
                    <Maximize2 className="h-4 w-4" /> Full Screen
                </button>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={cn(
                                "relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300",
                                currentIndex === idx
                                    ? "border-primary scale-95"
                                    : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}

            {/* Full Screen Lightbox */}
            <AnimatePresence>
                {isFullScreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setIsFullScreen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[110]"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={currentImage}
                                    alt={alt}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </motion.div>

                            {/* Lightbox Navigation */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-primary transition-all"
                                    >
                                        <ChevronLeft className="h-10 w-10" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-primary transition-all"
                                    >
                                        <ChevronRight className="h-10 w-10" />
                                    </button>
                                </>
                            )}

                            {/* Stats/Counter */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                                Image {currentIndex + 1} of {images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
