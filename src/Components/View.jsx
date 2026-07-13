import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import NavBar from './NavBar'
// import Nav from './Nav'

const View = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
            (response)=>changeData(response.data)
        ).catch()
       
    }
    useEffect(
        ()=>{fetchData()},[]
    )

  return (
    <div>
        {/* <NavBar/> */}
        <h1>View Car</h1>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="container">
                <div className="row g-4">
                   
                        {data.map(
                            (value,index)=>{
                                return(
                                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="card" >
  <div className="card-body">
    <h5 className="">Card title</h5>
    <p className="">{value.registration_numer}</p>
    <p className="">{value.brand}</p>
    <p className="">{value.model}</p>
    <p className="">{value.vehicle_type}</p>
    <p className="">{value.transmission}</p>
    <p className="">{value.seating_capacity}</p>
    <p className="">{value.rent_per_day}</p>
    <p className="">{value.city}</p>
    <p className="">{value.availability_status}</p>
    <a href="#" className="btn btn-primary">VIEW DETAILS</a>
  </div>
</div>
</div>
)}
                        )}
                   
                </div>
            </div>
        </div>
    </div>

</div>
</div>
   
  )
}

export default View