import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section      
     className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.img 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                src="/public/images/profile_pic.jpg" alt="Tadgh portrait" width={192} height={192}
                className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'/>
           
            <motion.span className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >👋</motion.span>
            </div>
            </div>  
            <motion.h1 
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Tadgh.</span> I'm a{" "}
                <span className="font-bold">Master's Student Currently Studying Computer Science</span> with{" "}
                <span className="font-bold">8 years</span> of experience. I enjoy
                building new <span className="italic">projects</span>. My current focus is learning{" "}
                <span className="underline">React</span>.
            </motion.h1>
            
            <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                }}>
                <button className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    <a href='#contact'>Contact Me Here{" "}</a>
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </button>
                <button className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10">
                    <a href="/public/CV.pdf" download>Download CV{" "}</a>
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </button>
                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none 
                    focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
                    href="https://www.linkedin.com/in/tadghp/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] 
                    outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
                    href="https://github.com/TadghPurcell"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
                   
                    
            </motion.div>
    </section>
  )
}
