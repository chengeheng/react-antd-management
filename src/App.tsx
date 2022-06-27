import React from "react";
import { useRoutes } from "react-router-dom";

import { mainRoute } from "./route";

import styles from "./App.less";

const App: React.FC = () => {
	const mainElement = useRoutes(mainRoute);
	return <div className={styles.main}>{mainElement}</div>;
};

export default App;
