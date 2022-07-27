import "css/UofMHeaderFooter.css"

import { Link } from "react-router-dom"

/* OPTIONAL UNIT IDENTIFICATION AND NAVIGATION
  You may remove this section if you do not wish to use it.
  Must have at least four links and no more than eight.
  Set options for link orientation in _config.scss
  Delete this comment on prod */

const UofMHeaderOptional = () => {
  return (
    <div>
      <div className="umnhf toggle display-after-menu-collapse" id="umnhf-alt-um"> 
        &#9776; <span className="visually-hidden">Main</span> Menu 
      </div>
      <header id="umnhf-alt" className="umnhf">
        <nav id="umnhf-alt-n" role="navigation">
          <ul>
            <li>
              <Link to="/room" className="active">Home</Link>
            </li>
          </ul>
        </nav>
        <div id="umnhf-alt-sn">
          <h2>Competitive Programming Club</h2>
          {/* Optional Parent Office Name */}
          {/* <p>Parent Office Name</p>  */}
        </div>
      </header>
      {/* END UNIT IDENTIFICATION AND NAVIGATION */}
      <a id="main-nav"></a>
      <a id="main-content"></a>
    </div>
  )
}

export default UofMHeaderOptional
