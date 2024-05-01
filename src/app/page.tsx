import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Courses } from './components/Courses';
import { Register } from './components/Register';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Register />
      <Footer />
    </main>
  );
}
