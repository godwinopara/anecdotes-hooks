import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAll } from "./services/anecdotes";
import { useEffect } from "react";
import Anecdote from "./components/Anecdote";

const App = () => {
	const queryClient = useQueryClient();
	const { data, isError, isLoading } = useQuery(["anecdotes"], getAll);

	return (
		<>
			{isLoading && <div>Loading ..............</div>}
			{isError && <p>Anecdote Service not available</p>}
			{!isError && !isLoading && <Anecdote data={data} />}
		</>
	);
};

export default App;
