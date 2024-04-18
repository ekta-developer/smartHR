import axios from "axios";
import { data } from "jquery";

const BASE_URL ="http://pg.demoquaeretech.in/api/";

const userToken = localStorage.getItem("accessToken");

const token = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + `${userToken}`,
  },
};

export const loginAPI =async(data)=>{
    return await axios.post(`${BASE_URL}login`,data);
}

export const cardAPI = async (data,token)=>{
   return await axios.post(`${BASE_URL}dashboard`,data,token);
}

export const userDatatableAPI = async (data, token)=>{
  return await axios.post(`${BASE_URL}users-list`,data,token);
}

export const designationAPI = async (data, token)=>{
  return await axios.post(`${BASE_URL}designation-list`,data,token);
}

export const departmentAPI = async (data,token)=>{
  return await axios.post(`${BASE_URL}department-list`,data,token);
}