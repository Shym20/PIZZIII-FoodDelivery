import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src="src/assets/logoBlack.png" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore rem voluptas. Libero quia alias pariatur sequi totam illum maxime voluptate eos accusamus voluptatem molestiae itaque veritatis quisquam doloremque, at, harum voluptatibus optio quod sint.</p>
                <div className="footer-social-icons">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9926219619</li>
                    <li>shyampadiyar38@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Pizziii.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
