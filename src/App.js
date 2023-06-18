// import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import { getAll } from "./services/anecdotes";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useContext } from "react";
import anecdoteContext from "./AnecdoteContext";
import Anecdotes from "./components/Anecdotes";
import AnecdoteDetails from "./components/AnecdoteDetails";

const App = () => {
	const [state, dispatch, isLoading, isError] = useContext(anecdoteContext);
	if (isLoading) {
		return <div>Loading ..............</div>;
	}
	if (isError) {
		return <p>Anecdote Service not available</p>;
	}

	return (
		<>
			<h1>Software anecdotes</h1>

			<Menu />
			<Notification />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/create" element={<AnecdoteForm />} />
				<Route path="/anecdotes/:id" element={<AnecdoteDetails />} />
				<Route path="/" element={<Anecdotes data={state.anecdotes} />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
