import React, { useState, useEffect, ReactElement } from "react";

import { LineChart } from "./components/LineChart/LineChart";
import { createRandomHSL, createRandomArray } from "./utils";
import "./App.css";

const App: React.FC = (): ReactElement => {
	const [inputState, setInputState] = useState(1);
	const [color, setColor] = useState("");
	const [lines, setLines] = useState([{ x: 1, y: 1 }]);

	useEffect(() => {
		setColor(createRandomHSL());
	}, []);

	useEffect(() => {
		setLines(createRandomArray(inputState));
	}, [inputState]);

	return (
		<div className="App">
			<header className="App-header">
				<h2>How many line segments?</h2>
				<p className="subtitle">(Limited to 5000 segments, be kind to your browser)</p>
				<input
					className="number-input"
					type="number"
					value={inputState}
					onChange={(e) => setInputState(Number(e.target.value))}
					min={1}
					max={5000}
				/>
				<input
					className="range-input"
					type="range"
					min={0}
					max={5000}
					step={1}
					value={inputState}
					onChange={(e) => setInputState(Number(e.target.value))}
				/>
				<button className="button" onClick={() => setColor(createRandomHSL())}>
					Change color
				</button>
				<LineChart data={lines} color={color} />
			</header>
		</div>
	);
};

export default App;
