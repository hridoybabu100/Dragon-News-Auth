
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

    const path = usePathname();
    const isActive = href === path;   
    return (
       <Link href={href} className={`${isActive ? "border-purple-500 border-b" :""}`}>{children}</Link>
    );
};

export default NavLink;