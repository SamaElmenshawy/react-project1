import React, { useState } from 'react'
import poert1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portofolio() {

  const [count, setCount] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const images = [poert1, port2, port3, poert1, port2, port3];

  return (
    <>
      <div className="proto container-fluid pt-5">
        <div className="text-center">
          <h2 className="title">PORTOFOLIO COMPONENT</h2>
          <div className="dashh w-25 m-auto py-2 position-relative">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="row container m-auto pb-5 g-5">
          {images.map((img, index) => (
            <div key={index} className="col-md-4 photo position-relative">
              <img src={img} alt="" className="img-fluid rounded-2" />

              <div
                className="box d-flex justify-content-center align-items-center"
                onClick={() => {
                  setCurrentImg(img);
                  setCount(true);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {count && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header">
                  <button
                    className="btn-close"
                    onClick={() => setCount(false)}
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <img src={currentImg} alt="" className="img-fluid" />
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setCount(false)}
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
}
