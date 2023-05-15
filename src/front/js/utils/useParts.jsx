import { useEffect, useMemo, useState } from "react";


//creamos un hook para obtener una objeto con cinco keys, cada una con un array de objetos de las partes de las bicis
const useParts = (items) => {

    const [index, setIndex] = useState({
        wheels: 0,
        frame: 0,
        fork: 0,
        handlebar: 0,
        pedals_chain: 0,
        saddle: 0
    });

    const [parts, setParts] = useState({
        wheels: [],
        frame: [],
        fork: [],
        handlebar: [],
        pedals_chain: [],
        saddle: []
    });

    const targetWheels = useMemo(() => {
        return parts.wheels[index.wheels % parts.wheels.length]
    }, [index.wheels, parts.wheels])

    const targetFrame = useMemo(() => {
        return parts.frame[index.frame % parts.frame.length]
    }, [index.frame, parts.frame])

    const targetFork = useMemo(() => {
        return parts.fork[index.fork % parts.fork.length]
    }, [index.fork, parts.fork])

    const targetHandlebar = useMemo(() => {
        return parts.handlebar[index.handlebar % parts.handlebar.length]
    }, [index.handlebar, parts.handlebar])

    const targetPedals_chain = useMemo(() => {
        return parts.pedals_chain[index.pedals_chain % parts.pedals_chain.length]
    }, [index.pedals_chain, parts.pedals_chain])

    const targetSaddle = useMemo(() => {
        return parts.saddle[index.saddle % parts.saddle.length]
    }, [index.saddle, parts.saddle])


    const handleNext = (part) => {
        setIndex((prevState) => {
            return {
                ...prevState,
                [part]: prevState[part] + 1
            }
        })
    }
    const handleBack = (part) => {
        setIndex((prevState) => {
            return {
                ...prevState,
                [part]: prevState[part] - 1 
            }
        })
    }
        


    useEffect(() => {
        items ?
        setParts({
            wheels: items.filter((element) => element.part === "wheels"),
            frame: items.filter((element) => element.part === "frame"),
            fork: items.filter((element) => element.part === "forks"),
            handlebar: items.filter((element) => element.part === "handlebar"),
            pedals_chain: items.filter((element) => element.part === "pedals_chain"),
            saddle: items.filter((element) => element.part === "saddle")
        })
        : null
    }, [items])

    return {targetWheels, targetFrame, targetFork, targetHandlebar, targetPedals_chain, targetSaddle, handleNext, handleBack }
}

export default useParts;

