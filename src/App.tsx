import { default as React, ReactElement } from "react";

import { LineChart } from "./components/LineChart/LineChart";
import "./App.css";

const App: React.FC = (): ReactElement => {
	let data: { x: number; y: number }[] = [];
	const createRandomArray = (total: number) => {
		for (let element: number = 0; element < total; element++) {
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
				<h1>React SVG Chart</h1>
				<LineChart data={createRandomArray(10)} />
			</header>
		</div>
	);
};

export default App;
