import React from 'react'

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
                    <div className="carousel-item active">
                        <img src="./Image/HIP-Replacement.jpg" className="d-block w-100" alt="First slide" />
                        <div className="">
                        hi
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Image/Knee-Arthroscopy.jpg" className="d-block w-100" alt="Second slide" />
                        <div className="">
                        hi
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Image/Knee-Replacement.jpg" className="d-block w-100" alt="Third slide" />
                        <div className="">
                        </div>hi
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
