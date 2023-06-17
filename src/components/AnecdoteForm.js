import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../services/anecdotes";

const AnecdoteForm = () => {
	const query = useQueryClient();

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
		event.target.anecdote.value = "";
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
