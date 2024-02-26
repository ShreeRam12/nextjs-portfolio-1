"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Talwind CSS</li>
        <li>ReactJs/React Native</li>
        <li>Node JS/MongoDB</li>
        <li>Python/SQL/Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Engineering (Computer Science and Engineering).</li>
        <li>PSR ENGINEEERING COLLEGE, SIVAKASI, Affiliated to Anna University.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cisco CCNA (Routing and Switching)</li>
        <li>Cisco CCNA (CyberSecurity Essentials)</li>
        <li>Cisco CCNA (Introduction to IOT Networks)</li>
        <li>Cisco CCNA (Enterprenuership)</li>
        <li>Python Mini Project (Image Steno Graphy) & (Application Development)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With 2 years of experience in Front-End Development,
            I am a seasoned full stack web developer dedicated to crafting
            interactive and responsive web applications. Proficient in HTML/CSS,
            JavaScript, Tailwind CSS, React JS, Redux, and Node JS,
            I specialize in creating engaging user interfaces and seamless user experiences.
            My expertise also extends to MongoDB, Python, SQL, and Git,
            enabling me to effectively manage data and collaborate on projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
