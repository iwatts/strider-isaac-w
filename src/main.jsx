import * as ReactDOM from "react-dom/client";

//Templates
import MainView from "./MainView";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import React from "react";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import Orders from "./Orders";
import Customer from "./Customer";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainView />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "customers",
				element: <CustomersList />,
			},
			{
				path: "customers/:customerID",
				element: <Customer />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
