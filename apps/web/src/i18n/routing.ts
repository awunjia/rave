
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "fr"],
    defaultLocale: "en",
    localePrefix: "as-needed",

    pathnames: {
        "/": "/",

        "/booking": {
            en: "/booking",
            fr: "/réservation",
        },

        "/booking/schedule": {
            en: "/booking/schedule",
            fr: "/réservation/planifier",
        },

        "/auth/signin": {
            en: "/auth/signin",
            fr: "/auth/se-connecter",
        },

        "/auth/register": {
            en: "/auth/register",
            fr: "/auth/inscription",
        },

        "/auth/forgot-password": {
            en: "/auth/forgot-password",
            fr: "/auth/mot-de-passe-oublie",
        },

        "/auth/verify": {
            en: "/auth/verify-otp",
            fr: "/auth/vérification-otp",
        },

        "/services": {
            en: "/services",
            fr: "/services",
        },

        "/services/visa-assistance": {
            en: "/services/visa-assistance",
            fr: "/services/assistance-visa",
        },

        "/services/travel-consultancy": {
            en: "/services/travel-consultancy",
            fr: "/services/conseil-voyage",
        },

        "/services/study-abroad": {
            en: "/services/study-abroad",
            fr: "/services/études-à-létranger",
        },

        "/services/passport-assistance": {
            en: "/services/passport-assistance",
            fr: "/services/assistance-passeport",
        },

        "/services/flight-booking": {
            en: "/services/flight-booking",
            fr: "/services/réservation-vol",
        },

        "/resources": {
            en: "/resources",
            fr: "/ressources",
        },

        "/resources/why-us": {
            en: "/resources/why-us",
            fr: "/ressources/pourquoi-nous",
        },

        "/resources/about-us": {
            en: "/resources/about-us",
            fr: "/ressources/à-propos",
        },

        "/resources/attestations": {
            en: "/resources/attestations",
            fr: "/ressources/attestations",
        },

        "/resources/testimonials": {
            en: "/resources/testimonials",
            fr: "/ressources/témoignages",
        },

        "/blogs": {
            en: "/blogs",
            fr: "/articles",
        },

        "/contact-us": {
            en: "/contact-us",
            fr: "/contactez-nous",
        },

        "/portal/appointments": {
            en: "/portal/appointments",
            fr: "/portail/rendez-vous",
        },
    },
});
