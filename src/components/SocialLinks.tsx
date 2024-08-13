import React from "react";

type SocialLink = {
    href: string;
    imageSrc: string;
    imageAlt: string;
    label: string;
};

type SocialLinksProps = {
    links: SocialLink[];
};

const SocialLinkItem: React.FC<SocialLink> = ({ href, imageSrc, imageAlt, label }) => {
    return (
        <li>
            <a
                href={href}
                className="flex items-center p-3 text-base font-bold rounded-full bg-gray-50 hover:bg-gray-100 group hover:shadow"
            >
                <img src={imageSrc} className="w-8" alt={imageAlt} />
                <span className="ms-4">{label}</span>
            </a>
        </li>
    );
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
    return (
        <ul className="m-4 mb-0 space-y-3">
            {links.map((link, index) => (
                <SocialLinkItem
                    key={index}
                    href={link.href}
                    imageSrc={link.imageSrc}
                    imageAlt={link.imageAlt}
                    label={link.label}
                />
            ))}
        </ul>
    );
};

export default SocialLinks;
