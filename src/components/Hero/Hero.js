import React from 'react';
import {Img} from '../Projects/ProjectsStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , List} from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Sebastian Damazo. <br />
        I'm a full-stack software Engineer!
      </SectionTitle>
      <List>
        <SectionText>
          I'm a Mathematician who found a passion for developing full-stack applications. I love cotributing to the open-source community with my experience in Front-End UX/UI desing and Back-End server architecture.
        </SectionText>
        <Img src={'/images/personal2.jpg'} style={{height:'250px', width:'400px', borderRadius:'10px', boxShadow:'3px 3px 10px rgb(100 100 100 / 100%)'}}/>
      </List>
      <Link href="#projects">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;