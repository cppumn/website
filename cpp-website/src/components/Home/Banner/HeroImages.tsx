import { Box, Image } from "@chakra-ui/react";
import { icpcTeam } from "globals/CPPInfo";

type HeroImagesProps = {
  props?: any;
};

// Might want to show the center of the board as the screen shrinks
const HeroImages = (props: HeroImagesProps) => {
  return (
    <Box 
      display={["none", "none", "block", "block", "block"]}
      width="700px"
      height="500px"
      position="relative"
      {...props}
    >
      <Image
        src={icpcTeam}
        width="80%"
        top="0"
        right="0"
        position="absolute"
        borderRadius="22px"
      />
      <Image
        src={icpcTeam}
        width="80%"
        left="0"
        bottom="0"
        position="absolute"
        borderRadius="22px"
      />
    </Box>
  )
}

export default HeroImages;