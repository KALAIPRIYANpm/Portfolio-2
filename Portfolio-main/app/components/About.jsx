'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';
import './About.css';

const About = () => {
  const [showTitlePopup, setShowTitlePopup] = useState(false);
  const { darkMode } = useDarkMode(); 

  const handleShowPopup = () => {
    setShowTitlePopup(true);
    setTimeout(() => {
      setShowTitlePopup(false);
    }, 2000);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        handleShowPopup();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
    <h1
  style={{
    marginTop: '-20px',
    color: darkMode ? 'white' : 'black'
  }}
  className="section-title text-center"
  id="about"
>
  About Me
</h1>


      <section
        id="about"
        className={`about-section container py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      >
        <div className="row align-items-center g-4">
          <div className="col-lg-5 col-md-6 text-center">
            <Image
              style={{ borderRadius: '20px' }}
              src={assets.kalaipriyanimg}
              alt="Profile"
              width={320}
              height={320}
              className="about-image img-fluid shadow"
              priority
            />
          </div>

          <div id="content" className="col-lg-7 col-md-6">
            <div
              className="p-3 rounded-4 shadow-sm"
              style={{
                backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9',
                color: darkMode ? '#e0e0e0' : '#000'
              }}
            >
              <p>
                I am a passionate <strong>Full Stack Developer</strong> skilled in building modern and scalable web applications using the <strong>MERN stack</strong>.
                I enjoy creating responsive UIs with efficient backend systems.
              </p>
              <p>
                I'm highly motivated to explore the latest tech trends, including <strong>Web3, AI integration, cloud services (AWS/GCP)</strong>,
                and modern <strong>DevOps</strong> pipelines to improve deployment efficiency and performance.
              </p>
              <p>
                I love turning ideas into reality by developing real-world applications with <strong>secure authentication</strong>, smooth user experience, and
                <strong> modular architecture</strong> that supports scalability.
              </p>
              <p>
                I’m constantly learning and expanding my knowledge in frameworks, databases, APIs, and new technologies. 
                Exploring tools like <strong>Next.js, Prisma, MongoDB, Docker, and Blockchain</strong> is a part of my daily learning routine.
              </p>
              <p>
                In addition to technical work, I’m passionate about <strong>designing intuitive user interfaces</strong>, writing clean code, and working in collaborative environments that value creativity and innovation.
              </p>
            </div>
          </div>
        </div>

     
        <div className="row mt-5 gx-4 gy-4">
          <div className="col-12">
            <div
              className="info-card h-100 shadow-sm p-3 rounded-4"
              style={{
                backgroundColor: darkMode ? '#2b2b2b' : '#fff',
                color: darkMode ? '#f5f5f5' : '#000'
              }}
            >
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                  src={assets.project_icon}
                  alt="Experience Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 className={`fw-bold mb-0 ${darkMode ? 'text-light' : 'text-dark'}`}>Experience</h5>
              </div>
              <div className="card-content">
                <motion.h3
                  className="typing-title mb-3 role-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  MERN Stack Developer Intern – Neowep Software Technology
                </motion.h3>

                <motion.p
                  className="intern-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Worked as a MERN Stack Developer Intern, where I designed and developed
                  a complete web application with a responsive frontend (React.js),
                  efficient backend (Node.js & Express), and MongoDB integration.
                  Implemented secure authentication, REST APIs, and interactive dashboards
                  tailored for multiple user roles.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 gx-4 gy-4">
          <div className="col-12">
            <div
              className="info-card shadow-sm p-3 rounded-4"
              style={{
                backgroundColor: darkMode ? '#2b2b2b' : '#fff',
                color: darkMode ? '#f5f5f5' : '#000'
              }}
            >
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                  src={assets.edu_icon}
                  alt="Education Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 className={`fw-bold mb-0 ${darkMode ? 'text-light' : 'text-dark'}`}>Education</h5>
              </div>
              <div className="card-content">
                <h6 className="fw-semibold mb-1">B.E Computer Science & Engineering</h6>
                <p className="text-muted mb-2">Muthayammal Engineering College – 8.88 CGPA</p>

                <h6 className="fw-semibold mb-1">Higher Secondary Certificate (HSC)</h6>
                <p className="text-muted mb-2">Don Bosco Matriculation Hr. Sec. School – 80%</p>

                <h6 className="fw-semibold mb-1">Secondary School Leaving Certificate (SSLC)</h6>
                <p className="text-muted mb-0">Don Bosco Matriculation Hr. Sec. School – 90%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
