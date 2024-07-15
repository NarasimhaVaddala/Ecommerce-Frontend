import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black text-white p-4">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="footer-div social-div">
                    <div className="text-xl font-semibold mb-2">nCART</div>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, rem?</p>
                    <div className="icons flex space-x-4 mt-4">
                        <Link target='_blank' to="https://linkedin.com/in/narasimhavaddala" className='hover:scale-110'>
                            <i className="fa-brands fa-linkedin text-3xl cursor-pointer"></i>
                        </Link>
                        <Link target='_blank' to="https://x.com/Narasimha_62" className='hover:scale-110'>
                            <i className="fa-brands fa-twitter text-3xl cursor-pointer"></i>
                        </Link>
                        <Link target='_blank' to="https://www.facebook.com/profile.php?id=100014866861584" className='hover:scale-110'>
                            <i className="fa-brands fa-facebook text-3xl cursor-pointer"></i>
                        </Link>
                    </div>
                </div>

                <div className="footer-div men-div text-right md:text-left">
                    <div className="text-xl font-semibold mb-2">Shop Men</div>
                    <div className="footer-links flex flex-col space-y-2">
                        <Link className="text-base transition-all duration-300 hover:pl-2">Top wear</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Bottom wear</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Inners</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Footwear</Link>
                    </div>
                </div>

                <div className="footer-div women-div">
                    <div className="text-xl font-semibold mb-2">Shop Women</div>
                    <div className="footer-links flex flex-col space-y-2">
                        <Link className="text-base transition-all duration-300 hover:pl-2">Top wear</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Bottom wear</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Inners</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Footwear</Link>
                    </div>
                </div>

                <div className="footer-div kids-div text-right md:text-left">
                    <div className="text-xl font-semibold mb-2">Shop Kids</div>
                    <div className="footer-links flex flex-col space-y-2">
                        <Link className="text-base transition-all duration-300 hover:pl-2">Boys</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Girls</Link>
                        <Link className="text-base transition-all duration-300 hover:pl-2">Babies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
