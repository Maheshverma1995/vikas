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
        slidesToShow: 3, // Number of slides to show at once
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
        <div >
            <section class="services-area services-border pos-rel ">

                <div class="container-fluid  mt-5">
                    <div class="row mt-5">
                        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div class="section-title text-center pos-rel mb-75">
                                <div class="section-icon text-center">
                                    <img class="section-back-icon" src="./Image/section-back-icon.png" alt="" />
                                </div>
                                <div class="section-text pos-rel mb-5" style={{marginTop:'-150px'}}>
                                    <h5 className='text-center mb-5'>Departments</h5>
                                    <h1 style={{fontSize:'80px',textAlign:'center'}}>Managed Your<br/> Heathcare Services</h1>
                                </div>
                                <div class="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='containeer-fluid bg-dark' >
                        <div className="container">
                            <div className='row mb-3'>
                                <Slider {...settings} style={{marginTop:'-100px'}}>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Shoulder.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Shoulder</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Shoulder Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Inserts the arthroscope into your shoulder through a small incision. The scope is connected to a video monitor in the operating room.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Rotator.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Rotator Cuff Repair</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Rotator Cuff Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                People of all ages injure their rotator cuffs. Some are good candidates for surgery, while others will pursue different treatments.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Meniscus.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Meniscus Repair</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Meniscus Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Arthroscopic meniscus repair is an outpatient surgical procedure to repair torn knee cartilage.
                                            </p>
                                            <Link className="service-link text-dark fs-5 " to="services-details.php" ><span style={{marginTop:'50px'}}>Read More  <span style={{fontSize:'100px;'}}>&#8594;</span></span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Hip.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Total Hip Replacement</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Hip Replacement</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Hip replacement is highly successful surgery in which portions of the hip joint are replaced with prostheses (implants).
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/ACL.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">ACL Reconstruction</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >ACL Reconstruction</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                ACL surgery is a procedure that doctors use to replace a torn ligament in your knee.
                                                The ACL is a band of tissue inside your knee
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Bankart.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Bankart Repair</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Bankart  Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                A Bankart Shoulder Repair procedure is a surgical technique for the repair of recurrent shoulder joint dislocations.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Partial-Knee.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Partial-Knee</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Knee Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Partial-Knee.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Revision-Knee</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Knee Revision</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Revision-Knee.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Shoulder-Dislocation</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Dislocation Management</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Your shoulders are the most movable joints in your body. They are also the most commonly dislocated joints.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Shoulder-Dislocation.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Shoulder</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Shoulder Sargery</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Inserts the arthroscope into your shoulder through a small incision. The scope is connected to a video monitor in the operating room.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Shoulder.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Rotator Cuff Repair</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Rotator Cuff Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                People of all ages injure their rotator cuffs. Some are good candidates for surgery, while others will pursue different treatments.
                                            </p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Rotator.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Meniscus Repair</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Meniscus Repair</Link></h3>
                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Arthroscopic meniscus repair is an outpatient surgical procedure to repair torn knee cartilage.
                                            </p>
                                            <Link className="service-link text-dark fs-5 mt-4" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
                                        </div>
                                    </div>
                                    <div className="card  border border-5 border-dark" id='card-slider'>
                                        <div class="d-flex justify-content-center"> <img src="./Image/Meniscus.jpg" className="card-img-top z-2 img-fluid" alt="..." /></div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center z-3 text-white mb-4  slider-h5  text-uppercase">Total Hip Replacement</h5>
                                            <h3><Link to="#" className='text-dark fs-4' >Hip  Sargery</Link></h3>

                                            <p className="card-text text-dark  mt-2 " style={{ fontSize: '15px' }}>
                                                Hip replacement is highly successful surgery in which portions of the hip joint are replaced with prostheses (implants).</p>
                                            <Link className="service-link text-dark fs-5" to="services-details.php" >Read More  <span style={{fontSize:'100px;'}}>&#8594;</span> </Link>
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
