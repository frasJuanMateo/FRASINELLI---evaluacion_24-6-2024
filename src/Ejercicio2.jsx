import React, {useState} from "react";

export default function Ejercicio2() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: ""
  });

  const [mensaje, setMensaje] = useState(<></>)

  const handleSubmit = (event) => {
    event.preventDefault();
    let mayorDeEdad = ""
    if (formData.edad >= 18) {
      mayorDeEdad = "Es mayor de edad"
    }
    else {
      mayorDeEdad = "Es menor de edad"
    }
    setMensaje(<p>{formData.nombre} tiene {formData.edad} años. {mayorDeEdad}</p>)
  }

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
      {mensaje}
    </div>
  )
}
