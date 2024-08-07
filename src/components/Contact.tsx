import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitSuccessful },
    } = useForm({
      mode: "onTouched",
    });

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY as string;

    const { submit: onSubmit } = useWeb3Forms({
      access_key: accessKey,
      settings: {
        from_name: "Portfolio",
        subject: "New Contact Message from your Portfolio Website",
      },
      onSuccess: (msg) => {
        setIsSuccess(true);
        setMessage(msg);
        reset();
      },
      onError: (msg) => {
        setIsSuccess(false);
        setMessage(msg);
      },
    });
  
  return (
    <motion.section 
        id='contact'
        ref={ref} 
        className='mb-10 sm:mb-20 w-[min(100%,38rem)] text-center'
        initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
    >

        <SectionHeading>Contact Me</SectionHeading>

        <p className="text-primary-800 -mt-6">
        Please get in touch directly at{" "}
        <a className="underline" href="mailto:tadghp@gmail.com">
          tadghp@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className='mt-10 flex flex-col' onSubmit={handleSubmit(onSubmit)}>

        <div className='my-3'>
        <input 
          className={`w-full bg-secondary-50 placeholder:text-primary-800/50 h-14 px-4 borderGreen rounded-lg outline-none focus:ring-4  ${
            errors.name
              ? "border-red-600 focus:border-red-600 ring-red-100"
              : "border-primary-300 focus:border-primary-600 ring-primary-50"
          }`}
          {...register("name", {
            required: "Please enter your full name",
            maxLength: 80,
          })}
          type="text" 
          placeholder='Your Name'
          autoComplete="false"          
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message?.toString()}</small>
            </div>
          )}
          </div>

          <div>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            autoComplete="false"
            className={`w-full h-14 bg-secondary-50 my-3 px-4 placeholder:text-primary-800/50 rounded-lg borderGreen py-3 border-2 outline-none focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-primary-300 focus:border-primary-600 ring-primary-50"
            }`}
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message?.toString()}</small>
            </div>
          )}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            className={`bg-secondary-50 h-52 placeholder:text-primary-800/50 my-3 rounded-lg borderGreen p-4 w-full outline-none focus:ring-4 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-primary-300 focus:border-primary-600 ring-primary-50"
            }`}
            {...register("message", {
              required: "Please enter a valid message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message?.toString()}</small>
            </div>
          )}
        </div>

        <button 
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary-600 text-secondary-50 rounded-full
            outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-primary-700 active:scale-105
            disabled:scale-100 disabled:bg-opacity-65'
        >
          Submit <FaPaperPlane className='text-xs text-secondary-50 opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /> {" "}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-primary-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}

    </motion.section>
  )
}
