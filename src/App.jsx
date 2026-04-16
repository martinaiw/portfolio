import { useState } from "react";
import "./App.css";
import Page from "./Sections/Page.jsx";
// import Page2 from "./Sections/Page2.jsx";
// import Page3 from "./Sections/Page3.jsx";

function App() {
	return (
		<div className="portfolioWrapper">
			<Page id="Page" className="pageSection" />
		</div>
	);
}

export default App;
