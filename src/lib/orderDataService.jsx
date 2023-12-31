import { useEffect, useState } from "react";
export function OrderDataService() {
	const [orders, setOrders] = useState([]);
	function fetchOrderData() {
		// TODO: Currently using allorgins to bypass cors issues. Good enough for a visual demo, but needs to be updated for security before PROD
		const corsURL = "https://api.allorigins.win/raw?url=";

		const dataUrl = "https://doc.strider.tech/content/receipts.json";

		return fetch(corsURL + dataUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setOrders(data);
			})
			.catch((error) => {
				console.error(error);
				setOrders([]);
			});
	}
	useEffect(() => {
		fetchOrderData();
	}, []);
	return orders;
}
