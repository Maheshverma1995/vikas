import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const ServicesArea = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000, // Slide transition speed in milliseconds
        autoplay: true, // Enable auto play
        autoplaySpeed: 3000, // Auto play speed in milliseconds (3 seconds)
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };

    return (
        <div>
            <section class="services-area services-border pos-rel pt-185 pb-160">

                <div class="container mt-5">
                    <div class="row mt-5">
                        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div class="section-title text-center pos-rel mb-75">
                                <div class="section-icon">
                                    <img class="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div class="section-text pos-rel mb-5">
                                    <h5 className='text-center mb-5'>Departments</h5>
                                    <h1 className='mb-5'>Managed Your Heathcare Services</h1>
                                </div>
                                <div class="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='row mt-2 mb-3'>
                                <Slider {...settings}>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Shoulder.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Shoulder</h5>
                                            <h3><Link to="#" tabindex="-1">Shoulder Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Inserts the arthroscope into your shoulder through a small incision. The scope is connected to a video monitor in the operating room.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Rotator.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Rotator Cuff Repair</h5>
                                            <h3><Link to="#" tabindex="-1">Rotator Cuff Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            People of all ages injure their rotator cuffs. Some are good candidates for surgery, while others will pursue different treatments.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Meniscus.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Meniscus Repair</h5>
                                            <h3><Link to="#" tabindex="-1">Meniscus Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Arthroscopic meniscus repair is an outpatient surgical procedure to repair torn knee cartilage. 
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Hip.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Total Hip Replacement</h5>
                                            <h3><Link to="#" tabindex="-1">Hip Replacement</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Hip replacement is highly successful surgery in which portions of the hip joint are replaced with prostheses (implants).
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/LinkCL.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">ACL Reconstruction</h5>
                                            <h3><Link to="#" tabindex="-1">ACL Reconstruction</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            ACL surgery is a procedure that doctors use to replace a torn ligament in your knee.
                                    The ACL is a band of tissue inside your knee
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Bankart.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Bankart Repair</h5>
                                            <h3><Link to="#" tabindex="-1">Bankart  Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            A Bankart Shoulder Repair procedure is a surgical technique for the repair of recurrent shoulder joint dislocations.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Partial-Knee.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Partial-Knee</h5>
                                            <h3><Link to="#" tabindex="-1">Knee Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Partial-Knee.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Revision-Knee</h5>
                                            <h3><Link to="#" tabindex="-1">Knee Revision</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Revision-Knee.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Shoulder-Dislocation</h5>
                                            <h3><Link to="#" tabindex="-1">Dislocation Management</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Your shoulders are the most movable joints in your body. They are also the most commonly dislocated joints.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Shoulder-Dislocation.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Shoulder</h5>
                                            <h3><Link to="#" tabindex="-1">Shoulder Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Inserts the arthroscope into your shoulder through a small incision. The scope is connected to a video monitor in the operating room.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Shoulder.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Rotator Cuff Repair</h5>
                                            <h3><Link to="#" tabindex="-1">Rotator Cuff Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            People of all ages injure their rotator cuffs. Some are good candidates for surgery, while others will pursue different treatments.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Rotator.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Meniscus Repair</h5>
                                            <h3><Link to="#" tabindex="-1">Meniscus Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Arthroscopic meniscus repair is an outpatient surgical procedure to repair torn knee cartilage.
                                            </p>
<Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="card bg-1 border border-5" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img style={{ height: '100px', width: '100px', display: 'flex', justifyContent: 'center' }} src="./Image/Meniscus.jpg" className="card-img-top p-2" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center  fs-6 text-uppercase">Total Hip Replacement</h5>
                                            <h3><Link to="#" tabindex="-1">Hip  Sargery</Link></h3>
                                            
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                            Hip replacement is highly successful surgery in which portions of the hip joint are replaced with prostheses (implants).</p>
                                            <Link class="service-link" to="services-details.php" tabindex="-1">Read More <i class="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ServicesArea
