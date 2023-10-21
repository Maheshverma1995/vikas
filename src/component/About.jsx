import React from 'react'
import '../App.css'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row header-1'>
          <div className='col-12 d-flex justify-content-between  pt-200 pb-200'>
            <div className='pl-100'><h4>We are here for your care.</h4>
              <h1>About Us</h1></div>
            <div className='pr-100'> home</div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src="" alt="" />
          </div>
          <div className='col-md-6'>
            <p>About Us</p>
            <h1>Short Story About MediDove Clinic.</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Our Mission</h5>
                    <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Our Vission</h5>
                    <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

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
            <div className='col-lg-4'>
              <div class="card border border-0">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">358+</h1>
                  <h5 class="card-title">Worldwide Branches</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="card border border-0">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">358+</h1>
                  <h5 class="card-title">Hospital Formed</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="card border border-0">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">238+</h1>
                  <h5 class="card-title">Local Partners</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid theme-bg2'>
        <div className='container'>
          <div className='row'>
            <div className='col-8 white-bg mb-150' style={{ marginTop: '100px' }}>
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
      <div className='containet-fluid'>
        <div className='row pl-100 pr-50'>
          <div className='row'>

            <div className='col-12 d-flex justify-content-between  pt-200 pb-200'>
              <div className='header-2 pt-50 pb-100'>
                <p className='pink-color fs-4'>Our Team</p>
                <h1 style={{fontSize:'80px'}}>A Professional <br />& Care Provider</h1>
                <img src="./Image/section-title-line.png" alt="" />
              </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
