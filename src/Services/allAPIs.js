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

//removecard API
export const deleteCardAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/card/remove/${id}`, {}, reqHeader)
}


// addIdentity API
export const addIdentityAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-identity`, reqBody, reqHeader)
}

// get user Identities API
export const getUserIdentityAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-identities`, "", reqHeader)
}

// edit Identity API 
export const editIdentityAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/identity/edit/${id}`, reqBody, reqHeader)
}

// remove Identity API 
export const deleteIdentityAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/identity/remove/${id}`, {}, reqHeader)
}