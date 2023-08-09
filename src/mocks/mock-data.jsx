function createMockCustomers(id, name, amount) {
	return { id, name, amount };
}

export const MOCK_CUSTOMERS = [
	createMockCustomers(0, "Elvis Presley", 312.44),
	createMockCustomers(1, "Paul McCartney", 866.99),
	createMockCustomers(2, "Tom Scholz", 100.81),
	createMockCustomers(3, "Michael Jackson", 654.39),
	createMockCustomers(4, "Bruce Springsteen", 212.79),
];

export const MOCK_CUSTOMER = {
	first: "Your",
	last: "Name",
	avatar: "https://placekitten.com/g/200/200",
	notes: "Some notes",
};

function createMockOrders(
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export const MOCK_ORDERS = [
  createMockOrders(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createMockOrders(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createMockOrders(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createMockOrders(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createMockOrders(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];
