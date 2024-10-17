import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RegisterAction } from '../app/action/RegisterAction'; // Adjust the import path
import Layout from './Layout';

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        age: '',
        role: '',
        surveyoption: '', 
        survey:"",
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setUserData((prev) => ({ ...prev, [name]: checked }));
        }  else {
            setUserData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(RegisterAction(userData));
            if (RegisterAction.fulfilled.match(resultAction)) {
                // Successful response, navigate and reset form
                navigate("/view"); // Redirect to the desired page
                setUserData({ // Reset form data
                    name: '',
                    email: '',
                    age: '',
                    role: '',
                    surveyoption: '', 
                    comment: '',
                });
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    console.log("userdata consol", userData)

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
                             <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Name" className="form-control"  required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label id="email-label" for="email">Email</label> 
                            <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email"  className="form-control" required />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label id="number-label" for="number">Age <small>(optional)</small></label> 
                            <input type="number" name="age" value={userData.age} onChange={handleInputChange} placeholder="Age" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>current role</label>
                              
                            <select name="role" value={userData.role} className="form-control" onChange={handleInputChange} required>
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                </select>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Would you recommend survey to a friend?</label>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="surveyoption"   name="surveyoption" value="Definitely" onChange={handleInputChange} required className="custom-control-input"   />
                                
                                <label className="custom-control-label" for="surveyoption">Definitely</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" value="Maybe" onChange={handleInputChange} name="surveyoption" className="custom-control-input" />
                                <label className="custom-control-label" for="customRadioInline2">Maybe</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline3" value="Not sure" onChange={handleInputChange} name="surveyoption"  className="custom-control-input" />
                                <label className="custom-control-label" for="customRadioInline3">Not sure</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>This survey useful yes or no?</label>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="radio" className="custom-control-input" name="survey" onChange={handleInputChange} value="yes" id="yes"  />
                                <label className="custom-control-label" for="yes">Yes</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="radio" className="custom-control-input" name="survey" onChange={handleInputChange} value="no" id="no" />
                                <label className="custom-control-label" for="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Leave Message</label>
                            <textarea  id="comments" className="form-control" name="comment" onChange={handleInputChange} placeholder="Enter your comment here..." ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
                        <button type="submit"   className="btn btn-primary btn-block" >Submit Survey</button>
                    </div>
                </div>
    
            </form>
        </div>	
    </div>
    </Layout>
    );
};

export default Registration;
