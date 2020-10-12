import React, { useState, useEffect, ReactElement } from "react";

import { LineChart } from "./components/LineChart/LineChart";
import { createRandomHSL, createRandomArray } from "./utils";
import "./App.css";

const App: React.FC = (): ReactElement => {
	const [inputState, setInputState] = useState(1);
	const [color, setColor] = useState("");

	useEffect(() => {
		setColor(createRandomHSL());
	}, []);

	const lines = createRandomArray(inputState);

	return (
		<div className="App">
			<header className="App-header">
				<h2>How many line segments?</h2>
				<p>(Limited to 5000 segments, be kind to your browser)</p>
				<input
					type="number"
					value={inputState}
					onChange={(e) => setInputState(Number(e.target.value))}
					min={1}
					max={5000}
				/>
				<input
					type="range"
					min={0}
					max={360}
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
