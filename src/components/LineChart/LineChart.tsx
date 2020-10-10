import * as React from "react";
import "./LineChart.css";

interface Props {
	data: { x: number; y: number }[];
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
	const getMinimumX = (): number => {
		const allXValues = data.map((obj) => obj.x);
		const minimumXValue = Math.min.apply(null, allXValues);
		return minimumXValue;
	};

	const getMinimumY = (): number => {
		const allYValues = data.map((obj) => obj.y);
		const minimumYValue = Math.min.apply(null, allYValues);
		return minimumYValue;
	};

	const getMaximumX = (): number => {
		const allXValues = data.map((obj) => obj.x);
		const maximumXValue = Math.max.apply(null, allXValues);
		return maximumXValue;
	};

	const getMaximumY = (): number => {
		const allYValues = data.map((obj) => obj.y);
		const maximumYValue = Math.max.apply(null, allYValues);
		return maximumYValue;
	};

	const getSvgX = (x: number): number => (x / getMaximumX()) * svgWidth;
	const getSvgY = (y: number): number =>
		svgHeight - (y / getMaximumY()) * svgHeight;

	const makeSvgPath = () => {
		let pathD = `M ${getSvgX(data[0].x)} ${getSvgY(data[0].y)}`;
		pathD += data.map((point, index) => {
			return `L ${getSvgX(point.x)} ${getSvgY(point.y)}`;
		});

		return (
			<path className="linechart-path" d={pathD} style={{ stroke: color }} />
		);
	};

	const makeAxis = () => {
		const minX = getMinimumX();
		const maxX = getMaximumX();
		const minY = getMinimumY();
		const maxY = getMaximumY();

		return (
			<g>
				<line
					x1={getSvgX(minX)}
					y1={getSvgY(minY)}
					x2={getSvgX(maxX)}
					y2={getSvgY(minY)}
				/>
				<line
					x1={getSvgX(minX)}
					y1={getSvgY(minY)}
					x2={getSvgX(minX)}
					y2={getSvgY(maxY)}
				/>
			</g>
		);
	};
	return <h1>Line Chart</h1>;
};
