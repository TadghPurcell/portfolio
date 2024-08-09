import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '../lib/data'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks';
import { Icon } from '@iconify/react';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
        <section 
            ref={ref} 
            id='skills' 
            className='relative mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className='relative flex flex-wrap justify-center gap-2 text-lg'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                            className='flex gap-2 flex-col items-center justify-center w-1/4 sm:w-1/6 h-24'    
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                            once: true,
                            }}
                            custom={index}
                        >
                            <Icon icon={skill.iconUrl} className='text-6xl'/>
                            {skill.name}
                        </motion.li>
                ))}
            </ul>
        </section>
    )
}
