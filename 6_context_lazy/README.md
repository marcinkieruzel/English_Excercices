### Real Estate App ###

1. We are creating an app for Real Estate Agency. 
2. Using `json-server` create a mock of API. Just run `./node_modules/.bin/json-server --watch ./data/feed.json --port 3004`
3. Using `react-router-dom` create routing for an app. We need 3 routes. 
    – List of properties `/`
    – Single Property `/property/:slug`
    – Cart `/cart`
4. Show all properties on main page. Use `swr` library to fetch data from an api.
5. Create pages for each single property
6. Optimize performance with `React.lazy` so we do not download all components at once.
7. Create context for an app. In context we need to persist users choices. User can pick up properties of their intrest. 
8. Create a form to send a `lead` with users choices.  