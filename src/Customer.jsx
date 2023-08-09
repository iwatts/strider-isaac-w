import React from "react";
import { Grid } from "@mui/material";
import Title from "./Title";
import { useLocation } from "react-router-dom";
import { MOCK_CUSTOMER, MOCK_ORDERS } from "./mocks/mock-data";

export default function Customer() {
	const location = useLocation();
	const customerId = Number(location.pathname.slice(-1));
	const customer = MOCK_ORDERS[customerId];
	const palceholder = MOCK_CUSTOMER;

	return (
		<React.Fragment>
			<Title>Customer: {customer.name}</Title>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div id="customer">
						<div>
							<img key={palceholder.avatar} src={palceholder.avatar || null} />
						</div>

						<div>
							<h1>{customer.name ? <>{customer.name}</> : <i>No Name</i>} </h1>
							<div>{/* Customer Orders go here */}</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
