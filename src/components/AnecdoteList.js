import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => (
	<div>
		<h2>Anecdotes</h2>
		<ul>
			{anecdotes.map((anecdote) => (
				<li key={anecdote.id}>
					<Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default AnecdoteList;

/* 
}

/* <div key={anecdote.id}>
	// <div>{anecdote.content}</div>
	//{" "}
	<div>
		// has {anecdote.votes}
		// <button onClick={() => handleVote(anecdote)}>vote</button>
		//{" "}
	</div>
	//{" "}
</div>; */
