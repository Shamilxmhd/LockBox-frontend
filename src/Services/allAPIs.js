


import { commonAPI } from "./commonAPI.JS"
import { SERVER_URL } from "./serverUrl"


// register API
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "")
}

// login API
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "")
}

//  addCard API
export const addCardAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-card`, reqBody, reqHeader)
}

// get user cards API
export const getUserCardAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-cards`, "", reqHeader)
}

// edit card API
export const editCardAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/card/edit/${id}`, reqBody, reqHeader)
}