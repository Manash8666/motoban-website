export default function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. SoftwareApplication Schema
      {
        "@type": "SoftwareApplication",
        "@id": "https://motoban.in/#software",
        "name": "MotoBan (MechBillerAI)",
        "alternateName": ["MotoBan", "MechBillerAI", "MotoBan Garage Software"],
        "applicationCategory": "BusinessApplication, PointOfSaleApplication, AutoRepairSoftware",
        "operatingSystem": "Web, Windows, macOS, Android, iOS (PWA)",
        "description":
          "India's #1 AI-powered garage management software. 15-second voice GST billing, digital job cards, 50,000+ BS3/BS4/BS6 spares matrix, and 100% offline-first PWA resilience.",
        "url": "https://motoban.in",
        "downloadUrl": "https://mechbillerai.vercel.app/",
        "softwareVersion": "1.0.0",
        "inLanguage": ["en-IN", "hi-IN"],
        "author": {
          "@type": "Organization",
          "name": "HybridStudioZ",
          "url": "https://motoban.in",
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "15-Day Free Trial",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://mechbillerai.vercel.app/",
          },
          {
            "@type": "Offer",
            "name": "Monthly Plan",
            "price": "1299",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://motoban.in/pricing",
          },
          {
            "@type": "Offer",
            "name": "Quarterly Plan",
            "price": "3297",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://motoban.in/pricing",
          },
          {
            "@type": "Offer",
            "name": "Annual Pro",
            "price": "10788",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://motoban.in/pricing",
          },
          {
            "@type": "Offer",
            "name": "One-Time Lifetime License",
            "price": "15999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://motoban.in/pricing",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "540",
          "bestRating": "5",
          "worstRating": "1",
        },
        "featureList": [
          "15-Second AI Voice Dictation Billing",
          "Gemini AI Scope of Work (SOW) Technical Explanations",
          "Personal Counter Standee UPI QR Integration on Invoices",
          "Free Branded Subdomains (*.motoban.in) with Live Customer Bay Tracking",
          "Universal 1-Click Data Importer (Vyapar, Excel, CSV)",
          "Native Android Mobile Companion App (v1.0.0 APK & AAB)",
          "Digital Job Cards with Check-In Scratch Photos",
          "50,000+ Preloaded BS3/BS4/BS6 Spares Matrix",
          "WhatsApp Customer Invoice Dispatch with Direct UPI QR",
          "ESC/POS 58mm and 80mm Silent Thermal Printing",
          "100% Offline-First IndexedDB Local Storage Resilience",
        ],
      },

      // 2. Organization & LocalBusiness Schema
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://motoban.in/#organization",
        "name": "HybridStudioZ",
        "legalName": "HybridStudioZ Technologies",
        "url": "https://motoban.in",
        "logo": "https://motoban.in/opengraph-image",
        "image": "https://motoban.in/opengraph-image",
        "telephone": "+91 6359635416",
        "email": "info@motoban.in",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nigam Nagar, Chandkheda",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "382424",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.1118",
          "longitude": "72.5855",
        },
        "sameAs": [
          "https://github.com/Manash8666/mechbillerai.git",
          "https://github.com/Manash8666/motoban-website.git",
          "https://mechbillerai.vercel.app/",
          "https://motofit2.in",
        ],
      },

      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": "https://motoban.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best garage billing software in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "MotoBan (powered by HybridStudioZ's MechBillerAI engine) is the leading garage billing software in India. It enables workshops to create GST invoices in 15 seconds using Indian dialect voice recognition, works 100% offline via a Progressive Web App, and includes 50,000+ preloaded motorcycle and car spare parts.",
            },
          },
          {
            "@type": "Question",
            "name": "How does MotoBan 15-second voice billing work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Mechanics simply press Ctrl+Space or tap the microphone button and speak in natural Hindi, Gujarati, or English workshop terms (e.g. 'shocker oil seal, clutch plate, motul oil'). The speech AI instantly matches the parts with verified HSN/SAC tax codes and populates the bill.",
            },
          },
          {
            "@type": "Question",
            "name": "Does MotoBan work without internet in a workshop?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. MotoBan features an offline-first architecture using local IndexedDB storage. You can create job cards, dispense inventory, and print thermal bills with zero internet. The app auto-syncs securely with the cloud once a connection is available.",
            },
          },
          {
            "@type": "Question",
            "name": "How to send bike service job cards on WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "MotoBan generates a 1-click WhatsApp customer dispatch containing the full digital job card, vehicle inspection photos, itemized repair estimates, and a dynamic UPI payment QR code for instant direct-to-bank settlement.",
            },
          },
          {
            "@type": "Question",
            "name": "Does MotoBan support thermal POS receipt printers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. MotoBan connects natively to standard 58mm and 80mm ESC/POS thermal printers (TVS, Epson, Posiflex, BluPrints, Xprinter) via USB, Bluetooth, WebHID, and WebSerial protocols for silent, instantaneous printing.",
            },
          },
          {
            "@type": "Question",
            "name": "What spare parts are preloaded in MotoBan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "MotoBan comes with over 50,000 preloaded OEM and OES spare parts cross-referenced across Hero, Bajaj, Honda, TVS, Yamaha, Royal Enfield, and KTM platforms covering BS3, BS4, and BS6 emission standards.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the pricing of MotoBan (MechBillerAI)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "MotoBan offers an unrestricted 15-Day Free Trial (₹0), Monthly Plan at ₹1,299/month, Quarterly Plan at ₹1,099/month (₹3,297 billed quarterly), Annual Pro at ₹899/month (₹10,788 billed yearly with free subdomain), and a One-Time Lifetime License at ₹15,999 with perpetual commercial access and zero recurring fees.",
            },
          },
          {
            "@type": "Question",
            "name": "Who is currently using MotoBan in high-volume production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "MotoFit 2 located in Nigam Nagar, Chandkheda, Ahmedabad is actively running the Full Version of MotoBan across multi-bay motorcycle servicing, computerized diagnostics, and daily GST customer billing.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I use MotoBan on an Android mobile phone or tablet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. MotoBan is responsive across desktop, tablet, and smartphone browsers, and can be installed directly as a Progressive Web App (PWA) or used via its companion Android app for ramp check-ins.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the EULA policies for the MotoBan website and mechbillerai repository?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Under MotoBan's EULA, anyone using code from the website or mechbillerai repository must either 100% open-source their project under identical reciprocal terms, or pay a commercial royalty equal to 3 times the Lifetime License fee (₹44,997 for standard garage, ₹119,997 for enterprise).",
            },
          },
        ],
      },

      // 4. HowTo Schema
      {
        "@type": "HowTo",
        "@id": "https://motoban.in/#howto",
        "name": "How to Create a GST Garage Job Card & WhatsApp Invoice in 15 Seconds",
        "description":
          "Step-by-step guide on generating high-speed digital job cards and GST billing for motorcycle and auto workshops using MotoBan AI.",
        "totalTime": "PT15S",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Check-in Vehicle & Dictate Spoken Repairs",
            "text":
              "Open MotoBan and tap the microphone hotkey (Ctrl + Space). Speak the vehicle registration number and service items in natural language.",
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Instant AI HSN & Spares Matching",
            "text":
              "MotoBan's speech NLP matches spoken parts with the 50,000+ parts matrix, assigns HSN/SAC codes, and computes GST tax splits automatically.",
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Thermal Print & WhatsApp Dispatch",
            "text":
              "Click Print to trigger instant ESC/POS thermal printing and send a branded WhatsApp estimate with a dynamic direct UPI QR code to the customer.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
