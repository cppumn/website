import Description from "./Description";

const logo = require("img/logos/Kattis_desk512.png");
const url = "https://open.kattis.com/";

const KattisDescription = () => {
  return (
    <Description
      logo={logo}
      url={url}
      title="Kattis"
      text="
        Kattis contains a massive archive of problems from programming contests from all over the world.
        Additionally, the majority of the club's competitions will be hosted on Kattis, so it is highly recommended to get accustomed to the interface.
      "
    />
  );
};

export default KattisDescription;
