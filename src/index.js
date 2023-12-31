import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnecdoteContextProvider } from "./AnecdoteContext";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<AnecdoteContextProvider>
			<Router>
				<App />
			</Router>
		</AnecdoteContextProvider>
	</QueryClientProvider>
);
