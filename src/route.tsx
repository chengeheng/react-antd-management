import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));
const Main = lazy(() => import("./pages/main"));

export const loginRoute: RouteObject[] = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <Navigate to="./login" />,
	},
];

export const mainRoute: RouteObject[] = [
	{
		path: "/*",
		element: <Main />,
	},
];
