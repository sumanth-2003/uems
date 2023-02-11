import React from 'react'
import Footer from './Footer'
import Headers from './Header'
const report = () => {
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
                    <option selected>-- Select --</option>
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
          <div className="table my-4" style={{overflowX: 'auto'}}>
            <table className="table table-hover" style={{minWidth: '600px'}}>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Event 1</td>
                  <td>Meeting</td>
                  <td className="desc">Lorem ipsum dolor sit amet con...</td>
                  <td>
                    <button className="btn btn-primary m-1"><i className="fa fa-info-circle" /> Details</button>
                    <button className="btn btn-success m-1"><i className="fa fa-download" /> Download</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Event 2</td>
                  <td>Workshop</td>
                  <td className="desc">Lorem ipsum dolor sit amet con...</td>
                  <td>
                    <button className="btn btn-primary m-1"><i className="fa fa-info-circle" /> Details</button>
                    <button className="btn btn-success m-1"><i className="fa fa-download" /> Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
<Footer/>
</div>
    </div>
  )
}

export default report
