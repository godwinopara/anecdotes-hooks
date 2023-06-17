import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../services/anecdotes";
import { useContext } from "react";
import anecdoteContext from "../AnecdoteContext";

const AnecdoteForm = () => {
	const query = useQueryClient();
	const [state, dispatch] = useContext(anecdoteContext);

	const mutation = useMutation(createNewAnecdote, {
		onSuccess: (anecdote) => {
			const anecdotes = query.getQueryData(["anecdotes"]);
			query.setQueryData(["anecdotes"], anecdotes.concat(anecdote));
		},
	});

	const onCreate = (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		mutation.mutate(content);
		dispatch({ type: "MESSAGE", payload: { message: `${content} was created successfully`, display: true } });
		event.target.anecdote.value = "";

		setTimeout(() => {
			dispatch({ type: "MESSAGE", payload: { message: "", display: false } });
		}, 3000);
	};

	return (
		<div>
			<h3>create new</h3>
			<form onSubmit={onCreate}>
				<input name="anecdote" />
				<button type="submit">create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
