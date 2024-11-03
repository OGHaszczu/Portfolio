import React from "react";

import { PaddingContainer, Heading, PinkText } from "../styles/Global.styled";
import Project from "./layouts/Project";
import { projectDetails } from "../utils/Data";

import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20px"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        size="h4"
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visable"
      >
        Moje Projekty
      </Heading>
      <Heading
        as={motion.h2}
        size="h2"
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visable"
        top="0.5rem"
      >
        Jakie <PinkText>Projekty wykonałem:</PinkText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer
          key={project.id}
          top="5rem"
          bottom="5rem"
          as={motion.div}
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visable"
        >
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
