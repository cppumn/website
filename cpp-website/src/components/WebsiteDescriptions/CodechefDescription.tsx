import Description from "./Description";

const logo = require("img/logos/Codechef_logo512.png");
const url = "https://www.codechef.com/";

const CodechefDescription = () => {
  return (
    <Description 
      logo={logo} 
      url={url}
      title="CodeChef"
      text="
        resource...
      "
    />
  );
};

export default CodechefDescription;
