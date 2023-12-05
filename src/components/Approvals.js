import React from 'react'
import Footer from './Footer'
import EventCards from './EventCards'
import ApprovalCard from './ApprovalCard'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const BACKEND_URL = process.env.NODE_ENV == "development" ? "" : "https://uems-21.onrender.com"
const Approvals = ({ token,role }) => {


	const [Data, setData] = useState([])

	const fetchdata = async () => {
		let res = await axios.get(BACKEND_URL + '/api/schedule');
		let resdata = await res.data;

		// console.log(resdata)
		setData(resdata)
		// console.log(Data)

	}
	useEffect(() => {
		fetchdata();
	}, []);
	if (!token || role!=2) {
		return <Navigate to={'/'} />
	}



	const clickHandler = (event, e, i) => {
		let permission = 'null'
		if (event.target.name == "Decline") {
			permission = "Decline"
		}
		if (event.target.name == "Accept") {
			permission = "Accept"
		}


		axios.put(BACKEND_URL + '/api/approval', {
			id: e._id,
			permission: permission
		}).then((res) => { console.log(res) }).catch((err) => { console.log(err) })

		let newData = [...Data]
		newData[i].permission = permission
		setData(newData)
	}


	return (
		<div>
			<div>
				<div className="container">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Pending</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Accepted</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Declined</button>
						</li>
					</ul>

					<div className="collapse show active" id="ex1">
						{
							Data.map((e, i) => {
								if (e.permission === "null") {
									return (
										<ApprovalCard clickHandler={(event) => clickHandler(event, e, i)} jo={e} key={i} />
									)
								}
							})
						}

					</div>
					<div className="collapse" id="ex2">
						{
							Data.map((e, i) => {
								if (e.permission === "Accept") {
									return (
										<EventCards jo={e} key={i} i={i} />
									)
								}
							})
						}
					</div>
					<div className="collapse" id="ex3">
						{
							Data.map((e, i) => {
								if (e.permission === "Decline") {
									return (
										<EventCards jo={e} key={i} i={i} />)
								}
							})
						}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Approvals
