'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { assets } from '@/assets/assets';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a6dz0ae',     
        'template_52nuq3s',    
        formRef.current,
        't3KusEKt2jvvA7XE1'     
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setSent(true);
          formRef.current.reset(); 
        },
        (error) => {
          console.error('Email error:', error.text);
        }
      );
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container text-center">
        <p className="connect-text">Connect with me</p>
        <h2 className="main-heading">Get in touch</h2>
        <p className="sub-text">
          I’d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>

        <div className="social-icons d-flex justify-content-center gap-4 mt-4 mb-5">
          <a href="https://github.com/KALAIPRIYANpm" target="_blank" rel="noreferrer">
            <Image src={assets.github} alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://linkedin.com/in/kalaipriyan-p-4b0584269/" target="_blank" rel="noreferrer">
            <Image src={assets.linkedIn} alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="mailto:kalaipriyan7777@gmail.com">
            <Image src={assets.email3} alt="Email" width={30} height={30} />
          </a>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form mx-auto">
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" name="from_name" required className="form-control custom-input" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <input type="email" name="from_email" required className="form-control custom-input" placeholder="Enter your email" />
            </div>
            <div className="col-12">
              <textarea name="message" required className="form-control custom-textarea" rows="5" placeholder="Enter your message" />
            </div>
            <div className="text-center mt-4">
              <button type="submit" style={{ marginTop: "30px" }} className="btn btn-dark">
                Submit Now
                <Image alt="submit" src={assets.right_arrow_white} width={18} height={18} />
              </button>
              {sent && (
                <p className="mt-3 text-success fw-semibold">Your message has been sent successfully!</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
