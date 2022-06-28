import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Home = lazy(() => import("./subpages/home"));
const Form = lazy(() => import("./subpages/form"));

export const route: RouteObject[] = [
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/form",
		element: <Form />,
	},
	{
		path: "*",
		element: <Navigate to="./home" />,
	},
];
