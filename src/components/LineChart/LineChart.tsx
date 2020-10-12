import React from "react";
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
	svgHeight = 100,
	svgWidth = 300,
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

	const getSvgX = (x: number): number => {
		return (x / getMaximumX()) * svgWidth;
	};

	const getSvgY = (y: number): number => {
		return svgHeight - (y / getMaximumY()) * svgHeight;
	};

	// This builds up the SVG paths from the data passed in
	const makeSvgPath = () => {
		let pathD = ` M ${getSvgX(data[0].x)} ${getSvgY(data[0].y)} `;
		pathD += data.map((point) => {
			return `L ${getSvgX(point.x)} ${getSvgY(point.y)} `;
		});
		// I was getting commas in the final path, which caused the paths
		// to be invalid. This replace works for now, but I'm sure there's
		// a better solution.
		const strippedPath = pathD.replace(/,/gm, "");
		return (
			<path
				className="linechart-path"
				d={strippedPath}
				style={{ stroke: color }}
			/>
		);
	};

	const makeAxis = () => {
		const minX = getMinimumX();
		const maxX = getMaximumX();
		const minY = getMinimumY();
		const maxY = getMaximumY();

		return (
			<g className="linechart-axis">
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
	return (
		<svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
			{makeSvgPath()}
			{makeAxis()}
		</svg>
	);
};
