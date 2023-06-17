import AnecdoteForm from "./AnecdoteForm";
import Notification from "./Notification";
import { updateAnecdote } from "../services/anecdotes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Anecdote = ({ data }) => {
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
			<h3>Anecdote app</h3>

			<Notification />
			<AnecdoteForm />

			{data?.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => handleVote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Anecdote;
