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
        As such, the format of Kattis problems mimics that of the International Collegiate Programming Contest (ICPC).
        Additionally, the majority of the club's competitions will be hosted on Kattis, so it is highly recommended to get accustomed to the format.
      "
    />
  );
};

export default KattisDescription;
