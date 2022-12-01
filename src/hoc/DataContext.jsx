import React, {createContext, useState} from 'react';

const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [data, setData] = useState({})

    const setValue = (value) => {
        setData(prevData => ({
            ...prevData,
            ...value,
        }))
    }

    const value = {
        data,
        setValue
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
export default DataProvider;

