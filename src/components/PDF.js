import React from 'react'

const PDF = ({data}) => {
    return (
        <div>
            <h3 className='mb-4'>{data.name}</h3>
            <div className="my-3 col-lg-6 fs-5">
                <div className="mb-3">
                    <b>Event Type: </b>
                    <span>&nbsp;{data.type}</span>
                </div>
                <div className="mb-3">
                    <b>Description: </b>
                    <span>{data.description}</span>
                </div>
            </div>
            <h3 className='my-4'>Slot Info</h3>
            <div className="my-3 col-lg-6 fs-5">
                <div className="mb-3">
                    <b>Date and Time: </b>
                    <span>&nbsp;{data.date}</span>
                    <span>&nbsp;{data.time}</span>
                </div>
                <div className="mb-3">
                    <b>Event Venue: </b>
                    <span>&nbsp;{data.venue}</span>
                </div>
                <div className="mb-3">
                    <b>Expected Crowd: </b>
                    <span>{data.eattendes}</span>
                </div>
            </div>
        </div>
    )
}

export default PDF