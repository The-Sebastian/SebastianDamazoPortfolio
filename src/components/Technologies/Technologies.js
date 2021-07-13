import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {FaServer} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      I am proficient in <b style={{color:'white'}}>JavaScript</b>, <b style={{color:'white'}}>Python</b> and <b style={{color:'white'}}>Java</b> with the following Frameworks.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            React Hooks <br />
            Redux <br />
            HTML/CSS/SCSS <br />
            Material UI <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaServer size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            Webpack <br />
            Babel <br />
            RESTful API <br />
  

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            SQL <br />
            NoSQL <br />
            MongoDB <br />
            PostgreSQL <br />
            GraphQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
