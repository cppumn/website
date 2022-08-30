import { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Hero from "components/Home/Hero/Hero";
import Mission from "components/Home/Mission";
import About from "components/Home/About/About";
import GetInvolved from "components/Home/GetInvolved";
import Banner from "components/Home/Banner";

const MainPage = () => {
  const aboutRef = useRef<any>(null);
  return (
    <Flex flexDir="column" m="auto">
      <Hero scrollToRef={aboutRef}/>
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
