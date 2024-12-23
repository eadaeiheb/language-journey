import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(() => 
    localStorage.getItem('preferredLanguage') || 'fr'
  );

  useEffect(() => {
    // Set default language to French
    if (!localStorage.getItem('preferredLanguage')) {
      localStorage.setItem('preferredLanguage', 'fr');
    }

    // Load Google Translate script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr', // Set default page language to French
        includedLanguages: 'en,fr',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');

      // Force French as default if not already set
      const iframe = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
      if (iframe && currentLang === 'fr') {
        setTimeout(() => {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const langButton = iframeDoc.querySelector(`[value="fr"]`) as HTMLElement;
            if (langButton) langButton.click();
          }
        }, 1000);
      }
    };

    const script = addScript();

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, [currentLang]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    
    // Find and trigger Google Translate dropdown
    const iframe = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const langButton = iframeDoc.querySelector(`[value="${lang}"]`) as HTMLElement;
        if (langButton) langButton.click();
      }
    }
  };

  return (
    <div className="flex items-center">
      <div id="google_translate_element" className="hidden" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:text-red-500">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('fr')}
            className={currentLang === 'fr' ? 'bg-accent' : ''}
          >
            Français
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleLanguageChange('en')}
            className={currentLang === 'en' ? 'bg-accent' : ''}
          >
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;