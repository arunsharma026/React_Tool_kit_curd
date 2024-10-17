import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Update = () => {

    const id = useParams()
    const [userData, setUserData]= useState({})

    const {users}= useSelector((state) => state.userapp)

    console.log("users", users)

 

    const userInfo = users.find((cur)=> cur.id == id.id)

    console.log("userInfo", userInfo)
    console.log("userData", userData)

    useEffect(()=>{
        setUserData(userInfo)
    },[])

    const handleInputChange= (e)=>{
        const { name, value, type, checked } = e.target; 
        if (type == 'checkbox') {
            setUserData((prev) => ({ ...prev, [name]: checked }));
        }  else {
            setUserData((prev) => ({ ...prev, [name]: value }));
        }
    }
    const handleSubmit = ()=>{

    }
  return (
    <Layout>
        <div className="container">
        <header className="header">
            <h1 id="title" className="text-center">Survey Form</h1>
            <p id="description" className="text-center">
                Thank you for taking the time to help us improve the platform
            </p>
        </header>
        <div className="form-wrap">	
            <form id="survey-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label id="name-label" for="name">Name</label>
                             <input type="text" name="Name" value={userData?.Name} onChange={(e)=>handleInputChange(e)} placeholder="Name" className="form-control"  required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label id="email-label" for="email">Email</label> 
                            <input type="email" name="Email" value={userData?.Email} onChange={(e)=>handleInputChange(e)} placeholder="Email"  className="form-control" required />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label id="number-label" for="number">Age <small>(optional)</small></label> 
                            <input type="number" name="Age" value={userData?.Age} onChange={(e)=>handleInputChange(e)} placeholder="Age" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>current role</label>
                              
                            <select  name="role" value={userData?.role} className="form-control" onChange={(e)=>handleInputChange(e)} required>
                    <option value="" >Select Role</option>
                    <option value="student" selected={userData?.role == "Student"}>Student</option>
                    <option value="job" selected={userData?.role == "Full Time Job"}>Full Time Job</option>
                    <option value="learner" selected={userData?.role == "Full Time Learner"}>Full Time Learner</option>
                    <option value="preferNo" selected={userData?.role == "Prefer not to say"}>Prefer not to say</option>
                    <option value="other" selected={userData?.role == "Other"}>Other</option>
                </select>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Would you recommend survey to a friend?</label>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1"   name="surveyoption" value="Definitely" onChange={(e)=>handleInputChange(e)} required className="custom-control-input"   checked={userData?.surveyoption == "Definitely"} />
                                
                                <label className="custom-control-label" for="customRadioInline1">Definitely</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" value="Maybe" onChange={(e)=>handleInputChange(e)} name="surveyoption" className="custom-control-input"  checked={userData?.surveyoption == "Maybe"} />
                                <label className="custom-control-label" for="customRadioInline2">Maybe</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline3" value="Not sure" onChange={(e)=>handleInputChange(e)} name="surveyoption"  className="custom-control-input"  checked={userData?.surveyoption == "Not sure"} />
                                <label className="custom-control-label" for="customRadioInline3">Not sure</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>This survey useful yes or no?</label>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="radio" className="custom-control-input" name="survey" onChange={(e)=>handleInputChange(e)} value="yes"   checked={userData?.survey == "yes"}  />
                                <label className="custom-control-label" for="yes">Yes</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="radio" className="custom-control-input" name="survey"  onChange={(e)=>handleInputChange(e)} value="no"   checked={userData?.survey == "no"} />
                                <label className="custom-control-label" for="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Leave Message</label>
                            <textarea  id="comments" className="form-control" name="comment" onChange={(e)=>handleInputChange(e)} placeholder="Enter your comment here..." value={userData?.Message}></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <button type="submit"   className="btn btn-primary btn-block" >Update Survey</button>
                    </div>
                </div>
    
            </form>
        </div>	
    </div>
    </Layout>
  )
}

export default Update