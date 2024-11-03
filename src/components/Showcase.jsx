import React from "react";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  PinkText,
  ParaText,
  IconContainer,
} from "../styles/Global.styled";

import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";

import { BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

import ShowCaseImg from "../assests/ja.jpg";
import BackgroundImg from "../assests/particle.png";

const Showcase = () => {
  return (
    <div>
      <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="5%"
        responisveLeft="1rem"
        responsiveReight="1rem"
        responsiveTop="5rem"
      >
        <FlexContainer flex="1" justify="center">
          <motion.div
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visable"
          >
            <Heading as="h4" size="h4">
              Hej!
            </Heading>
            <Heading as="h2" size="h2" bottom="1rem" top="0.5rem">
              Jestem <PinkText>Norbert</PinkText>
            </Heading>
            <Heading as="h3" size="h3">
              Jestem{" "}
              <PinkText>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Programistą",
                    3000, 
                    "Web Developerem",
                    3000,
                    "Grafikiem",
                    3000,
                  ]}
                  speed={30}
                  repeat={Infinity}
                />
              </PinkText>
            </Heading>

            <ParaText as="p" top="2rem" bottom="4rem">
              Hej, Nazywam sie Norbert i jestem Web Developerem z 2 letnim
              doświadczeniem w tworzeniu Stron oraz Sklepów Internetowych.
            </ParaText>
            <FlexContainer gap="20px" responsiveFlex>
              <IconContainer className="icona" color="white" size="1.5rem">
                <BsLinkedin />
              </IconContainer>
              <IconContainer className="icona" color="white" size="1.5rem">
                <BsFacebook />
              </IconContainer>
              <IconContainer className="icona" color="white" size="1.5rem">
                <BsTwitter />
              </IconContainer>
              <IconContainer className="icona" color="white" size="1.5rem">
                <BsInstagram />
              </IconContainer>
            </FlexContainer>
          </motion.div>
          <FlexContainer
            justify="flex-end"
            as={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visable"
          >
            <ShowcaseParticleContainer>
              <ShowcaseImageCard>
                <img className="profile-photo" src={ShowCaseImg} alt="JA" />
              </ShowcaseImageCard>
              <Particle
                as={motion.img}
                animate={{
                  x: [0, 80, 0],
                  y: [0, -10, 10, 0],
                  rotate: 360,
                  scale: [1, 0.7, 1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                src={BackgroundImg}
                top="-80px"
                left="20px"
                rotate="60deg"
              />
              <Particle
                as={motion.img}
                animate={{
                  x: [0, -20, 0],
                  y: [0, 50, 0],
                  rotate: -360,
                  scale: [1, 0.9, 1, 1.3, 1],
                }}
                transition={{ duration: 25, repeat: Infinity }}
                src={BackgroundImg}
                top="50px"
                right="-70px"
                rotate="0deg"
              />
              <Particle
                as={motion.img}
                animate={{
                  x: [0, 30, 0],
                  y: [0, 20, 0],
                  rotate: 360,
                  scale: [1, 0.8, 1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                src={BackgroundImg}
                bottom="10px"
                left="-70px"
                rotate="-60deg"
              />
            </ShowcaseParticleContainer>
          </FlexContainer>
        </FlexContainer>
      </PaddingContainer>
    </div>
  );
};

export default Showcase;
