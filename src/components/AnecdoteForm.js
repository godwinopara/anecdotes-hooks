import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewAnecdote } from "../services/anecdotes";
import { useContext, useState } from "react";
import anecdoteContext from "../AnecdoteContext";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

const AnecdoteForm = () => {
	// Form Hooks

	const content = useField("text");
	const author = useField("author");
	const info = useField("text");

	// React Router Navigate
	const navigate = useNavigate();

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

		mutation.mutate({ content: content.value, author: author.value, info: info.value, votes: 0 });
		dispatch({ type: "MESSAGE", payload: { message: `${content.value} was created successfully`, display: true } });

		setTimeout(() => {
			dispatch({ type: "MESSAGE", payload: { message: "", display: false } });
		}, 3000);
	};

	return (
		<div>
			<h2>Create a new anecdote</h2>
			<form onSubmit={onCreate}>
				<div>
					content
					<input type={content.type} value={content.value} onChange={content.onChange} />
				</div>

				<div>
					author
					<input type={author.type} value={author.value} onChange={author.onChange} />
				</div>
				<div>
					url for more info
					<input {...info} />
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
