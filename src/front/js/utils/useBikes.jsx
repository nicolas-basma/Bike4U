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

    const targetMtb = useMemo(() => {
        return bikes.mtb[index.mtb]
    }, [index.mtb, bikes.mtb])

    const targetUrban = useMemo(() => {
        return bikes.urban[index.urban]
    }, [index.urban, bikes.urban])

    const targetRoad = useMemo(() => {
        return bikes.road[index.road]
    }, [index.road, bikes.road])

    const handleNextB = (bike) => {
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

    return {targetMtb, targetUrban, targetRoad, handleNextB, handleBackB}
}

export default useBikes;