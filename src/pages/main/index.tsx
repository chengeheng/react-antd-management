import React from "react";
import { useRoutes } from "react-router";

import { route } from "./route";

import styles from "./index.less";

const Main: React.FC = () => {
	const element = useRoutes(route);
	return <div className={styles.main}>{element}</div>;
};

export default Main;
