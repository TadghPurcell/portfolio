import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks';



export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }} 
        id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        I began my coding journey in{" "}
        <span className="italic">November 2020</span> with web development through {" "} 
        <span className='font-semibold'>The Odin Project</span>, 
        and quickly became passionate about programming. After six months of self-study, 
        I decided to return to education to broaden my knowledge beyond web development 
        and explore other areas of computer science.
        </p>

        <p className='mb-3'>
        Since starting my course, I've delved into <span className='italic'>topics</span>{" "} 
        like <span className="font-semibold">Software Engineering</span>, {""}
        <span className="font-semibold">Networks</span>, {" "}
        <span className="font-semibold">Data Analytics</span>, 
        and <span className="font-semibold">Cloud Computing</span>, 
        while also learning new <span className='italic'>programming languages</span>, 
        including <span className="font-semibold">Python</span> and {" "}
        <span className="font-semibold">Java</span>. 
        In my <span className='italic'>projects</span>, I use {" "}
        <span className="font-semibold">React</span> {" "} and {" "}
        <span className="font-semibold">TypeScript</span> with {" "}
        <span className="font-semibold">Tailwind CSS</span> for the front end, 
        and on the back end, I've worked with the {" "}
        <span className="font-semibold">Java Spring Boot</span> framework
        and <span className="font-semibold">Python's Flask</span> and {" "} 
        <span className="font-semibold">FastAPI</span> frameworks to build APIs.
        </p>

        <p className='mb-3'>
        So, why work with me? Well, I'm a <span className="font-semibold">team player</span> {" "}
        who loves problem-solving and the challenge of working on new projects and learning 
        new and exciting technologies. I have worked on many team projects now and enjoy the 
        collaborative process with others, bouncing ideas back and forth and 
        making an application work together. Currently, I'm working with three friends to create a new 
        recruitment platform web application using {" "}
        <span className="font-semibold">Golang</span> which I am excited to learn 
        and build.
        </p>

        <p className='mb-3'>
        Outside of work, I stay active by running, going to the gym, 
        and practising Brazilian Jiu-Jitsu. 
        I also enjoy attending gigs, climbing mountains, going to the beach, 
        exploring nature, and planning my next adventure abroad.
        </p>
    </motion.section>
  )
}
