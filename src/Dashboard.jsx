import { Grid, Paper } from "@mui/material";
import React from "react";
import SalesChart from "./SalesChart";
import Sales from "./Sales";
import Orders from "./Orders";
import InventoryChart from "./InventoryChart";

export default function Dashboard() {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12}>
					<Paper
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "column",
							height: 240,
						}}
					>
						<SalesChart />
					</Paper>
				</Grid>
				{/* Total Sales */}
				<Grid item xs={12} md={6}>
					<Paper
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "column",
							height: 150,
						}}
					>
						<Sales />
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "column",
							height: 335,
						}}
					>
						<InventoryChart />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
						<Orders />
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
