import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import Appointmant from './Appointmant';
import Slider from './Slider';
import ServicesArea from './ServicesArea';
import { FaCheck,FaArrowRight,FaStar} from "react-icons/fa";

const Home = () => {

  return (
    <div>
      <div className='containet-fluid'>
        <div className='row'>
          <Slider />
        </div>
      </div>
      {/* About section   */}
      <section className="about-area" id="about">
        <div className="container">
          <div className="row" style={{ marginTop: '100px' }}>
            <div className="col-xl-6 col-lg-5 position-relative">
              <div className="h4about-thumb pos-rel">
                <img src="./Image/WhatsApp Image 2023-10-12 at 11.49.32 AM.jpeg" alt="" className=" img-fluid rounded" />
                <Link to="#" className="call-btn  white-color w-50">
                  <i className="call-icon position-absolute">
                    <img src="./Image/about__phone__icon.png" alt="" />
                  </i>
                  <span >Call : 012 (963) 15632</span>
                </Link>
                <img src="./Image/orthopedic-patient-doctor-examines-s-knee-using-tuning-fork-62488941.webp" alt="" className=" img-fluid about-overlap__thumb rounded z-2" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7" style={{ paddingLeft: '50px' }}>
              <div className="about-right-side h4about-right mb-30">
                <div className="about-title mb-20">
                  <h5 style={{ color: '#fb0833' }}>About Samarpit Mediclinic</h5>
                  <h1 style={{ fontSize: '50px' }}>25+ Years We Provide Services</h1>
                </div>
                <div className="about-text">
                  <p className="theme-color">
                    After years of hard work and strenuous studying, I began practicing as a professional orthopedic surgeon since 2016.
                    My extensive medical knowledge combined with an ongoing curiosity to learn about the latest trends define my success in the medical field. To learn more about my medical and academic background...
                  </p>
                  <p className="mb-20" style={{ color: 'gray', fontSize: '15px' }}>
                    Please, read below...<br /><p className='ps-5'>I am an innovative orthopedic surgeon with experience performing...</p>
                  </p>
                </div>
                <div className="about-author d-flex align-items-center">
                  <div className="author-ava h4author-ava">
                    <img className='rounded-circle m-4' src="./Image/vikas negi.jpeg" alt="" />
                  </div>
                  <div className="author-desination h4author-destination">
                    <p style={{ color: 'gray' }}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h4 className="mb-0" >DR. Vikas Negi</h4>
                    <h6 className="pt-2" style={{ color: '#fb0833' }}>MBBS, MS(ortho), FISR, FIAS New Delhi</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section  */}
      <div className='container-fluid mt-5'>
        <div className='row' style={{ marginTop: '100px' }}>
          <ServicesArea />
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <Appointmant />
        </div>
      </div>
      <section className="hiring-area pos-rel">
        <div className="hiring-bottom pos-rel">
          <div className="container-fulid">
            <div className="row">
              <div className="col-xl-6 col-lg-8 mt-5">
                <div className="hire-text hire-text-2 ps-3">
                  <div className="about-title">
                <h5 className="ps-5" style={{ color: '#e12454' }}>Why Choose Us</h5>
                <h1 className=' ps-5' style={{fontSize:'60px', fontWeight: 'bolt',letterSpacing:'-1px', color: '#223645' }}>About Samarpit<br/> Mediclinic.</h1>
              </div>
                  <div className="about-text p-4">
                    <p className='ps-3'>
                      My extensive medical knowledge combined with an ongoing curiosity to learn about
                      the latest trends defines my success in the medical field. To learn more about my medical and academic background, please read below.
                    </p>
                  </div>
                  <ul className="professinals-list pt-5 pb-20">
                    <li className='d-flex mt-2 mb-2'>
                      <span className='check border border-2 border-success-subtle me-3'><FaCheck/></span>
                      <p>
                      Robotic total knee replacement.
                    </p>
                    </li>
                    <li className='d-flex mt-2 mb-2'>
                      <span className='check border border-2 border-success-subtle me-3'><FaCheck/></span>
                      <p>
                      Total hip replacement.
                    </p>
                    </li>
                    <li className='d-flex mt-2 mb-2'>
                      <span className='check border border-2 border-success-subtle me-3'><FaCheck/></span>
                      <p>
                      Reverse and total shoulder replacement.
                    </p>
                    </li>
                    <li className='d-flex mt-2 mb-2'>
                      <span className='check border border-2 border-success-subtle me-3'><FaCheck/></span>
                      <p>
                      Reverse and total shoulder.
                    </p>
                    </li>
                    <li className='d-flex mt-2 mb-2'>
                      <span className='check border border-2 border-success-subtle me-3'><FaCheck/></span>
                      <p>
                      Shoulder &amp; knee arthroscopic surgery.
                      </p>
                    </li>
                  </ul>
                  <div className="hiring-button mt-5 mb-5 text-center">
                    <a
                      data-animation="fadeInLeft"
                      data-delay=".6s"
                      href="contact.php"
                      className=" btn-icon btn-icon-green ml-0"
                    >
                      <span>+</span>Apply Today
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 why_chose">

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonials">
        <div className="container">
          <div className="row ">
            <div className="col-xl-7 offset-xl-5 h4testi-col">
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="h4testimonials-wrapper white-bg pos-rel">
                    <span className="h4testi-iconquato"><i className="fal fa-quote-right"></i></span>
                    <div className="h4testimonials-ratings">
                      <ul className="list-inline">
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                      </ul>
                    </div>
                    <div className="h4testimonials-content mb-20">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt me ut labore et dolore.
                      </p>
                    </div>
                    <div className="h4testimonials-author d-flex align-items-center">
                      <div className="h4testimonials--author__icon">
                        <img src="./Image/author-icon1.png" alt="" />
                      </div>
                      <div className="h4testimonials--author__info">
                        <h5 className="f-600 theme-color">Hiliam D. Pawlu</h5>
                        <span className="f-500 pink-color">Founder, TrashTheme</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="h4testimonials-wrapper white-bg pos-rel">
                    <span className="h4testi-iconquato"><i className="fal fa-quote-right"></i></span>
                    <div className="h4testimonials-ratings">
                      <ul className="list-inline">
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                      </ul>
                    </div>
                    <div className="h4testimonials-content mb-20">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt me ut labore et dolore.
                      </p>
                    </div>
                    <div className="h4testimonials-author d-flex align-items-center">
                      <div className="h4testimonials--author__icon">
                        <img src="./Image/author-icon1.png" alt="" />
                      </div>
                      <div className="h4testimonials--author__info">
                        <h5 className="f-600 theme-color">Hiliam D. Pawlu</h5>
                        <span className="f-500 pink-color">Founder, TrashTheme</span>
                      </div>
                    </div>
                  </div>
                </div><div className="col-md-6">
                  <div className="h4testimonials-wrapper white-bg pos-rel">
                    <span className="h4testi-iconquato"><i className="fal fa-quote-right"></i></span>
                    <div className="h4testimonials-ratings">
                      <ul className="list-inline">
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                      </ul>
                    </div>
                    <div className="h4testimonials-content mb-20">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt me ut labore et dolore.
                      </p>
                    </div>
                    <div className="h4testimonials-author d-flex align-items-center">
                      <div className="h4testimonials--author__icon">
                        <img src="./Image/author-icon1.png" alt="" />
                      </div>
                      <div className="h4testimonials--author__info">
                        <h5 className="f-600 theme-color">Hiliam D. Pawlu</h5>
                        <span className="f-500 pink-color">Founder, TrashTheme</span>
                      </div>
                    </div>
                  </div>
                </div><div className="col-md-6">
                  <div className="h4testimonials-wrapper white-bg pos-rel">
                    <span className="h4testi-iconquato"><i className="fal fa-quote-right"></i></span>
                    <div className="h4testimonials-ratings">
                      <ul className="list-inline">
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                        <li><FaStar/></li>
                      </ul>
                    </div>
                    <div className="h4testimonials-content mb-20">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt me ut labore et dolore.
                      </p>
                    </div>
                    <div className="h4testimonials-author d-flex align-items-center">
                      <div className="h4testimonials--author__icon">
                        <img src="./Image/author-icon1.png" alt="" />
                      </div>
                      <div className="h4testimonials--author__info">
                        <h5 className="f-600 theme-color">Hiliam D. Pawlu</h5>
                        <span className="f-500 pink-color">Founder, TrashTheme</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="photogallery pt-130 pb-180">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-title mb-65">
              <h5 className="pink-color">Photo Gallery</h5>
              <h1>Let’s See Latest Photo Album</h1>
            </div>
          </div>
        </div>
        <div className="row h4gallery-active slick-initialized slick-slider slick-dotted">
          <button type="button" className="slick-prev slick-arrow" style={{ display: 'block' }}>
            <i className="fal fa-angle-left"></i>
          </button>
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: '4800px',
                              }}
            >
              {/* Add your gallery items here */}
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 slick-slide slick-cloned"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: '600px' }}
              >
                <div className="gallery-box pos-rel">
                  <img src="./Image/samarpit.jpg" alt="" />
                  <div className="gallery-content">
                    <h2 className="f-600 theme-color">Trusted Partner</h2>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* Include the rest of your slider and pagination buttons here */}
          <button type="button" className="slick-next slick-arrow" style={{ display: 'block' }}>
            <FaArrowRight/>
          </button>
          <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
            <li className="" role="presentation">
              <button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 2" tabIndex="-1">
                1
              </button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 2" tabIndex="-1">
                2
              </button>
            </li>
            <li role="presentation" className="slick-active">
              <button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 2" tabIndex="0" aria-selected="true">
                3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
      <div className="fact gray-bg">
        <div className="container-fluid p-0">
          <div className="row no-gutters d-flex align-items-center">
            <div className="col-xl-5">
              <div className="h6fact-wrapper pt-30">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="h4facts-single border-facts text-center mb-30">
                      <i className="h4facts-icon h4facts-iconpink">
                        <img src="./Image/icon1.png" alt="" />
                      </i>
                      <span className="counter f-600 pink-color">3624</span>
                      <h5 className="f-500 theme-color">Medical Branch</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="h4facts-single box-shadow text-center mb-30">
                      <i className="h4facts-icon h4facts-icongreen">
                        <img src="./Image/icon2.png" alt="" />
                      </i>
                      <span className="counter f-600 green-color">1230</span>
                      <h5 className="f-500 theme-color">MBBS Doctors</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="h4facts-single box-shadow text-center mb-30">
                      <i className="h4facts-icon h4facts-icongreen">
                        <img src="./Image/icon3.png" alt="" />
                      </i>
                      <span className="counter f-600 green-color">7620</span>
                      <h5 className="f-500 theme-color">Local Partners</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="h4facts-single border-facts text-center mb-30">
                      <i className="h4facts-icon h4facts-iconpink">
                        <img src="./Image/icon4.png" alt="" />
                      </i>
                      <span className="counter f-600 pink-color">2430</span>
                      <h5 className="f-500 theme-color">Experience Nurse</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="h4facts-thumbbox pos-rel text-right">
                <div className="h4facts-thumb">
                  <img src="./Image/facti_right_thumb.jpg" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=WE1fSnXtXDs"
                    className="h4facts-playicon popup-video"
                  >
                    <i>
                      <img src="./Image/play-icon.png" alt="" />
                    </i>
                  </a>
                  <i className="h4facts-brandicon">
                    <img src="./Image/brand__logo__icon.png" alt="" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
