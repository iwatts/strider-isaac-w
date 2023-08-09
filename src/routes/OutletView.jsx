import { Grid, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function OutletViews() {
	return (
		<Grid item xs={12}>
			<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
				<Outlet />
			</Paper>
		</Grid>
	);
}
