import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  ParaText,
  Button,
} from "../../styles/Global.styled";
import {
  TechStackCard,
  ProjectImageContainer,
  ProjectImage,
} from "../../styles/MyProject.styled";

const Project = ({ data }) => {
  return (
    <FlexContainer flex="1">
      <div>
        <FlexContainer align="center" gap="1rem"></FlexContainer>
        <Heading as="h3" size="h3" bottom="1rem">
          {data.title}
        </Heading>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.description}
        </ParaText>
        <Button href={data.project_url}>Odwiedź Stronę</Button>
      </div>
      <ProjectImageContainer justify="flex-end">
        <ProjectImage src={data.project_img} alt={data.title} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
