import React from 'react';
import HeroSection from '../Components/HeroSection';
import { styled } from 'styled-components';
import Agenda from '../Components/Agenda';
import WhyToAttend from '../Components/WhyToAttend';
import Takeaways from '../Components/Takeaways';
import NavigationBar from '../Components/NavigationBar';

const CustomSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function SparkView() {
  return (
    <>
   
      <CustomSection>
        <HeroSection />
      </CustomSection>
      <CustomSection>
        <Agenda />
      </CustomSection>
      <CustomSection>
        <WhyToAttend />
      </CustomSection>
      <CustomSection>
        <Takeaways />
      </CustomSection>
    </>
  );
}

export default SparkView;
