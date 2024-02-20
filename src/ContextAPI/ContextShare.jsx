import React, { createContext, useState } from 'react'
export const addCardResponseContext = createContext()
export const editCardResponseContext = createContext()

const ContextShare = ({ children }) => {
    const [addCardResponse, setAddCardResponse] = useState('')
    const [editCardResponse, setEditCardResponse] = useState('')

    return (
        <>
            <editCardResponseContext.Provider value={{ editCardResponse, setEditCardResponse }}>
                <addCardResponseContext.Provider value={{ addCardResponse, setAddCardResponse }}>
                    {children}
                </addCardResponseContext.Provider>
            </editCardResponseContext.Provider>
        </>
    )
}

export default ContextShare