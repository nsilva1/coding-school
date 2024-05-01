import { IoTimeOutline, IoPersonAddOutline } from 'react-icons/io5';
import { PiCertificate } from 'react-icons/pi';
import data_analytics from '../assets/images/data_analysis.svg';
import web_dev from '../assets/images/web_dev.jpg';
import cloud from '../assets/images/cloud_computing.svg';

export const schoolFeatures = [
  {
    icon: <IoTimeOutline size={50} />,
    title: '24 Weeks Coding Bootcamp',
    description:
      'We offer a fully imersive and intensive 24 week program. Ranging from Data Analysis to AI and Machine Learning',
  },
  {
    icon: <IoPersonAddOutline size={50} />,
    title: 'Guaranteed Job Placement',
    description:
      'Our graduates have gone on to work for prestigous companies both home and abroad. We prepare you for the global demand of technology talents.',
  },
  {
    icon: <PiCertificate size={50} />,
    title: 'Certified Experienced Tutors',
    description:
      'All our tutors are industry certified experts with proven track records in their field.',
  },
];

export const navbarMenu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const courses = [
  {
    title: 'Data Analysis',
    description:
      "Discover the power of data-driven insights with our comprehensive data analytics course. Whether you're a novice seeking to enter the world of data or a seasoned professional aiming to sharpen your skills, our program offers hands-on training in statistical analysis, data visualization, and predictive modeling. Join us and unlock the potential to transform raw data into actionable strategies for informed decision-making.",
    image: data_analytics,
  },
  {
    title: 'Web Development',
    description:
      "Embark on an exciting journey into the world of web development with our dynamic course. From crafting responsive layouts to mastering essential programming languages like HTML, CSS, and JavaScript, our program equips you with the tools to build captivating websites from scratch. Join us and unleash your creativity while honing the technical skills demanded by today's digital landscape.",
    image: web_dev,
  },
  {
    title: 'Cloud Computing',
    description:
      'Embark on a transformative learning experience in cloud computing with our comprehensive course. Dive deep into the fundamentals of cloud architecture, learn to deploy scalable and resilient applications, and explore cutting-edge technologies like AWS, Azure, and Google Cloud Platform. Join us to unlock the potential of cloud computing and gain the skills needed to thrive in the ever-evolving tech industry.',
    image: cloud,
  },
];
