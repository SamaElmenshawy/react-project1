import React from 'react'

export default function Contact() {
  return <>
    <div className="contact py-5 container-fliud d-flex flex-column justify-content-center align-items-center">
      <h2 className='title text-center text-black'>CONTACT SECTION</h2>
      <div className='dashh py-2 w-25 m-auto text-center position-relative'>
        <i class="fa-solid fa-star " ></i>
      </div>
      <div className="w-50 m-auto p-5">
        <form classname=" d-flex flex-column">
          <div className="input-group mb-3">
            <input type="text" className="form-control p-4" placeholder="UserName" />
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control p-4" placeholder="UserAge" />
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control p-4" placeholder="UserEmail" />
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control p-4" placeholder="UserPassword" />
          </div>

          <button >Send Message</button>

        </form>


      </div>
    </div>
  </>
}
