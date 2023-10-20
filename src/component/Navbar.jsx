import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpen ,FaPhone,FaFacebookF,FaBehance,FaYoutube,FaLinkedin,FaPinterestP } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className='m-2 text-danger'><FaEnvelopeOpen/></span>
                        <span>
                            infomail@medidove.com
                        </span>

                        <span className='ms-4'>
                            <span className='m-2 text-danger'><FaPhone/></span>
                            9810918422
                        </span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item mt-2 "><Link style={{color:'red'}} to="#" aria-current="page">Needs Help? </Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link" style={{color:'gray'}}>Setting & Privacy </Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link" style={{color:'gray'}}>Media
                        </Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link" style={{color:'gray'}}>
                        <span className='social-icon'><FaFacebookF/></span>
                        <span className='social-icon'><FaBehance/></span>
                        <span className='social-icon'><FaYoutube/></span>
                        <span className='social-icon'><FaLinkedin/></span>
                        <span className='social-icon'><FaPinterestP/></span>
                        </Link></li>

                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar
