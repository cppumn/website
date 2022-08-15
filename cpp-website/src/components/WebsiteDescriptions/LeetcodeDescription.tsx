import Description from "./Description";

const logo = require("img/logos/LeetCode_logo_black512.png");
const url = "https://leetcode.com/";

const LeetcodeDescription = () => {
  return (
    <Description 
      logo={logo} 
      url={url}
      title="LeetCode"
      text="
        Perhaps the most well known of these resources, LeetCode is the most begginer friendly.
        Its built-in text editor includes syntax highlighting and lets you run your code on sample test cases so an IDE isn't even required (though it is still recommended).
        Furthermore, LeetCode also hosts seperate weekly and biweekly contests open to everyone.
      "
    />
  );
};

export default LeetcodeDescription;
