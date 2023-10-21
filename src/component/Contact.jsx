import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import '../App.css'
import ContactForm from './ContactForm';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row header-1'>
          <div className='col-12 d-flex justify-content-between  pt-200 pb-200'>
            <div className='pl-100'><h4>We are here for your care.</h4>
              <h1>Contact Us</h1></div>
            <div className='pr-100'> home</div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row pt-50'>
          <div className='col-md-4'>
            <div class="card pt-60 pb-20">
              <div className='contact-i m-auto'><FaPhone /></div>
              <div class="card-body">
                <h1 class="card-title text-center">Call Here</h1>
                <p class="card-text text-center">+8 (123) 985 789<br />

                  +787 878897 87</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card pt-60 pb-20">
              <div className='contact-i m-auto'><FaEnvelope /></div>
              <div class="card-body">
                <h1 class="card-title text-center">Mail Here</h1>
                <p class="card-text text-center">Admin@BasicTheme.com<br />

                  Info@Themepur.com</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card pt-60 pb-20">
              <div className='contact-i m-auto'><FaMapMarkerAlt /></div>
              <div class="card-body">
                <h1 class="card-title text-center">Visit Here</h1>
                <p class="card-text text-center">27 Division St, New York, NY 10002, <br /> Jaklina, United Kingpung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row gray-bg'>
          <div className='col-12 d-flex justify-content-between  pt-200 pb-20'>
            <div className='pl-100'><p>Anything On your Mind</p>
              <h1>Estimate Your Idea</h1></div>
            <div className='pr-100'> <div className='mt-5'>
              <Link
                data-animation="fadeInLeft"
                data-delay=".6s"
                to="appointment"
                className="btn-icon ml-0"
                style={{ animationDelay: '0.6s' }}
                tabIndex="0"
              >
                <span>+</span>Make Appointment
              </Link></div></div>
          </div>
          <div className='row mt-5'>
          <ContactForm/>
        </div>
        </div>
        <div className='row'>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7004.182542310105!2d77.37251699999997!3d28.62702650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697875336355!5m2!1sen!2sin" height='500px' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

          </Iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
