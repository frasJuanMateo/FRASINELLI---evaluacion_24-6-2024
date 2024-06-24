import React, {useState} from "react";

export default function Ejercicio1() {
  const [fruta, selectFruta] = useState("Manzana")
  const handleFruitChange = (e) => {
    selectFruta(e.target.value)
  }
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select name="frutas" onChange={handleFruitChange}>
        <option value="Manzana">Manzana</option>
        <option value="Pera">Pera</option>
        <option value="Naranja">Naranja</option>
        <option value="Mandarina">Mandarina</option>
      </select>
      <p>Seleccionaste: <b>{fruta}</b></p>
    </div>
  )
}
