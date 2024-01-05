"use client"
import { AppContext } from "../appContext"
import { useState } from "react"
import React from 'react';

const ContextProvider = ({children}) => {
    const [cartNumber,setCartNumber]=useState(0)
    return (
        <AppContext.Provider value={{cartNumber,setCartNumber}}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;