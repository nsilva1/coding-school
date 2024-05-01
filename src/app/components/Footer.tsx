import React from 'react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 text-base-content'>
        <aside>
          <Logo size='md' />
          <p>
            Ndito Coding Institute.
            <br />
            Embracing the future of technology
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Courses</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export { Footer };
