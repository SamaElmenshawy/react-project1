import React from 'react'

export default function About() {
  return <>
  <div className="about container-fluid py-5 text-white  d-flex flex-column justify-content-center align-items-center">
    <div className=" text-center pt-5">
      <h2 className='title'>ABOUT COMPONENT</h2>
      <div className='dash py-2 position-relative'>
        <i class="fa-solid fa-star "></i>
     </div>
    </div>

    <div className="container p-5 pb-5 split row d-flex justify-content-between align-aitem-center">
      <div className="col-md-6 text-start">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

      </div>
      <div className="col-md-6 text-start">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

      </div>

    </div>

  </div>
  </>
}
