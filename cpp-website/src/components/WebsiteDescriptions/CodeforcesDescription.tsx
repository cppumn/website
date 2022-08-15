import Description from "./Description";

const logo = require("img/logos/Codeforces_logo512_square.png");
const url = "https://codeforces.com/";

const CodeforcesDescription = () => {
  return (
    <Description 
      logo={logo} 
      url={url}
      title="Codeforces"
      text="
        A massively popular website that hosts multiple two-and-a-half hour long programming contests a week. 
        The competitions have a wide range of difficulties with div. 4 or 3 contests being the most beginner friendly so don't be afraid to give them a shot.
        They also keep an archive of all their past problems and users can practice them at anytime.
      "
    />
  );
};

export default CodeforcesDescription;
