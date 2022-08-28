import { useRef } from "react";
import HomeContainer from "components/Home/HomeContainer";
import Hero from "components/Home/Hero/Hero";
import Mission from "components/Home/Mission";
import About from "components/Home/About/About";
import GetInvolved from "components/Home/GetInvolved";
import Banner from "components/Home/Banner";

const MainPage = () => {
  const aboutRef = useRef<any>(null);
  return (
    <HomeContainer>
      <Hero scrollToRef={aboutRef}/>
      <Mission />
      <About containerRef={aboutRef}/>
      <GetInvolved />
      <Banner />
    </HomeContainer>
  );
}

export default MainPage
