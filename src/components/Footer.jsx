import React from "react";
import {
  PinkText,
  PaddingContainer,
  FlexContainer,
  Heading,
  Button,
} from "../styles/Global.styled";

import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";

import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled";

const Footer = () => {
  return (
    <div>
      <PaddingContainer id="Contact" top="5%" bottom="10%">
        <Heading
          as={motion.h4}
          size="h4"
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visable"
          align="center"
        >
          Kontakt
        </Heading>
        <Heading
          as={motion.h2}
          size="h2"
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visable"
          top="0.5rem"
          align="center"
        >
          Napisz <PinkText>do Mnie</PinkText>
        </Heading>
        <PaddingContainer top="3rem">
          <FlexContainer justify="center">
            <ContactForm
              as={motion.form}
              variants={fadeInBottomVariant}
              initial="hidden"
              whileInView="visable"
            >
              <PaddingContainer bottom="2rem">
                <FormLabel>Imię:</FormLabel>
                <FormInput type="firstName" placeholder="Wpisz swoje Imię" />
              </PaddingContainer>
              <PaddingContainer bottom="2rem">
                <FormLabel>Email:</FormLabel>
                <FormInput type="email" placeholder="Wpisz swój adres E-mail" />
              </PaddingContainer>
              <PaddingContainer bottom="2rem">
                <FormLabel>Telefon:</FormLabel>
                <FormInput type="tel" placeholder="Podaj swój numer telefonu" />
              </PaddingContainer>
              <PaddingContainer bottom="2rem">
                <FormLabel>Wiadomość</FormLabel>
                <FormInput as="textarea" placeholder="Napisz Wiadomość" />
              </PaddingContainer>
              <FlexContainer justify="center" responsiveFlex>
                <Button>Wyślij Wiadomość</Button>
              </FlexContainer>
            </ContactForm>
          </FlexContainer>
        </PaddingContainer>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
