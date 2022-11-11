import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Produce from "./Components/Produce/Produce";
import { getMushies } from "./Services/Mushies";
import styles from "./App.module.scss";
function App() {
	const [fungi, setFungi] = useState([]);
	useEffect(() => {
		getMushies().then((fungiData) => setFungi(fungiData));
	}, []);

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:Produce" element={<Produce />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
