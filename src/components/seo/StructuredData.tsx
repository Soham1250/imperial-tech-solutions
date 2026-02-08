"use client";

import Script from 'next/script';

export const StructuredData = () => {
    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Imperial Tech Solutions",
        "alternateName": "ImperialTech",
        "url": "https://imperialtech.solutions",
        "logo": "https://imperialtech.solutions/logo.png",
        "description": "Professional web development agency in Mumbai specializing in custom websites, AI automation, and modern digital solutions for businesses.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXX-XXX-XXXX",
            "contactType": "customer service",
            "email": "soham.pansare1250@gmail.com",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
            "https://twitter.com/imperialtech",
            "https://linkedin.com/company/imperialtech",
            "https://instagram.com/imperialtech"
        ],
        "founder": {
            "@type": "Person",
            "name": "Soham Pansare"
        },
        "foundingDate": "2026",
        "knowsAbout": [
            "Web Development",
            "AI Automation",
            "Next.js Development",
            "React Development",
            "TypeScript",
            "SEO Optimization",
            "Mobile App Development",
            "E-commerce Solutions"
        ]
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://imperialtech.solutions/#localbusiness",
        "name": "Imperial Tech Solutions",
        "image": "https://imperialtech.solutions/logo.png",
        "description": "Affordable web development agency in Mumbai offering custom websites, AI integration, and digital transformation services starting at ₹10,000.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.0760",
            "longitude": "72.8777"
        },
        "url": "https://imperialtech.solutions",
        "telephone": "+91-XXX-XXX-XXXX",
        "email": "soham.pansare1250@gmail.com",
        "priceRange": "₹₹",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
            },
            "geoRadius": "50000"
        }
    };

    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
            "@type": "Organization",
            "name": "Imperial Tech Solutions"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Custom Website Development",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Landing Page Development",
                                "description": "Professional landing pages optimized for conversions with modern design and fast performance."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Full Website Development",
                                "description": "Complete custom websites built with Next.js, React, and modern technologies."
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "AI Integration Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "AI Automation",
                                "description": "Integrate AI and machine learning capabilities into your existing business processes."
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Chatbot Development",
                                "description": "Custom AI-powered chatbots for customer service and engagement."
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "SEO & Digital Marketing",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "SEO Optimization",
                                "description": "Comprehensive SEO services to improve your search engine rankings and organic traffic."
                            }
                        }
                    ]
                }
            ]
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "10000",
            "highPrice": "500000",
            "offerCount": "10"
        }
    };

    // WebSite Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Imperial Tech Solutions",
        "url": "https://imperialtech.solutions",
        "description": "Professional web development agency specializing in custom websites, AI automation, and modern digital solutions.",
        "publisher": {
            "@type": "Organization",
            "name": "Imperial Tech Solutions"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://imperialtech.solutions/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://imperialtech.solutions"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://imperialtech.solutions#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Portfolio",
                "item": "https://imperialtech.solutions#portfolio"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://imperialtech.solutions#contact"
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="localbusiness-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};
