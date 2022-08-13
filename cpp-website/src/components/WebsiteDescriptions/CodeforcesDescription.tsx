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
        Codeforces is a massively popular website that hosts weekly two-and-a-half hour long programming contests that you can compete in online.
        They also keep an archive of all their past problems and users can practice them anytime.
      "
    />
  );
};

export default CodeforcesDescription;
