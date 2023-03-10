import React from 'react'
import ReactDOM from 'react-dom/client';
import Footer from './Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PDF from './PDF'
import { Navigate } from 'react-router-dom';
const Report = ({token}) => {
  const BACKEND_URL = process.env.NODE_ENV == "development" ? "" : "https://uems-21.onrender.com"
  const [Data, setData] = useState([])
  const fetchdata = async () => {
    let res = await axios.get(BACKEND_URL + '/api/schedule');
    let resdata = await res.data;
    setData(resdata)
    // console.log(Data)
  }
  useEffect(() => {
    fetchdata();
  }, []);
	if(!token){
		return <Navigate to={'/'}/>
	}
  const handleDownload = async (i) => {
    const newWindow = window.open(
      "",
      i,
      "resizable=yes,status=0,toolbar=0,scrollbars=1"
    );
    const root = await ReactDOM.createRoot(newWindow.document.body);
    await root.render(<><PDF key={i} data={Data[i]} /></>);
    newWindow.print();
  };

  return (

    <div>
      <div>
        <div className="container">
          <h4 className="my-4">Filter Reports</h4>
          <div>
            <div className="my-2 col-lg-4">
              <input type="text" className="form-control" placeholder="Search Keywords" aria-label="Search keywords" />
            </div>
            <div className="my-2 col-lg-4">
              <button className="btn btn-primary">Search</button>
            </div>
            <div className="row">
              <div className="my-2 col-lg-7">
                <div className="input-group">
                  <span className="input-group-text">From date</span>
                  <input type="date" className="form-control" id="date-from" name="date-from" />
                  <span className="input-group-text">To date</span>
                  <input type="date" className="form-control" id="date-to" name="date-to" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="my-2 col-lg-4">
                <div className="input-group">
                  <label htmlFor="desc" className="input-group-text">Event Type</label>
                  <select className="form-select" aria-label="Type of Event" name="type" id="type">
                    <option>-- Select --</option>
                    <option value={1}>General</option>
                    <option value={2}>Meeting</option>
                    <option value={3}>Fest</option>
                    <option value={4}>Workshop</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h4 className="my-4">Search Results</h4>
          <div className="table my-4" style={{ overflowX: 'auto' }}>
            <table className="table table-hover" style={{ minWidth: '600px' }}>
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Event name</th>
                  <th scope="col">Event Type</th>
                  <th scope="col">Event Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  Data.map((e, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                        <td className="desc">{e.description}</td>
                        <td>
                          <button className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target={"#exampleModal" + i}>Details</button>
                          {/* Modal */}
                          <div className="modal fade" id={"exampleModal" + i} tabIndex={-1} aria-labelledby={"exampleModalLabel" + i} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered ">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1 className="modal-title fs-5" id={"exampleModalLabel" + i}>Modal title</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">

                                  <p> Type : <b>{e.type}</b></p>
                                  <p>Time : <b>{e.time}</b></p>
                                  <p>Venue :<b>{e.venue}</b></p>
                                  <p>Expected-attendes : <b>{e.eattendes}</b></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-success m-1" onClick={() => handleDownload(i)}><i className="fa fa-download" /> Download</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Report
