import { useState, useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Hero from "components/Home/Hero/Hero";
import ScrollDownMessage from "components/Home/ScrollDownMessage";
import Mission from "components/Home/Mission";
import About from "components/Home/About/About";
import GetInvolved from "components/Home/GetInvolved";
import Banner from "components/Home/Banner";

const MainPage = () => {

  const aboutRef = useRef<any>(null);
  const atTop = () => {return window.scrollY == 0}
  const [showMessage, setShowMessage] = useState(atTop());

  let updateShowMessage = () => {
    setShowMessage(atTop())
  }

  useEffect(() => {
    window.addEventListener('scroll', updateShowMessage);
    
    return () => window.removeEventListener('scroll', updateShowMessage);
  },[]);

  return (
    <Flex flexDir="column" m="auto">
      <Hero scrollToRef={aboutRef}/>
      {showMessage ?
        <ScrollDownMessage />
        :
        undefined
      }
      <Mission />
      <About containerRef={aboutRef}/>
      <GetInvolved />
      <Box mt={55}>
        <Banner/>
      </Box>
    </Flex>
  );
}

export default MainPage
