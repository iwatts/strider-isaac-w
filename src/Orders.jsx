import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { MOCK_ORDERS } from "./mocks/mock-data";
import { matchPath, useLocation, Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

export default function Orders() {
	let rows = MOCK_ORDERS;
	const location = useLocation();
	const rowLimit = 3;
	const previewRows = rows.slice(0, rowLimit);

	const isOrdersView = !!matchPath(location.pathname, "/orders");
	if (!isOrdersView) {
		rows = previewRows;
	}

	return (
		<React.Fragment>
			<Title>Recent Orders</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Ship To</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell align="right">Sale Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.shipTo}</TableCell>
							<TableCell>{row.paymentMethod}</TableCell>
							<TableCell align="right">{`$${row.amount}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Box sx={{py:2}}>
				{!isOrdersView && (
					<Link color="primary" component={RouterLink} to={`/orders`}>
						See more orders
					</Link>
				)}
			</Box>
		</React.Fragment>
	);
}
