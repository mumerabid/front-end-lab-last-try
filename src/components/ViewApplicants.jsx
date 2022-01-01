import React, { useState, useEffect } from 'react'
import { getApplicantFunApi, deleteApplicantbyIdFunApi } from "../service/Api"
import { Route } from "react-router-dom";
export default function ViewApplicants(props) {
    const { setUid } = props;
    const [applicantData, setApplicantData] = useState([]);

    useEffect(() => {
        async function getdata() {
            try {
                const reqRes = await getApplicantFunApi();
                setApplicantData([...reqRes.data]);
                console.log(applicantData)
                console.log(reqRes)
                // console.log(applicantData);
            } catch (err) {
                console.log("error while fetching the data");
            }
        }
        getdata();

    }, [])

    async function deleteApplicantById(id) {
        console.log(id)
        try {
            const reqRes = await deleteApplicantbyIdFunApi(id);
            setApplicantData(applicantData.filter(e => e._id !== id));
            console.log(reqRes);
        } catch (err) {
            console.log("error while deleting the data");
        }
    }

    return (
        <div className="container">
            <p className=" font-bold fs-1">View Applicants</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Registration</th>
                        <th scope="col">delete</th>
                        <th scope="col">Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        applicantData.map((e, i) => <tr key={i}>
                            <td>{e.studentName}</td>
                            <td>{e.registrationNumber}</td>
                            <td><button className="btn btn-primary" onClick={() => { deleteApplicantById(e._id) }}>Del</button></td>
                            <td> <Route render={({ history }) => (
                                <button
                                    type='button'
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setUid(e._id);
                                        history.push(`/updateApplicant/${e._id}`);

                                    }}
                                >
                                    Update
                                </button>
                            )} /></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
