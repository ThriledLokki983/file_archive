/** @format */

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// COmponents
import Upload from "./components/upload/upload";
import Table from "./components/table/table";

function App() {
	return (
		<div className="App">
			<Upload />
			<Table />
		</div>
	);
}

export default App;
