import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import React from "react";
import { MOCK_CUSTOMERS } from "./mocks/mock-data";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function CustomersList() {
	return (
		<React.Fragment>
			<Title>Customers</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell align="right">Sale Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{MOCK_CUSTOMERS.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell component={Link} to={`${row.id}`}>
								{row.name}
							</TableCell>
							<TableCell align="right">{`$${row.amount}`}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
