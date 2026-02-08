"use client"

import { usePathname } from 'next/navigation'
import Script from 'next/script'

export function TidioChat() {
    const pathname = usePathname()

    // Don't show chatbot on admin routes
    if (pathname?.startsWith('/admin')) {
        return null
    }

    return (
        <Script
            src="//code.tidio.co/tnej2zbqwbmf6fzlpbadomv1w4pve9i6.js"
            strategy="lazyOnload"
        />
    )
}
