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
            src="//code.tidio.co/rvvaa2awq7yffy4lpgmppbajxvaojaol.js"
            strategy="lazyOnload"
            async
        />
    )
}
