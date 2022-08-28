import { Image } from "@chakra-ui/react";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import { board } from "globals/CPPInfo";

// Might want to show the center of the board as the screen shrinks
const Hero = () => {
  return (
    <HeroContainer>
      <Image 
        src={board} 
        alt=""
        minWidth={["2000px","2000px","2000px","2000px","100vw"]}
        // left="-50%"
        // pos="absolute"
      />
      <HeroContent />
    </HeroContainer>
  )
}

export default Hero;