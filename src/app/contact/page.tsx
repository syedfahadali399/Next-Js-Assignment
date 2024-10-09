import home from "../page"
import "../allpage.css"
import "../page.css"

function contact() {
    return(
        <div>
            <div className="navbar">
              <a href="/page" target="_blank">Home</a>
              <a href="/services" target="_blank">Services</a>
              <a>Contact Us</a>
              <a href="/about" target="_blank">About</a>
            </div>
            <div className="showcontact">
              <h1 id="contact">Contact Us</h1>
            </div>

        </div>
    )
}
export default contact