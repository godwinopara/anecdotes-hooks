import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../services/anecdotes";
import { useContext, useState } from "react";
import anecdoteContext from "../AnecdoteContext";
import { useNavigate } from "react-router-dom";

const AnecdoteForm = () => {
	//
	const navigate = useNavigate();

	// Form States

	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [info, setInfo] = useState("");

	// Context Api
	const [state, dispatch] = useContext(anecdoteContext);

	// React Query
	const query = useQueryClient();

	// React Query Mutation
	const mutation = useMutation(createNewAnecdote, {
		onSuccess: (anecdote) => {
			dispatch({ type: "ADD", payload: anecdote });
			navigate("/");
		},
	});

	const onCreate = (event) => {
		event.preventDefault();

		mutation.mutate({ content, author, info, votes: 0 });
		dispatch({ type: "MESSAGE", payload: { message: `${content} was created successfully`, display: true } });

		setTimeout(() => {
			dispatch({ type: "MESSAGE", payload: { message: "", display: false } });
		}, 3000);
	};

	return (
		<div>
			<h2>create a new anecdote</h2>
			<form onSubmit={onCreate}>
				<div>
					content
					<input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
				</div>
				<div>
					author
					<input name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
				</div>
				<div>
					url for more info
					<input name="info" value={info} onChange={(e) => setInfo(e.target.value)} />
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
