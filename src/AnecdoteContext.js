import { useQuery } from "@tanstack/react-query";
import { createContext, useReducer, useContext } from "react";
import { getAll } from "./services/anecdotes";

const anecdoteReducer = (state, action) => {
	// Reducer switch

	switch (action.type) {
		case "MESSAGE": {
			const newState = { ...state, ...action.payload };
			return { ...state, message: action.payload };
		}
		case "ADD": {
			const newAnecdotes = state.anecdotes.concat(action.payload);
			const newState = { ...state, anecdotes: newAnecdotes };
			return newState;
		}
		case "SET": {
			return { ...state, anecdotes: action.payload };
		}
		default:
			return state;
	}
};

const anecdoteContext = createContext();

export const useStateValue = () => {
	const state = useContext(anecdoteContext);
	return state[0];
};

export const useDispatchValue = () => {
	const state = useContext(anecdoteContext);
	return state[1];
};

export const AnecdoteContextProvider = (props) => {
	//InitialState
	const initialState = { anecdotes: [], message: "", display: false };

	// Reducer State
	const [state, dispatch] = useReducer(anecdoteReducer, initialState);

	// React Query Initialization

	const { data, isLoading, isError, isSuccess } = useQuery(["anecdotes"], getAll, {
		onSuccess: (anecdotes) => {
			dispatch({ type: "SET", payload: anecdotes });
		},
	});
	return <anecdoteContext.Provider value={[state, dispatch, isLoading, isError]}>{props.children}</anecdoteContext.Provider>;
};

export default anecdoteContext;
