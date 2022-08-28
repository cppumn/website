import { Box, Image } from "@chakra-ui/react";
import { icpcTeam, 
 } from "globals/CPPInfo";

type HeroImagesProps = {
  props?: any;
};

// Might want to show the center of the board as the screen shrinks
const HeroImages = (props: HeroImagesProps) => {
  return (
    <Box 
      display={["none", "none", "none", "grid"]}
      width="800px"
      gridTemplateRows="1fr"
      position="relative"
      {...props}
    >
      <Image
        src={icpcTeam}
        gridColumn="2 / span 2"
        gridRow="1 / span 2"
        borderRadius="22px"
      />
      <Image
        src={icpcTeam}
        gridColumn="1 / span 2"
        gridRow="2 / span 2"
        borderRadius="22px"
      />
    </Box>
  )
}

export default HeroImages;