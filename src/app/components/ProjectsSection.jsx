"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ElStriker-FootBall Prediction Website",
    description: "Project 1 description",
    image: "/images/projects/Elstriker.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 2,
    title: "RapidQube - Website",
    description: "About RapidQube Website",
    image: "/images/projects/Rapidqube.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.rapidqube.com/",
  },
  {
    id: 3,
    title: "RapidQube- Beharin Website",
    description: "About RapidQube Beharin Website",
    image: "/images/projects/RapidQube.Com_Img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://rapidqube.bh/",
  },
  {
    id: 4,
    title: "Kalekik- Cricket Prediction App",
    description: "Predcition based on Points",
    image: "/images/projects/Kalekikentire.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Admin Dashboard- Careers for HaodaPay",
    description: "Project 2 description",
    image: "/images/projects/AdminDashboardEntire.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "HaodaPay Solutions - Website",
    description: "About HaodaPay Solutions Website",
    image: "/images/projects/HaodaPay_Solution_Private_Ltd_Img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://haodapay.com/",
  },
  {
    id: 7,
    title: "HaodaMart - Online Shopping Website",
    description: "Online Shopping Website for HaodaPay Solutions",
    image: "/images/projects/Haodamart_Img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://haodamart.com/",
  },
  {
    id: 8,
    title: "i2Global- E Learning Website",
    description: "About i2Global E Learning Website",
    image: "/images/projects/i2Global_Img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://i2global.in/",
  },
  {
    id: 9,
    title: "AynMedia - Website",
    description: "About AynMedia Digital Marketing Agency",
    image: "/images/projects/AynMedia_Img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ayntech.in/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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

export default ProjectsSection;
