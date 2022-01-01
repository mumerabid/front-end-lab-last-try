import React, { useState } from 'react'
import { addApplicantFunApi } from "../service/Api"
export default function AddApplicants() {
    const [applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: ""
    })
    const { studentName, registrationNumber } = applicantData;
    const handelChage = (e) => {
        setApplicantData({ ...applicantData, [e.target.name]: [e.target.value] })
    }
    const addapplicantsfun = async (e) => {
        e.preventDefault();
        await addApplicantFunApi(applicantData)
    }
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="d-flex row">
                    <p className=" font-bold fs-1">Add applicants</p>
                    <form>
                        <label className="mb-3">Student Name</label>
                        <input type="text" className="form-control" name="studentName" onChange={e => { handelChage(e) }} />
                        <label className="mb-3" name="studentRegistration">Registration</label>
                        <input type="text" className="form-control" name="registrationNumber" onChange={e => { handelChage(e) }} />
                    </form>
                    <button className="btn btn-primary form-control mt-3" onClick={(e) => { addapplicantsfun(e) }}>Apply</button>
                </div>
            </div>
        </div>
    )
}
