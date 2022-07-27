import "css/UofMHeaderFooter.css"

const UofMHeader = () => {
  return (
    <div>
      <div style={{background: "#7a0019"}}>
        <header className="umnhf" id="umnhf-h" role="banner">
          {/* Skip Links: Give your nav and content elements the appropriate ID attributes */}
          <div id="skipLinks"><a href="#main-nav">Main navigation</a><a href="#main-content">Main content</a></div>
          <div className="printer"><div className="left"></div><div className="right"><strong>University of Minnesota</strong><br />http://twin-cities.umn.edu/<br />612-625-5000</div></div>
          <div className="umnhf" id="umnhf-h-mast">
            <a className="umnhf" id="umnhf-h-logo" href="http://twin-cities.umn.edu/"><span>Go to the U of M home page</span></a>
            <ul className="umnhf" id="umnhf-h-ql">
              <li><a href="http://onestop.umn.edu/">One Stop</a></li>
              <li className="umnhf"><a href="https://www.myu.umn.edu/">MyU <span></span>: For Students, Faculty, and Staff</a></li>
            </ul>
            {/* Button below is for dropdown toggle, only visible on mobile screens. If using
            a non-dropdown version you can delete this tag */}
            <button className="umnhf" id="umnhf-m-search">Search</button>
          </div>
          <form className="umnhf" id="umnhf-h-search" action="https://search.umn.edu/tc/" method="get" title="Search Websites and People" role="search">
            <label className="umnhf" htmlFor="umnhf-h-st">Search</label>
            <input className="umnhf" id="umnhf-h-st" type="text" name="q" />
            <label className="umnhf" htmlFor="umnhf-h-sb">Submit search query</label>
            <input className="umnhf" id="umnhf-h-sb" type="submit" value="" />
          </form>
        </header>
      </div>
    </div>
  )
}

export default UofMHeader
