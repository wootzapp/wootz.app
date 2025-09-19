"use client"

import { useEffect } from 'react'
import Script from 'next/script'

// Read GA ID from package.json config
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WZ7S5T4HCX'

export function GoogleAnalytics() {
  useEffect(() => {
    // Initialize dataLayer and gtag function
    if (typeof window !== 'undefined') {
      interface WindowWithGtag extends Window {
        dataLayer?: unknown[]
        gtag?: (...args: unknown[]) => void
      }
      const windowWithGtag = window as unknown as WindowWithGtag
      
      windowWithGtag.dataLayer = windowWithGtag.dataLayer || []
      
      function gtag(...args: unknown[]) {
        windowWithGtag.dataLayer?.push(args)
      }
      
      windowWithGtag.gtag = gtag
      
      // Initialize gtag
      gtag('js', new Date())
      gtag('config', GA_ID)
    }
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `
        }}
      />
    </>
  )
}