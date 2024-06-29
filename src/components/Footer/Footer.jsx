import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
        return (
                <footer>
                        <div className="container grid grid-four--cols">


                                <div className="footer-div social-div">
                                        <div className="section-common--subheading">
                                                nCART
                                        </div>

                                        <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, rem?
                                        </p>

                                        <div className="icons">
                                                <Link target='_blank' to="https://linkedin.com/in/narasimhavaddala">
                                                        <i class="fa-brands fa-linkedin"></i></Link>

                                                <Link target='_blank' to="https://x.com/Narasimha_62">

                                                        <i class="fa-brands fa-twitter"></i>
                                                </Link>
                                                <Link target='_blank' to="https://www.facebook.com/profile.php?id=100014866861584">


                                                        <i class="fa-brands fa-facebook"></i>
                                                </Link>


                                        </div>
                                </div>

                                <div className="footer-div men-div">
                                        <div className="section-common--subheading">
                                                Shop Men
                                        </div>


                                        <div className="footer-links">
                                                <Link>Top wear</Link>
                                                <Link>Bottom wear</Link>
                                                <Link>Inners</Link>
                                                <Link>Footwear</Link>
                                        </div>
                                </div>

                                <div className="footer-div Women-div">
                                        <div className="section-common--subheading">
                                                Shop Women
                                        </div>


                                        <div className="footer-links">
                                                <Link>Top wear</Link>
                                                <Link>Bottom wear</Link>
                                                <Link>Inners</Link>
                                                <Link>Footwear</Link>
                                        </div>
                                </div>

                                <div className="footer-div kids-div">
                                        <div className="section-common--subheading">
                                                Shop Kids
                                        </div>


                                        <div className="footer-links">
                                                <Link>Boys</Link>
                                                <Link>Girls</Link>
                                                <Link>Babies</Link>
                                        </div>
                                </div>



                        </div>
                </footer>
        )
}
