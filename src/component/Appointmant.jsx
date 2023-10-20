import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaEnvelopeOpen, FaPhone, FaFileMedicalAlt } from 'react-icons/fa';

const Appointmant = () => {
  return (
    <div>
      <section className="appoinment">
        <div className="h4appoinment-thumb"></div>
        <div className="container-fluid p-0 fix">
          <div className="col-xl-6 offset-xl-6 bg-white p-3">
            <div>
              <div className="about-title  ps-5">
                <h5 className=" ps-4 fs-4" style={{ color: '#e12454' }}>Make An Appointment</h5>
                <h1 className=' p-3' style={{ color: '#223645' }}>Get An Appointment  For Get Release</h1>
              </div>
              <form class="h4appoinment-form ">
                <div class="row">
                  <div class="col-lg-6 m-2">
                    <div class="h4appoinment-input position-relative m-3">
                      <input type="text" placeholder="Enter Your Name" />
                      <i class="h4input-icon"><FaUserAlt /></i>
                    </div>
                  </div>
                  <div class="col-lg-6 m-2">
                    <div class="h4appoinment-input position-relative m-3">
                      <input type="text" placeholder="Enter Your Email" />
                      <i class="h4input-icon"><FaEnvelopeOpen /></i>
                    </div>
                  </div>
                  <div class="col-lg-6 m-2">
                    <div class="h4appoinment-input position-relative m-3">
                      <input type="text" placeholder="Enter Your Phone" />
                      <i class="h4input-icon"><FaPhone /></i>
                    </div>
                  </div>
                  <div class="col-lg-6 m-2">
                    <div class="h4appoinment-input position-relative m-3">
                      <input type="text" placeholder="Choose A Services" />
                      <i class="h4input-icon"><FaFileMedicalAlt /></i>
                    </div>
                  </div>
                </div>
              </form>
              <div className='mt-5 mb-4 ms-4'>
                <Link
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                  to=""
                  className="btn-icon"
                  style={{ animationDelay: '0.6s' }}
                  tabIndex="0"
                >
                  <span>+</span>Make Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointmant
