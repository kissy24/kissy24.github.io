import React from "react";

type ArticleLink = {
    href: string;
    label: string;
};

type ArticleLinksProps = {
    links: ArticleLink[];
};

const ArticleLinkItem: React.FC<ArticleLink> = ({ href, label }) => {
    return (
        <li>
            <a href={href} className="text-base text-sky-400">
                {label}
            </a>
        </li>
    );
};

const ArticleLinks: React.FC<ArticleLinksProps> = ({ links }) => {
    return (
        <ul className="list-disc list-inside m-4 mb-0 space-y-3">
            {links.map((link, index) => (
                <ArticleLinkItem key={index} href={link.href} label={link.label} />
            ))}
        </ul>
    );
};

export default ArticleLinks;
