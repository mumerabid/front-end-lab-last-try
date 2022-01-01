import React from 'react'
import { Link } from "react-router-dom"
export default function NavBar() {
    return (
        <div className="bg-danger">
            <Link to="/addapplicants" className="text-decoration-none text-white ms-5 me-5">Add Applicants</Link>
            <Link to="/viewapplicants" className="text-decoration-none text-white ms-5 me-5">View Applicants</Link>
        </div>
    )
}
