import axios from "axios";
// const url = "http://localhost:5000"
const url = "https://webflabbackend.herokuapp.com"


export const addApplicantFunApi = async (data) => {
    return await axios.post(`${url}/hostelApplicant`, data)
}
export const getApplicantFunApi = async (data) => {
    return await axios.get(`${url}/hostelApplicant`)
}
export const getApplicantbyIdFunApi = async (id) => {
    return await axios.get(`${url}/hostelApplicant/${id}`)
}
export const updateApplicantbyIdFunApi = async (id, data) => {
    return await axios.put(`${url}/hostelApplicant/${id}`, data)
}
export const deleteApplicantbyIdFunApi = async (id) => {
    return await axios.delete(`${url}/hostelApplicant/${id}`)
}
