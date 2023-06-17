import axios from "axios";

const BASE_URL = "http://localhost:3001/anecdotes";

const getAll = async () => {
	const anecdotesData = await axios.get(BASE_URL);
	const data = await anecdotesData.data;
	return data;
};

const createNewAnecdote = async (anecdote) => {
	const newAnecdotesData = await axios.post(BASE_URL, { content: anecdote, votes: 0 });
	const data = await newAnecdotesData.data;
	return data;
};

export { getAll, createNewAnecdote };
