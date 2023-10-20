import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item position-relative active">
                        <img src="./Image/HIP-Replacement.jpg" className="d-block w-100" alt="First slide" />
                        <div className="position-absolute  top-0  text-slider">
                       <div class="hero-slider-caption h4hero-content mb-35">
                                    <h1 class="white-color mt-3 fs-6" data-animation="fadeInUp" data-delay=".4s" style={{animationDelay: "0.4s;"}}>Health &amp;
                                        Doctor</h1>
                                    <p class="white-color mt-3 fs-6" data-animation="fadeInUp" data-delay=".6s" style={{animationDelay: "0.6s;"}}>Avoids
                                        pleasure itself, because it is pleasure,
                                        but because those who do not know how rationally <br/>encounter consequences
                                        that extremely system weathe.</p>

                                    <div class="h4-span" data-animation="fadeInUp" data-delay=".8s" style={{animationDelay: "0.8s;"}}>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span>
                                        </span>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span></span>
                                    </div>

                                </div>
                                <div class="hero-slider-btn h4hero-btn mt-5">
                                    <Link data-animation="fadeInLeft" data-delay=".9s" to="appoinment.php" class=" ms-3 mt-5 btn-icon ml-0" tabindex="0" style={{animationDelay: "0.9s;"}}><span>+</span>learn
                                        more</Link>
                                    <Link data-animation="fadeInLeft" data-delay="1s" to="appoinment.php" class=" ms-3 mt-5 btn-icon btn-icon-green ml-0" tabindex="0" style={{animationDelay: "1s;"}}><span>+</span>Our services</Link>
                                </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img src="./Image/Knee-Arthroscopy.jpg" className="d-block w-100" alt="Second slide" />
                        <div className="position-absolute  top-0  text-slider">
                       <div class="hero-slider-caption h4hero-content mb-35">
                                    <h1 class="white-color" data-animation="fadeInUp" data-delay=".4s" style={{animationDelay: "0.4s;"}}>Health &amp;
                                        Doctor</h1>
                                    <p class="white-color mt-3 fs-6" data-animation="fadeInUp" data-delay=".6s" style={{animationDelay: "0.6s;"}}>Avoids
                                        pleasure itself, because it is pleasure,
                                        but because those who do not know how rationally <br/>encounter consequences
                                        that extremely system weathe.</p>

                                    <div class="h4-span" data-animation="fadeInUp" data-delay=".8s" style={{animationDelay: "0.8s;"}}>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span>
                                        </span>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span></span>
                                    </div>

                                </div>
                                <div class="hero-slider-btn h4hero-btn mt-5">
                                    <Link data-animation="fadeInLeft" data-delay=".9s" to="appoinment.php" class=" ms-3 mt-5 btn-icon ml-0" tabindex="0" style={{animationDelay: "0.9s;"}}><span>+</span>learn
                                        more</Link>
                                    <Link data-animation="fadeInLeft" data-delay="1s" to="appoinment.php" class=" ms-3 mt-5 btn-icon btn-icon-green ml-0" tabindex="0" style={{animationDelay: "1s;"}}><span>+</span>Our services</Link>
                                </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img src="./Image/Knee-Replacement.jpg" className="d-block w-100" alt="Third slide" />
                        <div className="position-absolute  top-0  text-slider">
                       <div class="hero-slider-caption h4hero-content mb-35">
                                    <h1 class="white-color mt-3 fs-6" data-animation="fadeInUp" data-delay=".4s" style={{animationDelay: "0.4s;"}}>Health &amp;
                                        Doctor</h1>
                                    <p class="white-color mt-3 fs-6" data-animation="fadeInUp" data-delay=".6s" style={{animationDelay: "0.6s;"}}>Avoids
                                        pleasure itself, because it is pleasure,
                                        but because those who do not know how rationally <br/>encounter consequences
                                        that extremely system weathe.</p>

                                    <div class="h4-span" data-animation="fadeInUp" data-delay=".8s" style={{animationDelay: "0.8s;"}}>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span>
                                        </span>
                                        <span class="white-color mt-3 fs-6"><i class="fal fa-arrow-circle-right"></i><span>Digital Laboratory &amp;
                                                Computerized
                                                System</span></span>
                                    </div>

                                </div>
                                <div class="hero-slider-btn h4hero-btn mt-5">
                                    <Link data-animation="fadeInLeft" data-delay=".9s" to="appoinment.php" class=" ms-3 mt-5 btn-icon ml-0" tabindex="0" style={{animationDelay: "0.9s;"}}><span>+</span>learn
                                        more</Link>
                                    <Link data-animation="fadeInLeft" data-delay="1s" to="appoinment.php" class=" ms-3 mt-5 btn-icon btn-icon-green ml-0" tabindex="0" style={{animationDelay: "1s;"}}><span>+</span>Our services</Link>
                                </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider
