import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { MOCK_INVENTORY_ITEMS } from "./mocks/mock-data";
import { currencyFormat } from "./lib/generalFunctions";

export default function Inventory() {
	let rows = MOCK_INVENTORY_ITEMS;

	return (
		<React.Fragment>
			<Title>Inventory - Stock</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Stock</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{currencyFormat(row.price)}</TableCell>
							<TableCell>{row.stock}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
