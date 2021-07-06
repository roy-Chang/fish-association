import React from 'react';
import { FirstBackground } from '../components/home/home-1vh/styled';
import { SecondBackground } from '../components/home/home-2vh/styled';
import { ThirdBackground } from '../components/home/home-3vh/styled';
import { FourBackground } from '../components/home/home-4vh/styled';
import { FifthBackground } from '../components/home/home-5vh/styled';
import {ScrollSection, ScrollContainer} from 'react-onepage-scroll'

// first floor component
import FirstFloor from '../components/home/home-1vh/FirstFloor';
import SecondFloor from '../components/home/home-2vh/SecondFloor';
import ThirdFloor from '../components/home/home-3vh/ThirdFloor';
  
function App() {
  return (
    <ScrollContainer>
      <ScrollSection pageId={0}>
        <FirstBackground />
        <FirstFloor />
      </ScrollSection>
 
      <ScrollSection pageId={1}>
        <SecondFloor />
        <SecondBackground />
      </ScrollSection>
 
      <ScrollSection pageId={2}>
        <ThirdFloor />
        <ThirdBackground />
      </ScrollSection>

      <ScrollSection pageId={3}>
        <FourBackground />
      </ScrollSection>

      <ScrollSection pageId={4}>
        <FifthBackground />
      </ScrollSection>
    </ScrollContainer>
  );
}
 
export default App;