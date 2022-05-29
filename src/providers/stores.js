import { createContext, useEffect, useState } from "react";

export const StoresContext = createContext([]);

export function StoresProvider({ children }) {
    const [stores, setStores] = useState([]);
    const [revenue, setRevenue] = useState('15.000,00');
    const [loaded, setLoaded] = useState(false);

    function splitIntoChunk(arr, chunk) {
        while(arr.length > 0) {
            let tempArray;
            tempArray = arr.splice(0, chunk);

            setStores(oldArray => [...oldArray, tempArray]);
        }
    }

    function changeList(storesList) {
        splitIntoChunk(storesList, 10);
    }

    function changeRevenue(value) {
        setRevenue(value);
    }

    useEffect(() => {
        if (stores.length > 0)
            setLoaded(true);
    }, [stores]);

    // useEffect(() => {
    //     alert(parseFloat(revenue.replace('.', '').replace(',', '.')).toFixed(2));
    // }, [revenue]);

    return (
        <StoresContext.Provider value={{ stores, changeList, revenue, changeRevenue, loaded }}>
            {children}
        </StoresContext.Provider>
    );
}