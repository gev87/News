Features
1. React Suspense: Loader added to handle UI rendering during asynchronous data fetching for improved user experience.
2. Data Fetching with SQLite: Integrated SQLite3 to fetch real-time data from the server-side components, ensuring performance and SEO benefits.
3. Backend Initialization: The backend folder contains the SQLite database setup for handling persistent data storage and fetching.
4. API Handling & Interceptor Routing: Created an api folder to handle different types of requests. Implemented interceptor routing using middleware.js to intercept and manage requests and responses before they reach the final route handler, similar to Axios interceptors.
5. Middleware Integration: Middleware handling implemented for request interception, enabling robust error handling and API management across different routes.
6. Parallel Routing: Implemented parallel routing to manage complex UI structures, offering better user navigation and layout organization.
7. NavLink Component: Optimized components by keeping parent components server-side while making child components like NavLink client-side, reducing unnecessary re-rendering.
8. ESLint Integration: Integrated ESLint to ensure code quality and maintain consistency across the project.


Getting Started
Prerequisites
Node.js
SQLite3
Next.js 14
