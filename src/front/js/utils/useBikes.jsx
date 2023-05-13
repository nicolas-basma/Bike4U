import { useEffect, useMemo, useState } from "react";

const useBikes = (items) => {
    
    const random = () => Math.floor(Math.random() * 20);
    const [index, setIndex] = useState(random());
    const [bikes, setBikes] = useState({
        mtb : [],
        road : [],
        urban : []
    });

    const targetBikes = useMemo(() => {
            return bikes[index % bikes.length] 

    }, [bikes, index])

    const handleNextB = () => {
        setIndex((prevState) => {
    
            return prevState + 1
        })
    }
    const handleBackB = () => {
        setIndex((prevState) => {
            return prevState - 1
            })
    }
    


    useEffect(() => {
        items ?
        setBikes(items)
        : null
    }, [items])

    return {targetBikes, handleNextB, handleBackB, random}
}

export default useBikes;