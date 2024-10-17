import React from 'react'
import { useSelector } from 'react-redux'

const ModlePopup = ({ id, setshowpopup }) => {

    const alldata = useSelector((sate) => sate.userapp)
    
    const cur = alldata.users.find((cr) => cr.id === id);

    console.log("cur data", cur)

    return (
        <div className='modaleout'>
        <div className='modale'>
 
                <div class="card" style={{ width: "100%" }} key={cur.id}>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-3 "><b>Name :</b> {cur.Name} </h6>
                        <h6 class="card-subtitle mb-3 "><b>Email :</b>{cur.Email}</h6>
                        <h6 class="card-subtitle mb-3 "><b>Age :</b>{cur.Age}</h6>
                        <h6 class="card-subtitle mb-3 "><b>Role :</b>{cur.role}</h6>
                        <h6 class="card-subtitle mb-3 "><b>Survey :</b>{cur.survey}</h6>
                        <h6 class="card-subtitle mb-3 "><b>Survey answer :</b>{cur.surveyoption}</h6>

                        <h6 class="card-subtitle mb-3 "><b>Message</b> : <p>{cur.Message}</p></h6>
                        <button onClick={()=>setshowpopup(false)}>Close</button>
                </div>
                 </div>
        </div>
        </div>
    )
}

export default ModlePopup