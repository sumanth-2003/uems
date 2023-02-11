import React from 'react'
const EventCards = (props) => {
  return (
    <div>

<div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-{props.jo.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* Button trigger modal */}
                <button className="btn btn-primary ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal1">Details</button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        
                        <p>{props.jo.type}</p>
                        <p>{props.jo.time}</p>
                        <p>{props.jo.venue}</p>
                        <p>{props.jo.eattendes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default EventCards