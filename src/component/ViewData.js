import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import ModlePopup from './ModlePopup'
import { DeleteAction } from '../app/action/DeleteAction'
import { Link } from 'react-router-dom'

const ViewData = () => {

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.userapp)
 const [id, setId]= useState('')
const [showpopup, setshowpopup]= useState(false)
  return (

    <Layout>
      {
        loading ? <div className='row'>
          <div className='col-md-12'>
            <div className='header'>
              <h1 className='text-center'>Please Wait..</h1></div></div> </div> : <div className="container">

          <div className='row'>
            <div className='col-md-12'>
              <div className='header'>
                <h1 className='text-center'>View User List</h1>
              </div>
            </div>
          </div>
{showpopup == true ? <ModlePopup id={id} setshowpopup={setshowpopup} /> : ""}

          <div className='row'>
           
              {
             users &&   users.map((cur, index) => {

                  return(
                    <div className='col-md-6'>
                    <div className="card" style={{ width: "100%", marginBottom:"15px" }} key={cur.id}>
                      <div className="card-body">
                        <h6 className="card-subtitle mb-3 "><b>Name :</b> {cur.Name} </h6>
                        <h6 className="card-subtitle mb-3 "><b>Email :</b>{cur.Email}</h6>
                        <h6 className="card-subtitle mb-3 "><b>Age :</b>{cur.Age}</h6>
                        {/* <h6 className="card-subtitle mb-3 "><b>Role :</b>{cur.role}</h6>
                        <h6 className="card-subtitle mb-3 "><b>Survey :</b>{cur.survey}</h6>
                        <h6 className="card-subtitle mb-3 "><b>Survey answer :</b>{cur.surveyoption}</h6> */}

                        <h6 className="card-subtitle mb-3 "><b>Message</b> : <p>{cur.Message}</p></h6>
                        <Link to={`/edit/${cur.id}`}  className="card-link">Edit</Link>
                        <a onClick={()=>dispatch(DeleteAction(cur.id))} className="card-link">Delete</a>
                        <a  className="card-link" onClick={()=> {setshowpopup(true); setId(cur.id)}}>View</a>
                      </div>
                    </div> </div>)
                })
              }
           
          </div>
        </div>
      }



    </Layout>

  )
}

export default ViewData