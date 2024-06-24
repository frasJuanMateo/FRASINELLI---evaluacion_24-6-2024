import React from 'react'

function ComponenteLista(props) {
  const lista = ["Informatica Aplicada II", "Programacion II", "Robotica", "Matematica", "Fisica"]
  return (<div>
      {lista.map((item) => <li>{item}</li>)}
      <h1>{props.value}</h1>
  </div>)
}

export default function Ejercicio3() {
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        <ComponenteLista value="Inserte mensaje aqui"/>
      </ul>
    </div>
  )
}
