import "css/UofMHeaderFooter.css"

const UofMFooter = () => {
  return (
    <footer id="umnhf-f" className="umnhf" role="contentinfo">
      <nav id="umnhf-f-myu">
        <h3 className="umnhf-f-title visually-hidden">For Students, Faculty, and Staff</h3>
        <ul>
          <li><a href="http://onestop.umn.edu/">One Stop</a></li>
          <li><a href="https://www.myu.umn.edu/">My U <span></span></a></li>
        </ul>
      </nav>
      <small>&copy; <span id="cdate">2015</span> Regents of the University of Minnesota. All rights reserved. The University of Minnesota is an equal opportunity educator and employer. <a href="http://privacy.umn.edu">Privacy Statement</a></small>
      {/* Optional last updated link */}
      <small>Current as of <time dateTime="2015-02-20">February 20, 2015</time></small>
    </footer>
  )
}

export default UofMFooter
