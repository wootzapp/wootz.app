"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface TrackingManagerProps {
  hasConsent: boolean;
}

export default function TrackingManager({ hasConsent }: TrackingManagerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!hasConsent) {
      // Remove any existing tracking scripts if consent is withdrawn
      const existingRb2b = document.getElementById('rb2b-script');
      if (existingRb2b) {
        existingRb2b.remove();
      }
      return;
    }

    // Load rb2b tracking script
    const loadRb2bScript = () => {
      // Remove existing script to ensure fresh load on route change
      const existing = document.getElementById('rb2b-script');
      if (existing) {
        existing.remove();
      }

      // Create and append new script
      const script = document.createElement('script');
      script.id = 'rb2b-script';
      script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/EN4M0H1EWDOM/EN4M0H1EWDOM.js.gz`;
      script.async = true;
      script.defer = true;
      
      // Add error handling
      script.onerror = () => {
        console.warn('Failed to load rb2b tracking script');
      };
      
      document.body.appendChild(script);
    };

    // Load script on initial mount and route changes
    loadRb2bScript();

    // Cleanup function
    return () => {
      const script = document.getElementById('rb2b-script');
      if (script) {
        script.remove();
      }
    };
  }, [hasConsent, pathname]);

  // This component renders nothing
  return null;
}