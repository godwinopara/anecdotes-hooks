import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../services/anecdotes";

const AnecdoteForm = () => {
	const mutation = useMutation(createNewAnecdote);
	const query = useQueryClient();

	const onCreate = (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		mutation.mutate(content, {
			onSuccess: (note) => {
				query.invalidateQueries("anecdotes");
			},
		});
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
