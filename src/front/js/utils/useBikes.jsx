import { useEffect, useMemo, useState } from "react";

const useBikes = (items) => {

    const [index, setIndex] = useState({
        mtb: 0,
        road: 0,
        urban: 0
    });

    const [bikes, setBikes] = useState({
        mtb : [],
        road : [],
        urban : []
    });

    const targetBikes = useMemo(() => {
        return bikes.bike
    }, [index.bike, bikes.bike])

    const handleNextB = (bike) => {
        console.log(`bike`,bike);
        setIndex((prevState) => {
            return {
                ...prevState,
                [bike]: prevState[bike] + 1 % bikes[bike].length
            }
        })
    }
    const handleBackB = (bike) => {
        setIndex((prevState) => {
            return {
                ...prevState,
                [bike]: prevState[bike] - 1 % bikes[bike].length
            }
        })
    }
        


    useEffect(() => {
        items ?
        setBikes({
            mtb: items.filter((element) => element.part === "mtb"),
            urban: items.filter((element) => element.part === "urban"),
            road: items.filter((element) => element.part === "road")
        })
        : null
    }, [items])

    return {targetBikes, handleNextB, handleBackB}
}

export default useBikes;