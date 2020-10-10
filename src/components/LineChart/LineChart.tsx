import * as React from "react";
import "./LineChart.css";

interface Props {
	data: {x: number, y: number}[];
	color?: string;
	svgHeight?: number;
	svgWidth?: number;
}

export const LineChart: React.FC<Props> = ({
	data,
	color = "#ff4500",
	svgHeight = 200,
	svgWidth = 600,
}) => {
	return <h1>Line Chart</h1>;
};
