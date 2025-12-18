import React from 'react'

export default function Footer() {
  return <>
  <footer className='container-fluid'>
    <div className="row py-5">
      <div className="box col-md-4 text-center p-4 text-white">
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="box col-md-4 text-center p-4 text-white">
        <h2>AROUND THE WEB</h2>
        <div className="icons d-flex justify-content-center">
          <div className="icon">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="icon">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-globe"></i>
          </div>

        </div>
      </div>
      <div className="box col-md-4 text-center p-4 text-white">
        <h2>ABOUT FREELANCER</h2>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>

     </footer>
    <div className="line d-flex justify-content-center align-items-between text-center py-4 ">
      <p>Copyright © Your Website 2021</p>
    </div>


 
  
  </>
}
