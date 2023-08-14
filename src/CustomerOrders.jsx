import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";
import Title from "./Title";
import { useLocation } from "react-router-dom";
import { currencyFormat } from "./lib/generalFunctions";
import { OrderDataService } from "./lib/orderDataService";

export default function CustomerOrders() {
	const allOrders = OrderDataService();
	const rows = allOrders;
	const location = useLocation();
	const customerId = Number(location.pathname.slice(-1));
	let filteredRows = rows.filter((obj) => obj.CustomerId === customerId);

	return (
		<React.Fragment>
			<Title>Orders</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Order ID</TableCell>
						<TableCell>Order Size</TableCell>
						<TableCell align="right">Sale Amount</TableCell>
						<TableCell align="right">Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredRows.map((row) => (
						<TableRow key={row.OrderId}>
							<TableCell>{row.OrderId}</TableCell>
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
		</React.Fragment>
	);
}
