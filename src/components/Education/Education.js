import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {FaServer} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const Education = () =>  (
 
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Education</SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>University of California, Santa Barbara</ListTitle>
          <ListParagraph>
            Bachelor Of Science <br />
            With A Major In Mathematical Science
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaServer size="2.5rem" />
        <ListContainer>
          <ListTitle>CodeSmith</ListTitle>
          <ListParagraph>
            Software Engineering Residency <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Education;