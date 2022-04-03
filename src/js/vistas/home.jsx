import React from "react";
import Semaforo from "../component/Semaforo.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-fluid">
				<div className="barra"></div>
				<Semaforo />
			</div>
		</div>
	);
};

export default Home;
