import { createContext, useEffect, useState } from "react";

export const StoresContext = createContext([]);

export function StoresProvider({ children }) {
    const [stores, setStores] = useState([]);
    const [allStores, setAllStores] = useState([]);
    const [isChuncked, setIsChuncked] = useState(true);
    const [revenue, setRevenue] = useState('15.000,00');
    const [name, setName] = useState('');
    const [selected, setSelected] = useState();
    const [hovered, setHovered] = useState();
    const [loaded, setLoaded] = useState(false);

    function splitIntoChunk(arr, chunk) {
        let chunked = [];

        while(arr.length > 0) {
            let tempArray;
            tempArray = arr.splice(0, chunk);

            chunked.push(tempArray);
        }

        setIsChuncked(true);
        return chunked;
    }

    function changeList(storesList) {
        setLoaded(false);
        setAllStores(allStores.concat(storesList));
        setStores(splitIntoChunk(storesList, 10));
    }

    function fetchStores() {
        fetch('https://run.mocky.io/v3/8c35bbb1-eed6-4eeb-aa83-1132b5830f57')
        .then((res) => res.json())
        .then((json) => {
            changeList(json.stores);
        });
    }

    function changeRevenue(value) {
        setRevenue(value);
    }

    function search(searchName) {    
        const filteredStores = (query) => {
            return allStores.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        }

        if (searchName.length >= 3) {
            setStores(filteredStores(searchName));

            if (filteredStores(searchName).length <= 10)
                setIsChuncked(false);
        }
        if (searchName.length == 0) {
            setStores([]);
            setAllStores([]);
        }
    }

    function selectStore(lat, lng, name) {
        setSelected(name);
    }

    function hoverStore(name) {
        setHovered(name);
    }

    useEffect(() => {
        if (stores.length > 0 && allStores.length > 0) {
            setLoaded(true);
        }
        if (allStores.length === 0 && loaded)
            fetchStores();

        console.log(stores);
    }, [stores, allStores]);

    return (
        <StoresContext.Provider value={{ stores, allStores, changeList, revenue, changeRevenue, name, search, isChuncked, fetchStores, selectStore, selected, hoverStore, hovered, loaded }}>
            {children}
        </StoresContext.Provider>
    );
}