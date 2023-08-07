import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getCustomers(query) {
  await fakeNetwork(`getCustomers:${query}`);
  let customers = await localforage.getItem("customers");
  if (!customers) customers = [];
  if (query) {
    customers = matchSorter(customers, query, { keys: ["first", "last"] });
  }
  return customers.sort(sortBy("last", "createdAt"));
}

export async function createCustomer() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let customer = { id, createdAt: Date.now() };
  let customers = await getCustomers();
  customers.unshift(customer);
  await set(customers);
  return customer;
}

export async function getCustomer(id) {
  await fakeNetwork(`customer:${id}`);
  let customers = await localforage.getItem("customers");
  let customer = customers.find(customer => customer.id === id);
  return customer ?? null;
}

export async function updateCustomer(id, updates) {
  await fakeNetwork();
  let customers = await localforage.getItem("customers");
  let customer = customers.find(customer => customer.id === id);
  if (!customer) throw new Error("No customer found for", id);
  Object.assign(customer, updates);
  await set(customers);
  return customer;
}

export async function deleteCustomer(id) {
  let customers = await localforage.getItem("customers");
  let index = customers.findIndex(customer => customer.id === id);
  if (index > -1) {
    customers.splice(index, 1);
    await set(customers);
    return true;
  }
  return false;
}

function set(customers) {
  return localforage.setItem("customers", customers);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}