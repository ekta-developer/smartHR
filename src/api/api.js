import axios from "axios";
import { data } from "jquery";

const BASE_URL ="http://pg.demoquaeretech.in/api/";
const BASE_URL_Salman="http://192.168.23.6:9000/api/"
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

// TODO: Department API
//*getDepartment List
export const getDepartmentListAPI = async (data,token) => {
  return await axios.post(`${BASE_URL}department-list`, data, token);
};

export const designationAPI = async (data, token)=>{
  return await axios.post(`${BASE_URL}designation-list`,data,token);
}

//TODO: HOD API
//* getHOD List
export const getHODListAPI = async (data, token) => {
  return await axios.post(`${BASE_URL}headDepartment-list`, data, token);
};

//TODO: Tower API
//*getTower List
export const getTowerListAPI = async (token) => {
  return await axios.post(`${BASE_URL}tower-list`, token);
};

//Bills list  data API-----------------------------------NOT ADDED
export const getGeneratedBillAPI = async (data, token) => {
  return await axios.post(`${BASE_URL}allot-generate-bill`, data, token);
};