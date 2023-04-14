import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="footer_logo" />
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque amet saepe omnis, deleniti doloribus rem, possimus provident nesciunt perferendis est nobis consectetur tenetur eaque modi maiores dicta totam. Recusandae, nulla.</p>
                <div className="footer_socials">
                    <a href="#" target="" rel="nonreferrer"><FaLinkedinIn/></a>
                    <a href="#" target="" rel="nonreferrer"><FaFacebookF/></a>
                    <a href="#" target="" rel="nonreferrer"><AiOutlineTwitter/></a>
                    <a href="#" target="" rel="nonreferrer"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/">Blog</Link>
                <Link to="/">Case Studies</Link>
                <Link to="/">Events</Link>
                <Link to="/">Communities</Link>
                <Link to="/">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/gallery">Contact US</Link>
                <Link to="/contact">Support</Link>
            </article>
        </div>
        <div className="footer_copy">
                <small>2022 PROJECT TUTORIAL.All Right Reserved</small>
            </div>
    </footer>
  )
}

export default Footer
