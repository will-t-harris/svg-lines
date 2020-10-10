import * as React from "react";
import { ReactElement } from "react";
import "./App.css";

const App: React.FC = (): ReactElement => {
	const createRandomArray = ({ total = 10 }: { total: number }) => {
		let data = [];
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
				<h1>App Component</h1>
			</header>
		</div>
	);
};

export default App;
