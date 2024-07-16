import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Homeie from '../Image/hey.jpeg'
import {motion} from 'framer-motion'
import CountUp from 'react-countup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Magnetic from '../components/Magnetic';
import AboutBg from '../bgParallax/AboutBg';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  // console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      notifySuccess();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const notifySuccess = () => {
    toast.success('Email copied to clipboard!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
       <div className='relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${Homeie})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', 
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative flex flex-col gap-6 p-28 px-3 z-10'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          height: '700px',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-blue-600 italic text-xl lg:text-3xl mb-4'
        >
          "Your Favourite Place With{' '}
          <span className='text-slate-500 font-bold'>ZERO </span> Broker Fees."
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-slate-700 font-bold text-3xl lg:text-6xl'
        >
          Discover your next ideal  <br /><span className='text-slate-500 italic'>location</span>
          {' '}effortlessly 
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-black-400 text-xl sm:text-2xl my-6'
        >
          Property Pulse is the best place to find your future perfect place to
          live. <br />
          We have a wide range of properties for you to choose from.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link
            to='/search'
            className='text-xl sm:text-4xl text-blue-800 font-bold hover:underline'
          >
            Let's reach now...
          </Link>
        </motion.div>
      </motion.div>
    </div>

    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center mb-8'>
        <h2 className='md:text-5xl text-2xl font-bold text-gray-800'>Our Statistics This Year</h2>
      </div>
      
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
        {/* CountUp Component for Customers */}
        <div className='p-14 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition duration-300'>
        <CountUp end={17} duration={8} className='text-7xl text-purple-600 font-extrabold' />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>Customers</h3>
        </div>
        <div className='p-14 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition duration-300'>
        <CountUp end={1.5} duration={8} decimals={1} className='text-7xl text-purple-600 font-extrabold' />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>Years Experience</h3>
        </div>
        {/* CountUp Component for Houses Listed */}
        <div className='p-14 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition duration-300'>
        <CountUp end={11} duration={8} className='text-7xl text-purple-600 font-extrabold' />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>Houses Listed</h3>
        </div>
      </div>

      {/* Buttons Section - Responsive Flex */}
      <div className='flex flex-col items-center justify-center mt-14 gap-4 space-y-4 md:justify-center md:space-x-4'>
        <Magnetic>
        <a
          href='/search'
          className='inline-block px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xl font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 hover:text-white'
        >
          Search Houses
        </a>
        </Magnetic>
        <Magnetic>
        <button
          onClick={() => copyToClipboard('mihirnebani@gmail.com')}
          className='inline-block px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xl font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 hover:text-white'
        >
          Contact Us
        </button>
        </Magnetic>
      </div>

      <ToastContainer/>
    </div>

    <div>
      <AboutBg source={"house.jpeg"}/>
    </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
