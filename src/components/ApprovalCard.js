import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
const ApprovalCard = (props) => {
 


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.jo.name}</h3>
          <p>type : {props.jo.type}</p>
          <p>Date : {props.jo.date}</p>
          <p>time : {props.jo.time}</p>
          <p>Venue : {props.jo.venue}</p>
          <p>Estimates attendes : {props.jo.eattendes}</p>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
         
          <button className="btn btn-success me-2" onClick={props.clickHandler} name="Accept">Accept</button>
        <button className="btn btn-danger me-2" onClick={props.clickHandler} name="Decline">Decline</button>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard