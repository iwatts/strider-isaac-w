import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import moment from "moment/moment";
import { matchPath, useLocation, Link as RouterLink } from "react-router-dom";
import Title from "./Title";
import { currencyFormat } from "./lib/generalFunctions";
import { OrderDataService } from "./lib/orderDataService";

export default function Orders() {
	const allOrders = OrderDataService();
	const location = useLocation();
	const rowLimit = 3;
	const previewRows = allOrders.length > 3 ? allOrders.slice(0, rowLimit) : [];

	const isOrdersView = !!matchPath(location.pathname, "/orders");
	let rows = isOrdersView ? allOrders : previewRows;

	return (
		<React.Fragment>
			<Title>{isOrdersView ? "All Orders" : "Recent Orders"}</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Customer ID</TableCell>
						<TableCell>Order Size</TableCell>
						<TableCell align="right">Sale Amount</TableCell>
						<TableCell align="right">Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.OrderId}>
							<TableCell
								component={RouterLink}
								to={`/customers/${row.CustomerId}`}
							>
								{row.CustomerName}
							</TableCell>
							<TableCell>{row.CustomerId}</TableCell>
							<TableCell>{row.Items.length}</TableCell>
							<TableCell align="right">
								{currencyFormat(row.Total)}
							</TableCell>
							<TableCell align="right">
								{moment(row.Date).format("dddd, MMM DD HH:mm a")}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Box sx={{ py: 2 }}>
				{!isOrdersView && (
					<Link color="primary" component={RouterLink} to={`/orders`}>
						See more orders
					</Link>
				)}
			</Box>
		</React.Fragment>
	);
}
