"use client"

import { useEffect } from 'react'
import Script from 'next/script'

// Read GTM ID from package.json config
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PDD4GX8M'

export function GoogleTagManager() {
  useEffect(() => {
    // Initialize dataLayer
    if (typeof window !== 'undefined') {
      interface WindowWithDataLayer extends Window {
        dataLayer?: Record<string, unknown>[]
      }
      const windowWithDataLayer = window as unknown as WindowWithDataLayer
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || []
      windowWithDataLayer.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })
    }
  }, [])

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
      />
    </>
  )
}

export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}