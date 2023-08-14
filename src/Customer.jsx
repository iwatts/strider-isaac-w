import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Title from "./Title";
import CustomerOrders from "./CustomerOrders";

import { MOCK_PLACEHOLDER_CUSTOMER, MOCK_CUSTOMERS } from "./mocks/mock-data";

export default function Customer() {
	const location = useLocation();
	const customerId = Number(location.pathname.slice(-1));
	const customer = MOCK_CUSTOMERS.filter((obj) => obj.id === customerId);
	const palceholder = MOCK_PLACEHOLDER_CUSTOMER;

	return (
		<React.Fragment>
			<Title>Customer: {customer[0].name}</Title>
			<Typography variant="subtitle1" gutterBottom>ID: {customer[0].id}</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div id="customer">
						<div>
							<img key={palceholder.avatar} src={palceholder.avatar || null} />
						</div>

						<div>
							<h1>
								{customer[0].name ? <>{customer[0].name}</> : <i>No Name</i>}{" "}
							</h1>
							<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
								<CustomerOrders />
							</Paper>
						</div>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
