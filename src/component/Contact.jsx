import React from 'react'
import '../App.css'
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
            <div class="card">
              <img src="..." class="card-img-top rounded-circle" alt="..." />
              <div class="card-body">
                <h1 class="card-title text-center">Call Here</h1>
                <p class="card-text text-center">+8 (123) 985 789<br/>

+787 878897 87</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card">
              <img src="..." class="card-img-top rounded-circle" alt="..." />
              <div class="card-body">
                <h1 class="card-title text-center">Mail Here</h1>
                <p class="card-text text-center">Admin@BasicTheme.com<br/>

Info@Themepur.com</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card">
              <img src="..." class="card-img-top rounded-circle" alt="..." />
              <div class="card-body">
                <h1 class="card-title text-center">Visit Here</h1>
                <p class="card-text text-center">27 Division St, New York, NY 10002, <br/> Jaklina, United Kingpung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
