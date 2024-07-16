import React from 'react';
import { motion } from 'framer-motion';

import Homeie from '../Image/house.jpeg';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-5xl font-bold mb-4 text-gray-800 my-3'
      >
        About Property Pulse
      </motion.h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex items-center'
        >
          <motion.img
            src={Homeie}
            alt='Property Pulse'
            className='rounded-lg shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col justify-center'
        >
          <p className='mt-4 text-gray-700'>
            Property Pulse is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <p className='mt-8 text-gray-700'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mt-8 text-gray-700'>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
