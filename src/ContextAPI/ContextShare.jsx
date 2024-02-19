import React, {createContext, useState } from 'react'
export const addCardResponseContext = createContext()


const ContextShare = ({ children }) => {
    const [addCardResponse, setAddCardResponse] = useState('')


    return (
        <>
            <addCardResponseContext.Provider value={{ addCardResponse, setAddCardResponse }}>
                {children}
            </addCardResponseContext.Provider>
        </>
    )
}

export default ContextShare