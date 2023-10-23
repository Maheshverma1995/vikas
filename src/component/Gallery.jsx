import React from 'react'
import '../App.css'
const Gallery = () => {
  return (
    <div>
      <div>
        <div className='container-fluid'>
          <div className='row header-1'>
            <div className='col-12 d-flex justify-content-between  pt-200 pb-200'>
              <div className='pl-100'><h4>We are here for your care.</h4>
                <h1>Our Photogallery</h1></div>
              <div className='pr-100'> home</div>
            </div>
          </div>
        </div>

        <div className='container pt-50'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='header-2 pt-50 pb-50'>
                <h1 className='pink-color fs-5'>Our Photogallery</h1>
                <h1 className='f-700'>Let’s See Latest Photo Album</h1>
                <img src="./Image/section-title-line.png" alt="" />
              </div>

            </div>
            <div className='row'>
              <div className="container text-center">
                <div className="row mt-5">
                  <div className="p-5 col-md-6"><img className='img-fluid' src="./Image/photo.jpeg" alt="" /></div>
                  <div className="p-5 col-6 col-md-6"><img className='img-fluid' src="./Image/appoinment__thumb.jpg" alt="" /></div>
                </div>

                <div className="row mt-5">
                  <div className="p-5 col-6 col-md-4"><img className='img-fluid' src="./Image/samarpit.jpg" alt="" /></div>
                  <div className="p-5 col-6 col-md-4"><img className='img-fluid' src="./Image/hire__thumb.jpg" alt="" /></div>
                  <div className="p-5 col-6 col-md-4"><img className='img-fluid' src="./Image/photo3.jpg" alt="" /></div>
                </div>

                <div className="row mt-5">
                  <div className="p-5 col-6"><img className='img-fluid' src="./Image/orthopedic-patient-doctor-examines-s-knee-using-tuning-fork-62488941.webp" alt="" /></div>
                  <div className="p-5 col-6"><img className='img-fluid' src="./Image/photo2.jpg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
