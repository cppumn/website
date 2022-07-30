import { HStack, Image, Heading } from "@chakra-ui/react";
const cppLogo = require("img/logos/ClubLogo.png");

const Logo = () => {
	return (
		<HStack spacing="0.5rem">
			<Image 
				boxSize="50px"
				src={cppLogo} 
				alt="logo of competitive programming club" 
				maxWidth="100%"
				height="auto"
			/>
			<Heading as='h1' size="lg">
				CPP UMN
			</Heading>
		</HStack>
	);
}

export default Logo;