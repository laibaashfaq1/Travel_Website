import React from 'react';
import { FaSquareBehance } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const Contact = () => {
  return (
    <div id='about' className='container mx-auto pt-16 px-8 md:px-16 lg:px-24'>
      <div className='grid md:grid-cols-2 gap-10'>

        {/* Left Side Text Content */}
        <div className='lg:w-1/2'>
          <h3 className='text-xl mb-4 font-medium'>Contact</h3>
          <p className='pt-8 mb-6'>
            Leave a message for your travel booking and travel guiding.
          </p>

          {/* Social Media Icons and Contact Info */}
          <div className='flex gap-3 items-center'>
            <span className="icon-wrapper">
              <MdMail />
            </span>
            <span>laibaashfaqahmed232@gmail.com</span>
          </div>

          <div className='flex gap-3 items-center'>
            <span className="icon-wrapper">
              <FaSquareBehance />
            </span>
            <span>laibaashfaq22</span>
          </div>
        </div>

        {/* Right Section Contact Form */}
        <form className='space-y-8'>

          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              className='h-[40px] bg-transparent border border-accent px-2'
              required 
              aria-label='Name'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input 
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='h-[40px] bg-transparent border border-accent px-2'
              required
              aria-label='Email'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='msg'>Message</label>
            <textarea 
              id='msg'
              name='message'
              rows={8}
              placeholder='Enter your message'
              className='bg-transparent border border-accent px-2'
              required
              aria-label='Message'
            />
          </div>

          <div className='flex'>
            <button 
          type='submit'
           className='h-[40px] w-full bg-black text-white border border-accent px-2 focus:outline-none'
            >
            Send
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;

