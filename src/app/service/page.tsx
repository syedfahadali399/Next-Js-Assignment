import home from "../page"
import "../allpage.css"
import "../page.css"

function services() {
    return(
        <div>
            <div className="navbar">
              <a href="/page" target="_blank">Home</a>
              <a>Services</a>
              <a href="/contact" target="_blank">Contact Us</a>
              <a href="/about" target="_blank">About</a>
            </div>
            <div className="showservices">
              <h1 id="services">Our Services</h1>
            </div>

        </div>
    )
}
export default services