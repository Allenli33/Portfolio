"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul style={{ listStyleType: "none" }} className="list-disc pl-2">
        <li>Node.js</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>AWS</li>
        <li>Dcoker/k8s</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul style={{ listStyleType: "none" }} className="list-disc pl-2">
        <li>BCIT: Computer Information Technology</li>
        <li>Kwantlen Polytechnic University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul style={{ listStyleType: "none" }} className="list-disc pl-2">
        <li>AWS Cloud Practitioner in progress</li>
        <li>CompTIA S+ in progress</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState(TAB_DATA[0].id);
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div
        id="about"
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-3 xl:gap-16 sm:py-12 xl:px-12"
      >
        <Image
          src="/images/about-image.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-pink-200 lg:text-lg">
            I recently graduated from BCIT&apos;s Computer Information
            Technology diploma, specializing on web programming and web
            application design. My technical skills include JavaScript, HTML,
            CSS, and deep knowledge of Node.js and Flask. My expertise include
            algorithm creation, database management, and cloud services,
            particularly AWS. Furthermore, I have hands-on expertise with
            infrastructure as code and automation technologies such as Terraform
            and Ansible, which has improved my capacity to manage complicated
            web infrastructures and build scalable apps.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
