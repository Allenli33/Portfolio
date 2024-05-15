"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " Python Pygame Flappy Patrick",
    description:
      "Developed a Flappy Bird-inspired game, titled 'Flappy Patrick,' which incorporated real-time scoring and dynamic obstacles to enhance gameplay.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Python:Pygame"],
    gitUrl: "https://github.com/Allenli33/2515_Final_Project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Library Microservices",
    description:
      "Architected a distributed library management system using microservices, focusing on scalability and resilience.Enabled efficient microservice communication with Kafka and used Docker for consistent deployments, contributing to a robust and isolated environment",
    image: "/images/projects/6.jpg",
    tag: ["All", "Microservice"],
    gitUrl: "https://github.com/Allenli33/acit3855_lab7",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Network Provisioning with Terraform and Ansible",
    description:
      "Orchestrated cloud-based infrastructure deployment on AWS using Terraform for infrastructure as code practices and Ansible for automation of configuration and deployment tasks",
    image: "/images/projects/13.jpg",
    tag: ["All", "Network Provisioning"],
    gitUrl: "https://github.com/Allenli33/ACIT4640",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (tag === "All") return true;
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python:Pygame"
          isSelected={tag === "Python:Pygame"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Microservice"
          isSelected={tag === "Microservice"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Network Provisioning"
          isSelected={tag === "Network Provisioning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
