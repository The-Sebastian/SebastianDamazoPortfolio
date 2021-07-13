import React from 'react';
import {GiGraduateCap} from 'react-icons/gi'
import {RiCodeSSlashFill} from 'react-icons/ri'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const Education = () =>  (
 
  <Section id="about">
    <SectionDivider/>
    <br />
    <SectionTitle>Education</SectionTitle>
    <List>
      <ListItem>
        <GiGraduateCap size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>University of California, Santa Barbara</ListTitle>
          <ListParagraph>
            Bachelor of Science, <br />
            Mathematical Science
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiCodeSSlashFill size="2.5rem" />
        <br />
        <ListContainer>
          <ListTitle>CodeSmith</ListTitle>
          <ListParagraph>
            Software Engineering Residency, <br />
            Computer Software Engineering
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Education;