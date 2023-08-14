CREATE DATABASE strideriw;

USE strideriw;

IF OBJECT_ID('customers', 'U') IS NULL BEGIN CREATE TABLE customers(
	CustomerId INTEGER NOT NULL PRIMARY KEY,
	CustomerName VARCHAR(9) NOT NULL
);

END
INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(1, 'Elizabeth');

INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(2, 'Alexander');

INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(3, 'Emira');

INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(4, 'LJ');

INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(5, 'Armand');

INSERT INTO
	customers(CustomerId, CustomerName)
VALUES
	(6, 'Elizabeth');

IF OBJECT_ID('orders', 'U') IS NULL BEGIN CREATE TABLE orders(
	OrderId INTEGER NOT NULL PRIMARY KEY,
	CustomerId INTEGER FOREIGN KEY REFERENCES customers(CustomerId),
	Total MONEY NOT NULL,
	Date DATETIME NOT NULL
);

END
INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(1, 1, 30.00, '2021-02-01 08:30:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(2, 2, 52.50, '2021-02-02 10:00:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(3, 1, 6.00, '2021-02-02 12:46:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(4, 3, 30.50, '2021-02-03 15:25:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(5, 4, 36.00, '2021-02-04 18:50:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(6, 5, 52.50, '2021-02-04 08:05:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(7, 6, 30.50, '2021-02-06 17:30:00.000');

INSERT INTO
	orders(OrderId, CustomerId, Total, Date)
VALUES
	(8, 3, 18, '2021-02-08 16:30:00.000');

IF OBJECT_ID('items', 'U') IS NULL BEGIN CREATE TABLE items(
	ItemId INTEGER IDENTITY(1, 1) PRIMARY KEY,
	ItemName VARCHAR(6) NOT NULL,
	ItemPrice MONEY NOT NULL,
	Supply INTEGER NOT NULL
);

END
INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Book', 15.00, 100);

INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Candle', 3.00, 100);

INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Pen', 0.75, 100);

INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Paper', 5.25, 100);

INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Jar', 12.50, 100);

INSERT INTO
	items(ItemName, ItemPrice, Supply)
VALUES
	('Movie', 18.00, 100);

IF OBJECT_ID('orderItems', 'U') IS NULL BEGIN CREATE TABLE orderItems(
	OrderId INTEGER FOREIGN KEY REFERENCES orders(OrderId),
	ItemId INTEGER FOREIGN KEY REFERENCES items(ItemId),
	PRIMARY KEY (OrderId, ItemId),
	Quantity INTEGER NOT NULL
);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(1, 2, 3);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(1, 1, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(1, 3, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(1, 4, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(2, 1, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(2, 5, 3);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(3, 3, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(3, 4, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(4, 2, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(4, 5, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(5, 3, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(5, 4, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(5, 1, 2);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(6, 1, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(6, 5, 3);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(7, 6, 1);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(7, 5, 3);

INSERT INTO
	orderItems(OrderId, ItemId, Quantity)
VALUES
	(8, 6, 1);

/* Show all individual orders */
SELECT
	o.OrderId,
	c.CustomerName,
	c.CustomerId,
	SUM(Quantity) AS order_size,
	Total,
	Date
FROM
	orders AS o
	INNER JOIN customers AS c ON o.CustomerId = c.CustomerId
	INNER JOIN orderItems AS oi ON oi.OrderId = o.OrderId
GROUP BY
	o.OrderId,
	c.CustomerName,
	c.CustomerId,
	Total,
	Date;

/* Select all orders of single customer; ex: ID = 1*/
SELECT
	o.OrderId,
	c.CustomerName,
	c.CustomerId,
	SUM(Quantity) AS order_size,
	Total,
	Date
FROM
	orders AS o
	INNER JOIN customers AS c ON o.CustomerId = c.CustomerId
	INNER JOIN orderItems AS oi ON oi.OrderId = o.OrderId
WHERE
	c.CustomerId = 1
GROUP BY
	o.OrderId,
	c.CustomerName,
	c.CustomerId,
	Total,
	Date;

/* Select customers who've ordered mutliple times*/
SELECT
	c.CustomerId,
	c.CustomerName,
	COUNT(o.CustomerID) AS order_count
FROM
	orders AS o
	INNER JOIN customers AS c ON o.CustomerId = c.CustomerId
GROUP BY
	CustomerName,
	c.CustomerId
HAVING
	COUNT(o.CustomerID) > 1
ORDER BY
	order_count DESC,
	c.CustomerName ASC;

/* Select Biggest Spender, give Alphabetical Name Preference*/
SELECT
	TOP 1 c.CustomerId,
	c.CustomerName,
	SUM(o.Total) AS total_spent
FROM
	orders AS o
	LEFT JOIN customers AS c ON o.CustomerId = c.CustomerId
GROUP BY
	c.CustomerId,
	c.CustomerName
ORDER BY
	total_spent DESC;

/* Show # Unique Customers*/
SELECT
	COUNT(DISTINCT customerId) AS "Unique Customers"
FROM
	orders;

/* Show item that has sold the most*/
SELECT
	TOP 1 i.ItemId,
	i.ItemName,
	SUM(oi.Quantity) AS quantity_sold
FROM
	orderItems AS oi
	LEFT JOIN items AS i ON oi.ItemId = i.ItemId
GROUP BY
	i.ItemId,
	i.ItemName
ORDER BY
	quantity_sold DESC,
	i.itemName;

/* Show item that is most frequently purchased*/
SELECT
	TOP 1 i.ItemId,
	i.ItemName,
	COUNT(oi.ItemId) AS number_of_sales
FROM
	orderItems AS oi
	LEFT JOIN items AS i ON oi.ItemId = i.ItemId
GROUP BY
	i.ItemId,
	i.ItemName
ORDER BY
	number_of_sales DESC,
	i.itemName;