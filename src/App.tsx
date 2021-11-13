/** @format */

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// COmponents
import Upload from "./components/upload/upload";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Upload />
		</div>
	);
}

export default App;
