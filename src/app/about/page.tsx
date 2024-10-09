import home from "../page"
import "../allpage.css"
import "../page.css"

function about() {
    return(
        <div>
            <div className="navbar">
              <a href="/page" target="_blank">Home</a>
              <a href="/service" target="_blank">Services</a>
              <a href="/contact" target="_blank">Contact Us</a>
              <a>About</a>
            </div>
            <div className="showabout">
              <h1 id="about">About</h1>
            </div>

        </div>
    )
}
export default about