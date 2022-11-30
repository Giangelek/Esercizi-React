import { useEffect, useState, useRef } from "react";


export function CarDetails() {
    const [initialData, setInitialData] = useState({
        model: "DeLorean DMC-12",
        year: "1981",
        color: "acciaio",
    })
    const [carData, setCarData ] = useState({model:"", year:"", color:""})
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    function handleInputChange(event) {
        const { value, name } = event.target;

        setCarData({
            ...carData,
            [name]: value

        });
        setInitialData({
            model: "",
            year: "",
            color: "",
        })
    }

    return (
        <div className="divCarDet">
            <h1>Valuta la tua auto</h1>
            <h4>Modello: {carData.model}</h4>
            <input name="model" ref={inputRef} value={carData.model} placeholder={initialData.model} onChange={handleInputChange} />
            <h4>Colore: {carData.color}</h4>
            <input name="color" ref={inputRef} value={carData.color} placeholder={initialData.color} onChange={handleInputChange} />
            <h4>Anno di immatricolazione: {carData.year}</h4>
            <input name="year" ref={inputRef} value={carData.year} placeholder={initialData.year} onChange={handleInputChange} />


            {carData.model && carData.color && carData.year && <h1>La tua {carData.model} {carData.color} del {carData.year} è un catorcio ! </h1>}

        </div>
    )
}