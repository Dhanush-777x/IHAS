import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import News from './News';
import FAQ from './Faq';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask';

function Home() {
    return (
        <div>
            <motion.div
                id='Section1'
                className="app-container relative flex justify-center items-center px-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="hero-text font-bold text-white levitate">Empowering Health: Connecting Patients, Doctors, and Researchers for a Better Tomorrow</h1>
                <div className="circle rounded-full"></div>
            </motion.div>

            <motion.div
                id='Section2'
                className='features-section flex flex-col justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2 className="features-heading text-4xl font-semibold text-gray-800 mb-20">Features</h2>
                <div className='flex flex-wrap justify-center'>

                    <motion.div
                        className="card glassmorphism mx-3 mb-4 sm:w-80"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faUser} className="features-icon" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Patients</h2>
                        <p className="text-gray-700 mb-8">Access comprehensive information on diseases, symptoms, vaccinations, and nearby medical centers.</p>
                        <Link to="/diseases" className="glassmorphism-button py-2 my-10 mx-10 text-center text-gray-700 hover:text-black hover:shadow-2xl lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black"
                            whileHover={{ scale: 1.05 }}
                        >
                            View More
                        </Link>
                    </motion.div>

                    <motion.div
                        className="card glassmorphism mx-3 mb-4 sm:w-80"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faUserMd} className="features-icon" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Doctors</h2>
                        <p className="text-gray-700 mb-8">Explore advanced medical equipment and surgical procedures for effective patient care.</p>
                        <Link to="" className="glassmorphism-button py-2 my-10 mx-10 text-center text-gray-700 hover:text-black hover:shadow-2xl lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black"
                            whileHover={{ scale: 1.05 }}
                        >
                            View More
                        </Link>
                    </motion.div>

                    <motion.div
                        className="card glassmorphism mx-3 mb-4 sm:w-80"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faFlask} className="features-icon" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Researchers</h2>
                        <p className="text-gray-700 mb-9">Access a repository of research papers and contribute to advancements in medical science.</p>
                        <Link to="" className="glassmorphism-button py-2 my-10 mx-10 text-center text-gray-700 hover:text-black hover:shadow-2xl lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black"
                            whileHover={{ scale: 1.05 }}
                        >
                            View More
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <News/>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;
