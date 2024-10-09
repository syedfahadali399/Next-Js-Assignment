import Image from "next/image";
import "./page.css"
import "./allpage.css"

function home() {
  return (
    <div className="mainpage">
      <div className="navbar">
        <a>Home</a>
        <a href="/service" target="_blank">Services</a>
        <a href="/contact" target="_blank">Contact Us</a>
        <a href="/about" target="_blank">About</a>
      </div>
      <div className="showhome">
        <h1 id="home">Home Page</h1>
      </div>
    </div>
  );
}

export default home