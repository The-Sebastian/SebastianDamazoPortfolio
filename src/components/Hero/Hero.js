import React from 'react';
import {Img} from '../Projects/ProjectsStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , List} from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Sebastian Damazo. <br />
        I'm a full-stack web developer
      </SectionTitle>
      <List>
        <SectionText>
          The purpose of Javascript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome applications.  
        </SectionText>
        <Img src={'/images/personal2.jpg'} style={{height:'250px', width:'400px'}}/>
      </List>
      
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;