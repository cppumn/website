import "css/MainPage.css"

import { Link } from "react-router-dom"

const MainPage = () => {
  return (
    <div className="page">
      <h2 className="page-title"> Welcome to the Competitive Programming Club (CPP) </h2>
      <Link to="/room" state={{msg: "Groovtama: You barely made it!"}}> Room Page </Link>
      <div className="page-text">
        <p>
          We're a student group at the University of Minnesota interested in competitive programming.
        </p>
        <p>
          Our goal is to create an environment where students can hone their speed and accuracy in solving challenging problems, learn new programming concepts, and prepare for competitions and interviews.
        </p>
        <p>
          Join our Discord to attend meetings and keep up to date!
        </p>
      </div>
      <h2 className="discord-link">UMN.CPP Discord</h2>
      <iframe src="https://discord.com/widget?id=646499730343460864&theme=dark" width="350" height="500" style={{border: '0px'}} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord widget"></iframe>
    </div>
  )
}

export default MainPage
