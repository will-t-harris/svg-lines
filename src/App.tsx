import React, {useState, ReactElement } from "react";

import { LineChart } from "./components/LineChart/LineChart";
import "./App.css";

const App: React.FC = (): ReactElement => {
	const [inputState, setInputState] = useState(1)
	let data: { x: number; y: number }[] = [];
	const createRandomArray = (total: number) => {
		for (let element: number = 0; element <= total; element++) {
			const y: number = Math.floor(Math.random() * 50) + 50;
			const obj: { x: number; y: number } = {
				x: element,
				y,
			};
			data.push(obj);
		}
		return data;
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>Enter number of line segments to generate</h2>
				<input type='number' value={inputState} onChange={(e) => setInputState(Number(e.target.value))} min={1}/>
				<LineChart data={createRandomArray(inputState)} />
			</header>
		</div>
	);
};

export default App;
