import Description from "./Description";

const logo = require("img/logos/LeetCode_logo_black512.png");
const url = "https://leetcode.com/";

const LeetcodeDescription = () => {
  return (
    <Description 
      logo={logo} 
      url={url}
      title="LeetCode"
      text="resource..."
    />
  );
};

export default LeetcodeDescription;
