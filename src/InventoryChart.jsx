import * as React from "react";
import Title from "./Title";
import { ResponsiveContainer } from "recharts";
import { PieChart } from "@mui/x-charts";
import { MOCK_INVENTORY_SOLD } from "./mocks/mock-data";

export default function InventoryChart() {
	const data = MOCK_INVENTORY_SOLD;
	return (
		<React.Fragment>
			<Title>Inventory - Sold Items</Title>
			<ResponsiveContainer>
				<PieChart
					series={[
						{
							data,
							innerRadius: 30,
							outerRadius: 100,
							paddingAngle: 0,
							cornerRadius: 1,
							startAngle: 0,
							endAngle: 369,
							cx: 150,
							cy: 150,
						},
					]}
				/>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
