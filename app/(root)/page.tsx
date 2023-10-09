"use client"
import LeftSidebar from '@/components/LeftSidebar'
import Image from 'next/image'
import Button from '@/components/Button'
import "../globals.css"
import { FaArrowAltCircleRight, } from 'react-icons/fa';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
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
      period: "June 2022- August 2023",
      description: [
        'Collaborated with a remote team on diverse projects, showcasing mastery in frontend development using React, Redux, JavaScript, and Tailwind CSS.',
        'Led the creation of visually appealing and user-friendly interfaces for high-quality web applications, ensuring a seamless user experience.',
        'Achieved a remarkable 30% reduction in web page load times by implementing optimized code, enhancing website performance and user satisfaction.',
      ],
    },
    {
      name: 'Artec Consultant',
      role: "Front end engineer",
      period: "May 2021- May 2022",
      description: [
        'Introduced image lazy loading, resulting in a 20% decrease in initial page load times and a 30% reduction in upfront resource loading, contributing to improved website performance.',
        'Significantly improved software quality by reducing production bugs by 20% through rigorous testing methodologies, primarily using Jest for comprehensive test coverage.',
        'Developed, maintained, and shipped production code for client websites primarily using HTML, React, CSS, JavaScript, and jQuery.',
      ],
    },
    // Add more companies and descriptions as needed
  ];
  
  const portfolio = [
    {
      name: 'Project 1',
      description: 'This is the first project description.',
      image: '/hero1.jpg', 
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
    },
    {
      name: 'Project 2',
      description: 'This is the second project description.',
      image: '/hero1.jpg', 
      technologies: ['React', 'Express', 'SASS'],
    },
 
  ];
  
  const [activeCompany, setActiveCompany] = useState(companies[0]);
  const iconSize= 20
  return (
    <div className='flex flex-col'>
      <section className='flex w-full h-screen pt-36 md:pt-[90px] bg-[#0A192F] '>
        <div className='w-full pt-20 mx-6'>
          {/* Hero content */}
          <div className='md:ml-16 mt-6'>
            <div className=''>
              <p className='text-cyan-100 mb-6 text-xl '>
                Hi, my name is
              </p>
              <h1 className='text-[#CCD6F6] text-5xl md:text-8xl '>Jesse Bett.</h1>
              <h1 className='text-[#8892B0] text-6xl md:text-8xl mt-6 '>I build things for the web.</h1>
            </div>
            <div className="mt-6 md:w-1/2">
              <p className="md:ml-5 leading-7 text-xl text-[#65708c]"> I'm a front-end engineer specializing in crafting exceptional digital experiences. Currently, I'm dedicated to building accessible, beautiful, and innovative products at <span className='underline-animation text-cyan-100'>Komunikon.</span></p>
            </div>
            <div className="mt-12 ml-2 md:ml-3 ">
              <Button
                label='Learn more'
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#0A192F] py-6">
  <div className="p-6 md:p-16 rounded-lg  text-center">
    <div className=' flex items-center'>
    <h1 className="text-3xl text-white mb-4">About me</h1>
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
  <div className="  h-screen flex justify-center items-center">
    <div className='  justify-center  h-auto  w-3/4 '>
      <div className="flex items-center  ">
        <h1 className="text-3xl text-white mb-4">Where I have worked</h1>
        <hr className="border-white w-[50%] ml-6 md:w-[35%]" />
      </div>

      <div className=' w-full h  px-12 flex items-center justify-center h-auto '>
        {/* Left column for company names */}
        <div className="w-1/4">
        
            <ul className="space-y-4">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    activeCompany.name === company.name ? 'text-cyan-100 font-bold' : 'text-[#65708c]'

                  }`}
                  onClick={() => setActiveCompany(company)}
                >
                  {company.name}
                </li>
              ))}
            </ul>
          
        </div>
        {/* Right column for company description */}
        <div className="w-3/4 ml-4 ">
          <div className="text-left text-white mt-4">
            <h2 className="text-2xl mb-2">{activeCompany.role} @ <span className='text-cyan-100' >{activeCompany.name}</span></h2>
            <p className=' my-5 text-[#65708c] '>{activeCompany.period}</p>
            <div className=" pl-4">
          

            {activeCompany.description.map((item, index) => (
  <div key={index} className="flex items-start my-3">
    <div className="icon-wrapper mr-8">
      < IoIosArrowForward className="text-cyan-100" />
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
  <div className="flex justify-center items-center h-full">
    <div className="w-3/4">
      <div className='flex items-center '>
      <h1 className="text-3xl text-white mb-4">Some things I have built</h1>
      <hr className="border-white w-[50%] ml-6 md:w-[55%]" />
      </div>
      <div className="flex flex-col items-center w-full h-auto mt-5 px-12">
        {portfolio.map((project, index) => (
          <div
            key={index}
            className="mb-8 w-full max-w-[800px] bg-[#1E304E] rounded-lg p-4"
          >
            <Image
              src={project.image}
              alt={project.name}
              height={30}
              width={30}
              className="w-full rounded-lg mb-4"
            />
            <p className="text-[#65708c] mb-4">{project.description}</p>
            <div>
              <h3 className="text-xl text-cyan-100 mb-2">
                Technologies Used:
              </h3>
              <ul className="list-disc pl-6">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-[#65708c]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section id="contact" className="bg-[#0A192F] py-6 text-white text-center">
  <div className="p-6 md:p-16   ">
    <div className='md:w-[80%]' >
    <h1 className="text-3xl mb-4">Get in Touch</h1>
    <p className="text-lg  text-[#65708c] mb-8">
      I'd love to hear from you! Whether it's just to say hello, discuss a project, or any other inquiry, feel free to reach out.
    </p>
    <div className="flex justify-center items-center space-x-4">
      <a
        href="mailto:youremail@example.com"
        className="text-cyan-100 hover:text-cyan-200 transition duration-300"
      >
        Email
      </a>
      <a
        href="tel:+1234567890"
        className="text-cyan-100 hover:text-cyan-200 transition duration-300"
      >
        Call
      </a>
      <a
        href="https://www.linkedin.com/in/yourlinkedinprofile/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-100 hover:text-cyan-200 transition duration-300"
      >
        LinkedIn
      </a>
    </div>
  </div>
  </div>
</section>

    </div>
  )
}
