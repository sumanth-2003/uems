import React from 'react'
import Footer from './Footer'
import EventCards from './EventCards'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Events = () => {
  const BACKEND_URL = process.env.NODE_ENV == "development" ? "" : "https://uems-21.onrender.com"
  const [Data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      let res = await axios.get(BACKEND_URL + '/api/schedule');
      let resdata = await res.data;

      // console.log(resdata)
      setData(resdata)
      // console.log(Data)

    }
    fetchdata();
  }, []);
  return (
    <div>
      <div>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="OnGoing-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">OnGoing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="UpComing-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">UpComing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Past</button>
            </li>
          </ul>
          <div className="collapse show" id="ex1">
            {
              Data.map((e, i) => {
                if (e.permission === "Accept") {
                  return (<EventCards jo={e} key={i} i={i} />)
                }
              })
            }
          </div>
          <div className="collapse" id="ex2">
            {/* <EventCards num="4"/>
          <EventCards num="5"/>
          <EventCards num="6"/>   */}
          </div>
          <div className="collapse" id="ex3">
            {/* <EventCards num="7"/>
          <EventCards num="8"/>
          <EventCards num="9"/>  */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Events