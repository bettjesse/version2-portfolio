"use client"
import LeftSidebar from '@/components/LeftSidebar'
import Image from 'next/image'
import Button from '@/components/Button'
import "../globals.css"
import {  FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link'

export default function Home() {
 
 const companies = [
    {
      name: 'Komunikon',
      role: "Front end engineer",
      period: "August 2023- Present",
      description: [
        'Working on the development of a visual language called Ikon, converting text to icons.',
        'Collaborating with a cross-functional team to create beautiful and user-friendly UIs.',
        'Leading and mentoring team members in Next.js, React, Tailwind CSS, and JavaScript.',
        'Building TextToIkon, a web platform for creating sentences from icons.',
      ],
    },
    {
      name: 'Tiro Tech',
      role: "Front end engineer",
      period: "August 2022- August 2023",
      description: [
        'Implemented Redux and Redux toolkit for state management, fostering a robust and scalable application structure, resulting in a 30% increase in development efficiency and code maintainability',
        'Used React js within project architectures, optimizing rendering performance and achieving a 25% reduction in initial page load times across various web applications',
        'Engineered visually appealing and highly responsive user interfaces utilizing Tailwind CSS, contributing to a 40% improvement in website interaction and user engagement metrics',
      ],
    },
   
    {
      name: 'Cambrian Valuers Limited',
      role: "Software engineer Intern ",
      period: "Jan 2021- April 2022",
      description: [
        ' Collaborated on the development an innovative online valuation platform enabling users to upload car images for appraisal, leveraging React, MongoDB, and Node.js. This initiative streamlined the valuation process and reduced turnaround time by 40%.',

' Contributed significantly to the development of the automobile valuation system, integrating React for the frontend interface, MongoDB for efficient data storage, and Node.js for seamless backend operations, enhancing user accessibility and valuation accuracy.',
        
      ],
    },
   
  ];
  
  const portfolio = [
     {
  name: 'Tech Blogs',
  description: 'A dynamic tech-focused blogging platform enabling users to create, view, like, and save tech-related content. Users can post and explore articles covering diverse categories such as front-end development, interview tips, React, MongoDB, and more. Features include user authentication, article categorization, interaction functionalities like liking, saving, and commenting.',
  image: '/tech-blog-update.jpg',
  technologies: ['Next.js', 'React', 'Prisma', 'Typescript', 'Redux', 'Shadcn-ui' ,'Tailwind CSS', 'MongoDB'],
  liveLink: 'https://tech-blog-bettjesse.vercel.app',
  githubRepo: 'https://github.com/bettjesse/tech-blog',
},

    {
      name: 'Table Reservation System',
      description: 'A convenient online reservation system that allows users to easily reserve tables at their favorite restaurants. Developed using React, MongoDB, Express, and Node.js.',
      image: '/reservation.jpg',
      technologies: ['React', 'MongoDB', 'Javascript', 'Redux', 'Express', 'Node.js'],
      liveLink: 'https://table-mate.onrender.com/',
      githubRepo: 'https://github.com/bettjesse/table-reservation',
    },
{
  name: 'Text2Ikon',
  description: 'Revolutionize communication with Text2Ikon, a platform introducing a new visual language called "ikon." Users can create sentences using icons, forming a language that utilizes the unique power of ikons. In short, it's a visual language platform for seamless communication through icons.',
  image: '/ikon.jpg',
  technologies: ['JavaScript', 'React', 'Next.js', 'Redux', 'Redux Toolkit Query', 'Tailwind CSS'],
  liveLink: 'https://text2ikon.komunikon.com/search',
  githubRepo: 'https://text2ikon.komunikon.com/search',
},

 {
  name: 'Modern Bank UI/UX',
  description: 'Transformed a Figma design into a fully functional  mobile responsive bank landing page using React and Tailwind CSS. Experience a modern and intuitive user interface for managing your banking needs.',
  image: '/uxui.png', 
  technologies: ['React','Javascript', 'Tailwind CSS'],
  liveLink: 'https://modern-uxui-bank-website.netlify.app/',
  githubRepo: 'https://github.com/bettjesse/uxui',
}

  ];
  
  
  const [activeCompany, setActiveCompany] = useState(companies[0]);
  const iconSize= 20
  return (
    <div className='flex flex-col'>
      <section className='flex w-full h-screen pt-36 md:pt-[90px] bg-[#0A192F] '>
        <div className='w-full pt-4 mx-6 mb-4'>
          {/* Hero content */}
          <div className='md:ml-16 mt-10 md:mt-12'>
            <div className=''>
              <p className='text-cyan-100 mb-6 text-xl '>
                Hi, my name is
              </p>
              <h1 className='text-[#CCD6F6] text-6xl md:text-8xl mb-12 md:mb-3'>Jesse Bett.</h1>
              <h1 className='text-[#8892B0] text-5xl md:text-7xl md:mb-6 mb-16 '>I build things for the web.</h1>
            </div>
            <div className="md:mt-6 mt-10 md:w-1/2">
              <p className="md:ml-5 leading-9 text-xl text-[#65708c]"> I'm a front-end engineer specializing in crafting exceptional digital experiences. Currently, I'm dedicated to building accessible, beautiful, and innovative products at <span className='underline-animation text-cyan-100'>Komunikon.</span></p>
            </div>
            <div className="ml-2 md:ml-3 mt-10  md:mt-12">
              <Link href= "#about">
              <Button
                label='Learn more'
              />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#0A192F] py-6">
  <div className="p-10 md:p-16 rounded-lg  text-center">
    <div className=' flex items-center'>
    <h1 className="text-2xl text-white mb-4">About me</h1>
    <hr className="border-white w-[50%]  ml-6 md:w-[35%]  " />
    </div>
    <div className="md:flex items-center">
      <div className="md:w-1/2 md:mr-8 text-left ">
        <p className="text-[#65708c] text-lg">
          Hello! I'm Jesse Bett, and my journey into the world of web development began with a passion for coding during my first-year introduction to web design course. It was during this course that I discovered my love for creating digital experiences on the web.
        </p>
        <p className="mt-4 text-[#65708c]">
          Throughout my career, I've had the privilege of contributing to the growth of tech startups and helping non-tech companies establish their online presence. I've been dedicated to making technology accessible and enjoyable for users, with a particular emphasis on user experience (UX). To me, crafting web experiences that feel seamless and intuitive is both a passion and a mission.
        </p>
        <p className="text-[#65708c] mt-4">
          As a key member of the team at<span className="underline-animation text-cyan-100"> Komunikon</span>, my primary responsibility is to design and develop front-end interfaces, all while playing a vital role in shaping user experiences. Komunikon's overarching mission centers around the creation and promotion of an innovative icon language, setting new standards for visual communication in the digital landscape.
        </p>
        <p className="mt-4 text-[#65708c]">In addition to my professional work, I've recently built a table reservation system to help reserving tables at a restaurant easy. It's my way of practicing my skills and giving back to the community.</p>
        <div className="mt-8">
          <h2 className="text-[#65708c] mb-4">Technologies I've Been Working With:</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">React</span>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">Node.js</span>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">Next.js</span>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">Tailwind CSS</span>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">JavaScript (ES 6+)</span>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 mb-4">
              <div className="flex items-center">
                < IoIosArrowForward className="text-cyan-100 mr-2" />
                <span className="text-[#65708c]">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-4">
        <div className="w-[80%] md:w-full mx-auto ">
          <Image src="/profile.jpg" layout='responsive'className='rounded-lg' width={100} height={100} alt="profile" />
        </div>
      </div>
    </div>
  </div>
</section>



<section id="experience" className="bg-[#0A192F]">
  <div className=" md:py-12 flex flex-col md:flex-row justify-center items-center">
    <div className='w-full md:w-3/4'>
      <div className="flex items-center ">
        <h1 className="md:text-3xl text-lg text-white mb-4 mt-4 md:mt-0 ml-3 md:ml-0">Where I have worked</h1>
        <hr className="border-white w-[30%] md:ml-6 ml-4 md:w-[35%]" />
      </div>

      <div className='w-full  px-4 md:px-12 flex flex-col md:flex-row items-center justify-center h-auto'>
        {/* Left column for company names */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <div className="custom-scroll max-h-40 md:max-h-full ">
    <ul className="md:space-y-4 flex md:flex-col items-center space-x-4">
      {companies.map((company, index) => (
        <li
          key={index}
          className={`cursor-pointer ${
            activeCompany.name === company.name ? 'text-cyan-100 font-bold' : 'text-[#65708c] '
          }`}
          onClick={() => setActiveCompany(company)}
        >
          {company.name}
        </li>
      ))}
    </ul>
  </div>
</div>


        {/* Right column for company description */}
        <div className="w-full md:w-3/4 ml-0 md:ml-4">
          <div className="text-left text-white mt-4">
            <h2 className="text-2xl mb-2">
              {activeCompany.role} @{' '}
              <span className='text-cyan-100'>{activeCompany.name}</span>
            </h2>
            <p className='my-2 text-[#65708c] '>{activeCompany.period}</p>
            <div className="pl-4">
              {activeCompany.description.map((item, index) => (
                <div key={index} className="flex items-start my-3">
                  <div className="icon-wrapper mr-4">
                    <IoIosArrowForward className="text-cyan-100" />
                  </div>
                  <span className="text-[#65708c] ">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="work" className="bg-[#0A192F] ">
  <div className=" pt-6 flex justify-center items-center h-full">
    <div className="w-full md:w-3/4">
      <div className="  mt-6  items-center">
        <div className='flex items-center justify-center '>
        <h1 className="md:text-3xl text-lg text-center text-gray-100 mb-4">Some things I have built</h1>
        <hr className="border-[#65708c] w-[38%] md:ml-6 ml-3 md:w-[40%]" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-auto mt-5 px-4 md:px-12">
      {portfolio.map((project, index) => (
  <div
    key={index}
    className="mb-8 w-full md:max-w-[800px] bg-[#1E304E] rounded-lg p-4"
  >
    <Image
      src={project.image}
      alt={project.name}
      width={800}
      height={500}
      className="w-full rounded-lg mb-4"
    />
    <p className="text-[#65708c] mb-4">{project.description}</p>
    <div>
      <h3 className="text-xl text-cyan-100 mb-2">
        Technologies Used:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-[#65708c] bg-[#2A3A59] px-2 py-1 rounded-md"
          >
            {tech}
          </span> 
        ))}
      </div>
    </div>
    <div className="mt-4 flex justify-between">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-200 hover:underline hover:text-cyan-100 transition"
      >
        View Site
      </a>
      <a
        href={project.githubRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-200 hover:underline hover:text-cyan-100 transition"
      >
        GitHub Repository
      </a>
    </div>
  </div>
))}


      </div>
    </div>
  </div>
</section>



<section id="contact" className="bg-[#0A192F] py-6 text-white text-center">
  <div className="p-6 md:p-24  w-full ">
    <div className='' >
      <div className='md:w-3/4 mx-auto  py-4'>
      <p className='text-[#65708c] mb-4'>What's Next ?</p>
    <h1 className="text-6xl mb-4 ">Get in Touch</h1>
    <p className="text-lg text-center text-[#65708c] mb-8">
      I'd love to hear from you! Whether it's just to say hello, discuss a project, or any other inquiry, feel free to reach out.
    </p>
    </div>
   


<div className="flex justify-center items-center space-x-8">
  <a
    href="mailto:jessebett1999@gmail.com"
    className="text-cyan-100 hover:text-cyan-200 transition duration-300 text-lg md:text-2xl"
  >
    <FaEnvelope />
  </a>
  <a
    href="tel:+254110426093"
    className="text-cyan-100 hover:text-cyan-200 transition duration-300 text-lg md:text-2xl"
  >
    <FaPhone />
  </a>
  <a
    href="https://www.linkedin.com/in/jesse-bett-46b0aa1a8/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-100 hover:text-cyan-200 transition duration-300 text-lg md:text-2xl"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://wa.me/254110426093"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-100 hover:text-cyan-200 transition duration-300 text-lg md:text-2xl"
  >
    <FaWhatsapp />
  </a>
</div>

  </div>
  </div>
</section>

    </div>
  )
}
