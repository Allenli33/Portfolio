"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [startTransition, isPending] = useTransition();
  const handleTabChange = (id) => { 
      startTransition(() => {
        setTab(id);
      });
    }

  return  <section className="text-white"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
  <Image
              src="/images/about-image.png"
              alt="About Image"
              
              width={500}
              height={500}
            />
        <div>
  <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
  <p className="text-pink-300
 lg:text-lg">I am a recent graduate of the Computer Information Technology program at BCIT, with a specialization in web development and web application design. My technical proficiency includes JavaScript, HTML, CSS, and extensive experience with Node.js and Flask. My skills also encompass algorithm design, database management, and cloud services, particularly AWS. Additionally, I have hands-on experience with infrastructure as code and automation tools, including Terraform and Ansible, further enhancing my ability to manage complex web environments and deploy scalable applications.</p>
  
    <div className='flex flex-row mt-8'></div>
      <span className='mr-3 font-semibold hover:text-white text-[#ADB&BE] border-b border-purple-500'>Skills</span>
      <span>Education</span>
      <span>Experience</span>
  </div>

  </div>
  
  </section>

};

export default AboutSection;