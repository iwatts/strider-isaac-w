# Strider - Isaac Watts Assessment

SQL file included in the root as setup.sql

For the react project, since I was using Material, I implemented the dashboard template they have, and built off that to add pages and widgets I felt would be useful. There were a couple plugins that I included for formating dates and currency, as well as a seperate graph.

NOTE: With the exceptions of the orders, all data is used from mocks. My justification for this was assuming that a server with relevant API calls for the necessary data would be setup at sometime, and I prefered that over making heavy mutations to the order data from the JSON file.

I used the SQL data to help me create the mock json data where relevant. A few areas I left the original templates placeholder data entact, but this was mostly due to personal time constraints. I wanted to leave a visual example of what I was picturing though.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
