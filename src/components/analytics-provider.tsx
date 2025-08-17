"use client";

import { useState, useCallback } from "react";
import CookieConsent from "./cookie-consent";
import TrackingManager from "./tracking-manager";

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false);

  const handleConsentChange = useCallback((consent: boolean) => {
    setHasConsent(consent);
  }, []);

  return (
    <>
      {children}
      <CookieConsent onConsentChange={handleConsentChange} />
      <TrackingManager hasConsent={hasConsent} />
    </>
  );
}