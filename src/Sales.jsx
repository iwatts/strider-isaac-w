import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { format as DateFormat } from "date-fns";

export default function Sales() {
	const currentDate = DateFormat(new Date(), "Lo MMMM yyyy");
	return (
		<React.Fragment>
			<Title>Total Sales</Title>
			<Typography component="p" variant="h4">
				$3,024.00
			</Typography>
			<Typography variant="caption" color="text.secondary" sx={{ flex: 1 }}>
				on {currentDate}
			</Typography>
		</React.Fragment>
	);
}
