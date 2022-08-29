import { Image } from "@chakra-ui/react";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import { board } from "globals/CPPInfo";

// Might want to show the center of the board as the screen shrinks

type HeroProps = {
  scrollToRef: React.MutableRefObject<null>,
  props?: any
}

const Hero = ({ scrollToRef, ...props}: HeroProps) => {
  return (
    <HeroContainer {...props}>
      <Image 
        src={board} 
        alt="Image of board with mathematical writing behind it"
        minWidth={["2000px","2000px","2000px","2000px", "100vw"]}
      />
      <HeroContent scroll={scrollToRef}/>
    </HeroContainer>
  )
}

export default Hero;