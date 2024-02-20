import React, { createContext, useState } from 'react'
export const addCardResponseContext = createContext()
export const editCardResponseContext = createContext()
export const addIdentityResponseContext = createContext()
export const editIdentityResponseContext = createContext()
export const removeCardResponseContext = createContext()
export const removeIdentityResponseContext = createContext()

const ContextShare = ({ children }) => {
    const [addCardResponse, setAddCardResponse] = useState('')
    const [editCardResponse, setEditCardResponse] = useState('')
    const [addIdentityResponse, setAddIdentityResponse] = useState('')
    const [editIdentityResponse, setEditIdentityResponse] = useState('')
    const [removeCardResponse, setRemoveCardResponse] = useState('')
    const [removIdentityResponse, setRemoveIdentityResponse] = useState('')

    return (
        <>
            <removeIdentityResponseContext.Provider value={{ removIdentityResponse, setRemoveIdentityResponse }}>
                <removeCardResponseContext.Provider value={{ removeCardResponse, setRemoveCardResponse }}>
                    <editIdentityResponseContext.Provider value={{ editIdentityResponse, setEditIdentityResponse }}>
                        <addIdentityResponseContext.Provider value={{ addIdentityResponse, setAddIdentityResponse }}>
                            <editCardResponseContext.Provider value={{ editCardResponse, setEditCardResponse }}>
                                <addCardResponseContext.Provider value={{ addCardResponse, setAddCardResponse }}>
                                    {children}
                                </addCardResponseContext.Provider>
                            </editCardResponseContext.Provider>
                        </addIdentityResponseContext.Provider>
                    </editIdentityResponseContext.Provider>
                </removeCardResponseContext.Provider>
            </removeIdentityResponseContext.Provider>
        </>
    )
}

export default ContextShare