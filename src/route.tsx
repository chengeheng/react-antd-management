import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { Navigate, RouteObject } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));
const Main = lazy(() => import("./pages/main"));

export const loginRoute: RouteObject[] = [
	{
		path: "/login",
		element: (
			<Suspense fallback={<Spin spinning={true}></Spin>}>
				<Login />
			</Suspense>
		),
	},
	{
		path: "*",
		element: <Navigate to="./login" />,
	},
];

export const mainRoute: RouteObject[] = [
	{
		path: "/*",
		element: (
			<Suspense fallback={<Spin spinning={true}></Spin>}>
				<Main />
			</Suspense>
		),
	},
];
