import { FunctionComponent, useState } from "react";

const Test: FunctionComponent = () => {
	const [count, setCount] = useState(0);

	// on utilise généralement ce pattern de handler pour gérer les intéractions
	const handleClick = () => {
		setCount(x => x + 1);
	};

	return (
		<>
			<p className="text-white">Compteur: {count}</p>
			<button
				onClick={handleClick}
				className="border text-white border-black font-bold py-1 px-4 rounded">
			+1
			</button>
		</>
	);
};
export default Test;