import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaWatchmanMonitoring, FaAdn } from 'react-icons/fa';
import Iframe from 'react-iframe';

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div class="container">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-botton mb-3">
                    <div class="col mb-3">
                        <Link to="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src="./Image/brand__logo__icon.png" style={{ backgroundColor: '#e12454', width: '100px', height: '100px', padding: '20px', borderRadius: '100%' }} alt="" />
                        </Link>

                        <div className='d-flex'><span className='fs-4' style={{ color: '#e12454' }}> <FaEnvelope /></span><p className='fs-5 ms-4'>info@examplemedical.com</p></div>
                        <div className='d-flex'><span className='fs-4' style={{ color: '#e12454' }}><FaWatchmanMonitoring /></span><p className='fs-5 ms-4'>examplemedical.com</p></div>
                        <div className='d-flex'><span className='fs-4' style={{ color: '#e12454' }}><FaAdn /></span><p className='fs-5 ms-4'>Shri radha sky garden <br />
                            38,plaza,bhangel,greater noida,Gaziabad
                            uttar pradesh 201218</p></div>
                    </div>

                    <div class="col mb-3">

                    </div>

                    <div class="col mb-3 mt-4">
                        <h5 className='fs-3'>More Links</h5>
                        <ul class="nav flex-column mt-5">
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">About Us</Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">Services</Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">Gallery</Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">Contact Us</Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">Pediatrics</Link></li>
                        </ul>
                    </div>

                    <div class="col mb-3 mt-4">
                        <h5 className='fs-3'>Contact us</h5>
                        <ul class="nav flex-column mt-5">
                            <Iframe>
                                
                            </Iframe>
                        </ul>
                    </div>

                    <div class="col mb-3 mt-4">
                        <h5 className='fs-3'>Opening Hours</h5>
                        <ul class="nav flex-column mt-5">
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white mt-3"><span className='fs-3'>Sunday - Friday</span>
                                <br /><span className='fs-5'>08:00 am - 10:00pm</span></Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white fs-3">Satarday Closed</Link></li>
                            <li class="nav-item mb-2"><Link to="#" class="nav-link p-0  text-white">Pricing</Link></li>

                        </ul>
                    </div>
                </footer>

            </div>
            <div className='border-2 border-top  '>
                <p class=" text-white bg-dark container-fluid p-3"><h1 className='fs-4 text-uppercase text-center text-white'>menalwell technologies pvt ltd © 2023</h1></p>
            </div>
        </div>
    )
}

export default Footer
