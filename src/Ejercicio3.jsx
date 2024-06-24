import React from 'react'
import {useState} from "react";

function ComponenteLista(props) {
  const lista = ["Informatica Aplicada II", "Programacion II", "Robotica", "Matematica", "Fisica"]
  return (<div>
      <h1>{props.mensaje}</h1>
      {lista.map((item) => <li>{item}</li>)}
  </div>)
}

export default function Ejercicio3() {
  const [mensaje, setMensaje] = useState("")
  const handleChange = (event) => {
    setMensaje(event.target.value)
  }
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        <ComponenteLista mensaje={mensaje}/>
        <input type="text" onChange={handleChange} />
      </ul>
    </div>
  )
}
