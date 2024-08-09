import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../lib/data'
import clsx from 'clsx';
import { useStore } from '@nanostores/react';
import { activeSection, timeOfLastClick } from '../store';


export default function Header() {
  const $activeSection = useStore(activeSection);
  const $timeOfLastClick = useStore(timeOfLastClick);

  return (
    <header className="z-[999] relative">
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none 
        borderGreen bg-secondary-50 bg-opacity-80
        shadow-lg shadow-primary-950/[0.06] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ y: -100, x: "-50%", opacity: 0}}
          animate={{ y: 0, x: "-50%", opacity: 1}}
        ></motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
        sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
          text-[0.9rem] font-medium text-primary-800/60 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {
            links.map(link => (
              <motion.li 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}>
                <a 
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-primary-800 transition",
                  {
                    "text-primary-800":
                      $activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  activeSection.set(link.name);
                  timeOfLastClick.set(Date.now());
                }}>
                  {link.name}

                  {link.name === $activeSection && (
                  <motion.span 
                    className='bg-primary-500/30 rounded-full absolute inset-0 -z-10'
                    layoutId='activeSection'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    ></motion.span>
                  )}

                </a>
              </motion.li>
            ))
            }
          </ul>
        </nav>
    </header>
  )
}
