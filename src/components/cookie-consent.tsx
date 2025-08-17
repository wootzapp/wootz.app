"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface CookieConsentProps {
  onConsentChange: (hasConsent: boolean) => void;
}

export default function CookieConsent({ onConsentChange }: CookieConsentProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowPopup(true);
    } else {
      // Notify parent component of existing consent status
      onConsentChange(consent === "accepted");
    }
  }, [onConsentChange]);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowPopup(false);
    onConsentChange(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowPopup(false);
    onConsentChange(false);
  };

  const handleCustomize = () => {
    // For this implementation, customize just opens privacy policy
    window.open("/privacy-policy", "_blank");
  };

  if (!isLoaded || !showPopup) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="w-full max-w-lg mx-auto border border-orange-200 shadow-xl bg-orange-50">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-900">Cookie Preferences</h3>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close cookie notice"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. 
            When you visit our website, cookies may be used by our data partners to associate these activities with 
            other personal information for marketing purposes.
          </p>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleAccept}
                className="bg-black hover:bg-gray-800 text-white flex-1"
              >
                Accept All
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-gray-300 flex-1"
              >
                Decline All
              </Button>
            </div>
            
            <Button
              onClick={handleCustomize}
              variant="outline"
              className="w-full border-gray-300 text-sm"
            >
              Privacy Policy & Settings
            </Button>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>
              You can opt out of tracking at{" "}
              <a 
                href="https://app.retention.com/optout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                app.retention.com/optout
              </a>
              {" "}or{" "}
              <a 
                href="https://www.rb2b.com/rb2b-gdpr-opt-out" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                rb2b.com/rb2b-gdpr-opt-out
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}