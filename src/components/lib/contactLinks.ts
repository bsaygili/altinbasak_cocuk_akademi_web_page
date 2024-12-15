import { FooterContent } from "../../content";

export const CONTACT_LINKS = [
    {
        href: `tel:+9${FooterContent.phone.landlinephone.split(' ').join('')}`,
        Icon: 'PhoneEnabled',
        className: "phone"
    },
    {
        href: `https://wa.me/+9${FooterContent.phone.mobile.split(' ').join('')}`,
        Icon: 'WhatsApp',
        className: "whatsapp",
    },
    {
        href: "https://www.instagram.com/altinbasakcocuk_akademi/",
        Icon: 'Instagram',
        className: "instagram",
    },
];