import React from 'react'
import '../App.css'
import { FaCheck,FaUserAlt,FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Costumer from './Costumer';

const About = () => {
  return (
    <div>
      <div className='container-fluid header-1'>
       
          <div className='container'>
            <div className='row'>
            <div className='col-12 pt-200 pb-200'>
            <div><h4>We are here for your care.</h4>
              <h1>About Us </h1>
              <div className='text-end'> home</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src="./Image/photo.jpeg" className='w-100 p-5' alt="" />
          </div>
          <div className='col-md-6'>
            <p>About Us</p>
            <h1>Short Story About MediDove Clinic.</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="./Image/vikas negi.jpeg" className="rounded-circle img-fluid mt-4 ms-5" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="./Image/vikas negi.jpeg" className="rounded-circle img-fluid mt-4 ms-5" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Our Vission</h5>
                    <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid gray-bg'>
        <div className='container'>
          <div className='row pt-50 '>
            <div className='col-lg-4 '>
              <div className="card border border-0 mb-30"style={{backgroundColor:'#f4f9fc'}}>
                <img src="./Image/counter-icon-1.png" className="card-img-top w-25 mb-30" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">358+</h1>
                  <h5 className="card-title">Worldwide Branches</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="card border border-0 mb-30"style={{backgroundColor:'#f4f9fc'}}>
                <img src="./Image/counter-icon-2.png" className="card-img-top w-25 mb-30" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">358+</h1>
                  <h5 className="card-title">Hospital Formed</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="card border border-0 mb-30"style={{backgroundColor:'#f4f9fc'}}>
                <img src="./Image/counter-icon-3.png" className="card-img-top w-25 mb-30" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">238+</h1>
                  <h5 className="card-title">Local Partners</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid theme-bg2'>
        <div className='container'>
          <div className='row'>
            <div className=' white-bg mb-150' style={{ marginTop: '100px' }}>
              <h5 className='mt-5 ps-5'>Our Approch</h5>
              <h1 className='mt-3 ps-5'>If you are a patient seeking quality.</h1>
              <p className='ps-5 mt-3'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <li className='ms-5'><div className='d-flex'> <span className='check border border-2 border-success-subtle '><FaCheck /></span> <p className='ps-4'>Ut enim ad minim veniam, quis nostrud exercit.</p>
              </div></li>
              <li className='ms-5'><div className='d-flex'> <span className='check border border-2 border-success-subtle '><FaCheck /></span> <p className='ps-4'>Ut enim ad minim veniam, quis nostrud exercit.</p>
              </div></li>
              <li className='ms-5'><div className='d-flex'> <span className='check border border-2 border-success-subtle '><FaCheck /></span> <p className='ps-4'>Ut enim ad minim veniam, quis nostrud exercit.</p>
              </div></li>
              <li className='ms-5'><div className='d-flex'> <span className='check border border-2 border-success-subtle '><FaCheck /></span> <p className='ps-4'>Ut enim ad minim veniam, quis nostrud exercit.</p>
              </div></li>
              <li className='ms-5'><div className='d-flex'> <span className='check border border-2 border-success-subtle '><FaCheck /></span> <p className='ps-4'>Ut enim ad minim veniam, quis nostrud exercit.</p>
              </div></li>
              <button className='w-100 p-3 text-center text-uppercase border border-0' style={{ backgroundColor: '#e12454', color: 'white ' }} type="button">make appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
            <div className=' row pt-200 pb-500'>
              <div className='header-2 col-md-6 pt-50 pb-100'>
                <p className='pink-color fs-4'>Our Team</p>
                <h1>A Professional <br />& Care Provider</h1>
                <img src="./Image/section-title-line.png" alt="" />
              </div>
              <div className='col-md-6  mb-40'>
                <Link
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                  to="appointment"
                  className="btn-icon ml-0"
                  style={{ animationDelay: '0.6s' }}
                  tabIndex="0"
                >
                  <span>+</span>Make Appointment
                </Link></div>
            </div>
          
          <div className='row'>
            <div mt-3 className='col-md-4'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>
            <div className='col-md-4 mt-3 pb-100'>
              <div>
                <img style={{ width: '250px' }} src="./Image/member1.png" className="card-img-top position-relative" alt="..." />
                <span className='position-absolute bottom-0 end-0 fs-1'>+</span>

                <h3 className='team-content' >Rosalina D. Williamson</h3>
                <h4 className='pink-color'>FOUNDER</h4>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-lg-6 pb-100  'style={{paddingLeft:'100px',marginTop:'100px'}}>
            <h5 className='primary-color'>We are available 24/7</h5>
            <h1 className='f-700 mt-4'>We Always Ready<br/> For A Challenge.</h1>
            <div className='pr-100 pt-100'>
              <Link
                data-animation="fadeInLeft"
                data-delay=".6s"
                to="appointment"
                className="btn-icon ml-0"
                style={{ animationDelay: '0.6s' }}
                tabIndex="0"
              >
                <span>+</span>Make Appointment
              </Link></div>
          </div>
          <div className='col-lg-6 pb-100 'style={{paddingLeft:'100px',marginTop:'100px'}}>
            <div className='d-flex'>
              <div><h1 className='green-color pe-5 f-700 '>1M+</h1></div>
              <div className='col-5'>
                <div className='d-flex mt-3'>
                  <span><FaUserAlt/></span>
                  <h6 > Satisfied Patients</h6>
                </div>
                <h6 className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
              </div>
            </div>
            <div className='d-flex'>
              <div><h1 className='green-color pe-5 f-700 mt-5'>100+</h1></div>
              <div className='col-5'>
                <div className='d-flex mt-5'>
                  <span className='mt-1 me-2'><FaThumbsUp/></span>
                  <h6 className='mt-2'> Satisfied Patients</h6>
                </div>
                <h6 className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
        <div className='col-12'style={{display:'flex',justifyContent:'center'}}>
            <div className='header-2 pt-50 pb-100'>
              <h6 className='ps-5'>Testimonials</h6>
              <h1 className='f-700'>Our Clients Says <br/><span className='ps-5'>About Us</span></h1>
              <img className='ps-3' src="./Image/section-title-line.png" alt="" />
            </div>

          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-8 '>
            <Costumer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
