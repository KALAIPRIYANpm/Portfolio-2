import React, { useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const skills = [
  { name: 'React', icon: assets.reactimg },
  { name: 'JavaScript', icon: assets.js },
  { name: 'Next.js', icon: assets.nextjs },
  { name: 'Node.js', icon: assets.nodejs },
  { name: 'Java', icon: assets.java },
  { name: 'C', icon: assets.c },
  { name: 'Linux', icon: assets.linux },
  { name: 'Git/GitHub', icon: assets.git },
  { name: 'MongoDB', icon: assets.mongodb },
  { name: 'MySQL', icon: assets.mysqlimg },
  { name: 'AWS', icon: assets.aws },
  { name: 'Bootstrap', icon: assets.bootstrap },
  { name: 'Material UI', icon: assets.mui },
  { name: 'BlockChain', icon: assets.blockchain }
];

const tools = [
  assets.intellij, assets.vscode, assets.git,
  assets.kalilinux, assets.metamask, assets.firebase, assets.postman
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

useEffect(() => {
  AOS.init({
    duration: 1000, 
    offset: 80,
    once: true,
    easing: 'ease-in-out'
  });
}, []);

  return (
    <>
      <h2  className="skills-heading text-center" data-aos="fade-up">
        Skills
      </h2>
      <section className="skills-section container py-5">
        <div className="row g-3 justify-content-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in">
              <div className="skill-box text-center shadow-sm">
                <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                <p className="mt-2 small fw-medium">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

       <h3 className="tools-heading text-center mt-5" data-aos="fade-up">
  Tools I Use
</h3>
<div className="row g-3 justify-content-center mt-3">
  {tools.map((icon, idx) => (
    <div 
      key={idx} 
      className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" 
      data-aos="flip-up"
    >
      <div className="tool-box shadow-sm">
        <Image src={icon} alt={`Tool ${idx}`} width={30} height={30} />
      </div>
    </div>
  ))}
</div>

      </section>
    </>
  );
};

export default Services;
