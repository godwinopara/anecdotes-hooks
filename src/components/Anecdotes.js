import { updateAnecdote } from "../services/anecdotes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AnecdoteList from "./AnecdoteList";

const Anecdotes = ({ data }) => {
	const query = useQueryClient();

	const mutation = useMutation(updateAnecdote, {
		onSuccess: (updatedAnecdote) => {
			const anecdotes = query.getQueryData(["anecdotes"]);
			const updateAnecdotes = anecdotes.map((anecdote) => (anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote));
			query.setQueryData(["anecdotes"], updateAnecdotes);
		},
	});

	const handleVote = async (anecdote) => {
		const updateVote = { ...anecdote, votes: anecdote.votes + 1 };
		mutation.mutate(updateVote);
	};

	return (
		<div>
			<AnecdoteList anecdotes={data} />
		</div>
	);
};

export default Anecdotes;
