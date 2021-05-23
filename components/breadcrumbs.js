import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .replace(/\?.*/, '')
        .replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
 
const breadcrumbLink = ({ href, breadcrumb }) => (
    <Link href={href}>
        <a className="">
            <span className="hover:text-blue-600 dark:hover:text-yellow-500">
                {convertBreadcrumb(breadcrumb)}
            </span>
            <span className="font-black px-2">/</span>
        </a>
    </Link>
)
export const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }


    
    return (
        <nav aria-label="breadcrumbs" className="inline-block hover:text-primary">
            <ol className="breadcrumb">
                {breadcrumbLink({ href: '/', breadcrumb: 'Home'})}


                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href} className="inline">
                            {breadcrumbLink({href:breadcrumb.href, breadcrumb:breadcrumb.breadcrumb})}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};