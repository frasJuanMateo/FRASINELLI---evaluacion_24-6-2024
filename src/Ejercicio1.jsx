import React, {useState} from "react";

export default function Ejercicio1() {
  const [fruta, selectFruta] = useState("manzana")
  const handleFruitChange = (e) => {
    selectFruta(e.target.value)
  }
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select name="frutas" onChange={handleFruitChange}>
        <option value="manzana">Manzana</option>
        <option value="pera">Pera</option>
        <option value="naranja">Naranja</option>
        <option value="mandarina">Mandarina</option>
      </select>
      <p>Seleccionaste: <b>{fruta}</b></p>
    </div>
  )
}
