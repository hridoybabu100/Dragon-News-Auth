import Image from 'next/image';
import React from 'react';
import userImg from '../../assets/user.png'
import NavLink from '../NavLink/NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-6 mt-6 w-[85%] mx-auto'>
            <div></div>
           <ul className='flex items-center gap-4 text-gray-700'>
            <li> <NavLink href={'/'}>Home</NavLink></li>
            <li> <NavLink href={'/about'}>About Us</NavLink></li>
            <li> <NavLink href={'/carrer'}>Career</NavLink></li>
           </ul>
           <div className='flex gap-3'>
            <Image src={userImg} width={40} height={40} alt='user ing'></Image>
            <button className='btn bg-purple-500 text-white'>Loggin</button>
           </div>
        </div>
    );
};

export default Navbar;