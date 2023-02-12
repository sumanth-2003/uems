import React from 'react'
const EventCards = (props) => {
  return (
    <div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.jo.name}</h5>
          <p className="card-text">{props.jo.description}</p>
          {/* Button trigger modal */}
          <button className="btn btn-primary ms-4" data-bs-toggle="modal" data-bs-target={"#exampleModal"+props.i}>Details</button>
          {/* Modal */}
          <div className="modal fade" id={"exampleModal"+props.i} tabIndex={-1} aria-labelledby={"exampleModalLabel"+props.i} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={"exampleModalLabel"+props.i}>{props.jo.name}</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body center">

                  <p> Type : <b>{props.jo.type}</b></p>
                  <p>Time : <b>{props.jo.time}</b></p>
                  <p>Venue :<b>{props.jo.venue}</b></p>
                  <p>Expected-attendes : <b>{props.jo.eattendes}</b></p>
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