export const createRandomHSL = (): string => {
	const golden_ratio_conjugate: number = 0.618033988749895;
	let start: number = Math.random() + 10;

	start += golden_ratio_conjugate;
	start %= 1;
	start *= 100;
	start = Math.floor(start);

	return `hsl(${start}, 90%, 50%)`;
};

export const createRandomArray = (
	total: number
): { x: number; y: number }[] => {
  let data = [];
  
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
