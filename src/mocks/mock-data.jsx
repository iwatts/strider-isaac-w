function createMockCustomers(id, name) {
	return { id, name };
}

// TODO: These data calls should be made separately from orders
export const MOCK_CUSTOMERS = [
	createMockCustomers(1, "Elizabeth"),
	createMockCustomers(2, "Alexander"),
	createMockCustomers(3, "Emira"),
	createMockCustomers(4, "LJ"),
	createMockCustomers(5, "Armand"),
	createMockCustomers(6, "Elizabeth"),
];

export const MOCK_PLACEHOLDER_CUSTOMER = {
	first: "Albert",
	last: "Einstien",
	avatar: "https://placekitten.com/g/200/200",
	notes: "LOREM IPSUPM: Customer Notes Go Here",
};

// Generate Inventory Data
export const MOCK_INVENTORY_SOLD = [
	{ id: 0, value: 8, label: "Book" },
	{ id: 1, value: 2, label: "Candle" },
	{ id: 2, value: 10, label: "Pen" },
	{ id: 3, value: 40, label: "Paper" },
	{ id: 4, value: 3, label: "Jar" },
	{ id: 5, value: 8, label: "Movie" },
];

export const MOCK_INVENTORY_ITEMS = [
	{ id: 0, name: "Book", price: 15.0, stock: 100 },
	{ id: 1, name: "Candle", price: 3.0, stock: 100 },
	{ id: 2, name: "Pen", price: 0.75, stock: 100 },
	{ id: 3, name: "Paper", price: 5.25, stock: 100 },
	{ id: 4, name: "Jar", price: 12.5, stock: 100 },
	{ id: 5, name: "Movie", price: 18.0, stock: 100 },
];
