import React, { useState, useEffect } from 'react'
import { updateApplicantbyIdFunApi, getApplicantbyIdFunApi } from "../service/Api"
import { useParams } from "react-router-dom"
export default function UpdateApplicant(props) {
    const { uid, setUid } = props;
    const [id, setid] = useState("")
    const [applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: ""
    })
    const { studentName, registrationNumber } = applicantData;
    const handelChage = (e) => {
        setApplicantData({ ...applicantData, [e.target.name]: e.target.value })
    }
    const updateapplicantsfun = async (e) => {
        e.preventDefault();
        await updateApplicantbyIdFunApi(props.uid, applicantData)
    }
    useEffect(() => {
        setid(uid);
        console.log("props", props)
        async function getdata() {
            try {
                const reqRes = await getApplicantbyIdFunApi(props.uid);
                console.log("data", reqRes)
                setApplicantData({ ...reqRes.data });
            } catch (err) {
                console.log("error while fetching the data");
            }
        }
        getdata();

    }, [])
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="d-flex row">
                    <p className=" font-bold fs-1">Update Applicant</p>
                    <form>
                        <label className="mb-3">Student Name</label>
                        <input type="text" className="form-control" name="studentName" value={applicantData.studentName} onChange={e => { handelChage(e) }} />
                        <label className="mb-3" name="studentRegistration">Registration</label>
                        <input type="text" className="form-control" name="registrationNumber" value={applicantData.registrationNumber} onChange={e => { handelChage(e) }} />
                    </form>
                    <button className="btn btn-primary form-control mt-3" onClick={(e) => { updateapplicantsfun(e) }}>Update</button>
                </div>
            </div>
        </div>
    )
}
