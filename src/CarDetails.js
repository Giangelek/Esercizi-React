import { useEffect, useState, useRef } from "react";


export function CarDetails(){
    const [initialData, setInitialData] = useState({
        model:"DeLorean DMC-12",
        year: "1981",
        color: "acciaio",
    })
    const [model, setModel] = useState()
    const [year, setYear] = useState()
    const [color, setColor] = useState()
    const inputRef = useRef()

 

 useEffect(() => {
    inputRef.current.focus()
 }, [])

  function handleInputModel(event){
    setModel(event.target.value)
    setInitialData({model:"",
    year: "",
    color: "",})
  }

  function handleInputYear(event){
    setYear(event.target.value)
    setInitialData({model:"",
    year: "",
    color: "",})
  }

  function handleInputColor(event){
    setColor(event.target.value)
    setInitialData({model:"",
    year: "",
    color: "",})
  }

  

    return(
        <div className="divCarDet">
            <h1>Archivio auto cinema</h1>
            <h4>Modello: {model}</h4>
            <input ref={inputRef} value={model} placeholder={initialData.model} onChange={handleInputModel} />
            <h4>Colore: {color}</h4>
            <input ref={inputRef} value={color} placeholder={initialData.color} onChange={handleInputColor} />
            <h4>Anno di immatricolazione: {year}</h4>
            <input ref={inputRef} value={year} placeholder={initialData.year} onChange={handleInputYear} />
            

            { model && color && year && <h1>La {model} {color} del {year} è l'auto più cool di sempre ! </h1>}

        </div>
    )
}