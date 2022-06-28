import React, { Suspense } from "react";
import { Spin } from "antd";
import { useRoutes } from "react-router-dom";

import { mainRoute } from "./route";

import styles from "./App.less";

const App: React.FC = () => {
	const mainElement = useRoutes(mainRoute);
	return (
		<div className={styles.main}>
			<Suspense fallback={<Spin spinning={true}></Spin>}>
				{mainElement}
			</Suspense>
		</div>
	);
};

export default App;
