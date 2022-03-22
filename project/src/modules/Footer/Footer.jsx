import React from 'react';
import "./Footer.css"
import linkedin from "../../public/linkedin.png"
import youtube from "../../public/youtube.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer_container wrapper">
                <div className="footer_container_block">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores cupiditate dolorum
                        ducimus eligendi enim facere laboriosam magni minima molestiae, natus neque nisi, numquam optio
                        quam quibusdam quisquam reiciendis voluptatem?
                    </p>
                </div>
                <div className="footer_container_block">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores cupiditate dolorum
                        ducimus eligendi enim facere laboriosam magni minima molestiae, natus neque nisi, numquam optio
                        quam quibusdam quisquam reiciendis voluptatem?
                    </p>
                </div>
                <div className="footer_container_block">
                    <h3>Follow us</h3>
                    <p>
                        <h5>Let us be social</h5>

                        <ul className="footer_social_list">
                            <li>
                                <a href="#" className="social-link">
                                    <img src={linkedin} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={youtube} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={facebook} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <img src={instagram} alt=""/>
                                </a>
                            </li>
                        </ul>

                    </p>
                </div>
            </div>
            <div className="footer_copyright">Copyright ©2022 All rights reserved | This template is made by
                <a className="linkedin_link" href="https://www.linkedin.com/in/aliaksandr-varachkin/" target="_blank"
                   rel="noreferrer">Varachkin</a>
            </div>
        </footer>
    );
}

export default Footer;