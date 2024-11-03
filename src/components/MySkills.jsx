import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  PinkText,
} from "../styles/Global.styled";

import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";

import { Skills } from "../utils/Data";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        flex="1"
        responsiveFlex
        responsiveDirection="column-reverse"
      >
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visable"
        >
          {Skills.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.title}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visable"
        >
          <Heading as="h4" size="h4">
            Kompetencje
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            Mój <PinkText>zakres umiejętności</PinkText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            Jestem doświadczonym Front End Developerem, specjalizującym się w
            tworzeniu interaktywnych i responsywnych interfejsów użytkownika.
            Moja pasja do kodowania jest wspierana wieloletnim doświadczeniem w
            pracy z najnowszymi technologiami webowymi.
          </ParaText>
          <ParaText>
            Moje umiejętności obejmują głęboką znajomość HTML, CSS i JavaScript,
            a także znajomość popularnych frameworków i bibliotek, takich jak
            React. Dzięki temu jestem w stanie nie tylko tworzyć estetyczne
            strony internetowe, ale również zapewnić użytkownikom płynne i
            intuicyjne doświadczenia. Moja praca opviera się nie tylko na
            estetyce i funkcjonalności, lecz także na dbałości o optymalizację i
            dostępność stron internetowych, zapewniając użytkownikom szybkie
            ładowanie i dostępność na różnych urządzeniach.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
