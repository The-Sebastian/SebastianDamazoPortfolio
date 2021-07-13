import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Featured Speaker', text: '@SingleSprout\'s Speaker Series: "Cloud Tech & AWS services"'},
  { number: '2000+ Claps', text: 'On Medium Article: Axon — APIs, Automation, & Testing ', },
  { number: 'Edison-McNair Scholarship', text: 'Researched under UCSB Physics Departent', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
