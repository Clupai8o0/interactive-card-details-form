import { useState } from "react";

import BG from "./components/bg";
import Cards from "./containers/cards";
import Complete from "./containers/complete";
import Form from "./containers/form";

function App() {
	const [complete, setComplete] = useState(false);

	return (
		<main className="relative flex flex-col lg:flex-row overflow-x-hidden">
			<BG />
			<Cards complete={complete} />
			<div className="lg:flex lg:justify-center lg:items-center w-full h-[100vh]">
				{!complete ? <Form setComplete={setComplete} /> : <Complete />}
			</div>
		</main>
	);
}

export default App;
