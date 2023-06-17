import AnecdoteForm from "./AnecdoteForm";
import Notification from "./Notification";

const Anecdote = ({ data }) => {
	const handleVote = (anecdote) => {
		console.log("vote");
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
