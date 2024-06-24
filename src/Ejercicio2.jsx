import React, {useState} from "react";

export default function Ejercicio2() {
  const [formData, setFormData] = useState({
    nombre: "-",
    edad: "-"
  });

  const handleSubmit = (event) => {}

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input name="nombre" type="text" onChange={handleChange}/>
        <label htmlFor="">Edad:</label>
        <input name="edad" type="number" onChange={handleChange}/>
        <button type="submit">Subir Info.</button>
      </form>
      <p><b>{formData.nombre}</b> tiene <b>{formData.edad}</b> años.</p>
    </div>
  )
}
