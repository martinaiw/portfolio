import { useState } from "react";
import "./App.css";
import Page1 from "./Sections/Page1.jsx";
import Page2 from "./Sections/Page2.jsx";
import Page3 from "./Sections/Page3.jsx";

function App() {
	return (
		<div className="portfolioWrapper">
			<Page1 id="Page1" className="pageSection"/>
			<Page2 id="Page2" className="pageSection"/>
			<Page3 id="Page3" className="pageSection"/>
		</div>
	);
}

export default App;
