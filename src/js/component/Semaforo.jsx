import React, { useState } from "react";

const Semaforo = () => {
	const [color, setColor] = useState("roja");

	return (
		<div className="semaforo">
			<div
				className={`luz roja ${color === "roja" ? "encendido" : ""}`}
				onClick={() => {
					setColor("roja");
				}}></div>
			{/* //* Aca se usa otra forma de ternario cuando el otro estado no tiene nada  */}
			<div
				className={`luz amarilla ${
					color === "amarilla" && "encendido"
				}`}
				onClick={() => {
					setColor("amarilla");
				}}></div>
			<div
				className={`luz verde ${color === "verde" ? "encendido" : ""}`}
				onClick={() => {
					setColor("verde");
				}}></div>
		</div>
	);
};

export default Semaforo;

// asd  const [bombillos, setBombillos] = useState (["rojo", "amarillo", "verde"]);
// {bombillos.map(item)=>(
//    <div className=`luz ${item}`></div>
// <button type="button" className="btn btn-success" onClick{()=>{setBombillos([...bombillos, "anaranjado"])}}> agrega el naranja </button>  buscar express operator
// <button type="button" className="btn btn-success" onClick{()=>{setBombillos([...bombillos, colores[Math.floor(Math.random()*colores.length]))}}> agrega el naranja </button>
//  )}
