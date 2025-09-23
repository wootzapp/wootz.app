"use client"

import { useEffect } from 'react'
import Script from 'next/script'

// Read GTM ID from package.json config
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PDD4GX8M'

export function GoogleTagManager() {
  useEffect(() => {
    // Initialize dataLayer and gtag event tracking
    if (typeof window !== 'undefined') {
      interface WindowWithDataLayer extends Window {
        dataLayer?: Record<string, unknown>[]
        gtagSendEvent?: (url: string) => boolean
      }
      const windowWithDataLayer = window as unknown as WindowWithDataLayer
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || []
      windowWithDataLayer.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      })

      // Helper function to get URL parameters
      const getUrlParameter = (name: string) => {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get(name)
      }

      // Helper function to preserve URL parameters when redirecting
      const preserveUrlParams = (targetUrl: string) => {
        const currentParams = new URLSearchParams(window.location.search)
        const gclid = currentParams.get('gclid')
        const fbclid = currentParams.get('fbclid')
        const msclkid = currentParams.get('msclkid')
        
        if (gclid || fbclid || msclkid) {
          const targetUrlObj = new URL(targetUrl)
          if (gclid) targetUrlObj.searchParams.set('gclid', gclid)
          if (fbclid) targetUrlObj.searchParams.set('fbclid', fbclid)
          if (msclkid) targetUrlObj.searchParams.set('msclkid', msclkid)
          return targetUrlObj.toString()
        }
        return targetUrl
      }

      // Capture GCLID and other tracking parameters on page load
      const gclid = getUrlParameter('gclid')
      const fbclid = getUrlParameter('fbclid')
      const msclkid = getUrlParameter('msclkid')
      
      if (gclid || fbclid || msclkid) {
        // Send tracking parameters to GTM dataLayer
        windowWithDataLayer.dataLayer?.push({
          event: 'page_view_with_tracking_params',
          gclid: gclid,
          fbclid: fbclid,
          msclkid: msclkid
        })
      }

      // Add global gtag event tracking function for lead forms
      windowWithDataLayer.gtagSendEvent = function(url: string) {
        const finalUrl = preserveUrlParams(url)
        
        const callback = function () {
          if (typeof finalUrl === 'string') {
            window.location.href = finalUrl
          }
        }
        
        // Use GTM's dataLayer to send the event with tracking parameters
        windowWithDataLayer.dataLayer?.push({
          event: 'book_demo_click',
          event_callback: callback,
          event_timeout: 2000,
          gclid: gclid,
          fbclid: fbclid,
          msclkid: msclkid,
          destination_url: finalUrl
        })
        
        return false
      }

      // Add click event listeners for lead form buttons
      const handleLeadFormClick = (e: Event) => {
        const target = e.target as HTMLElement
        const link = target.closest('a[href*="calendar.app.google"]')
        if (link) {
          e.preventDefault()
          const url = link.getAttribute('href')
          if (url) {
            const finalUrl = preserveUrlParams(url)
            
            // Send GTM event immediately
            windowWithDataLayer.dataLayer?.push({
              event: 'book_demo_click',
              gclid: gclid,
              fbclid: fbclid,
              msclkid: msclkid,
              destination_url: finalUrl
            })
            
            // Navigate after a short delay to ensure event is sent
            setTimeout(() => {
              window.open(finalUrl, '_blank')
            }, 100)
          }
        }
      }

      // Attach event listeners to all demo/calendar buttons
      document.addEventListener('click', handleLeadFormClick)
      
      // Cleanup function
      return () => {
        document.removeEventListener('click', handleLeadFormClick)
      }
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