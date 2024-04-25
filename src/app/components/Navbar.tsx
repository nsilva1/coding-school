import React from 'react';
import { navbarMenu } from '../utils/constants';
import { Logo } from './Logo';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navbarMenu.map((menu, index) => (
              <li key={index}>
                <Link href={menu.path}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:flex'>
          <Link href='/' className='btn btn-ghost'>
            <Logo size='md' />
          </Link>
        </div>
        <div className='lg:hidden'>
          <h4 className='text-xl font-bold'>Ndito Coding Institute</h4>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-info'>Apply Now</a>
      </div>
    </div>
  );
};

export { Navbar };
