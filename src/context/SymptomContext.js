import React from 'react';

const SymptomContext = React.createContext();

export const SymptomProvider = ({ children, value }) => {
    return (
        <SymptomContext.Provider value={value}>
            {children}
        </SymptomContext.Provider>
    )
}

export default SymptomContext;