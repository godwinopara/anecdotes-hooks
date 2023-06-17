import { createContext, useReducer } from "react";

const anecdoteReducer = (state, action) => {
	switch (action.type) {
		case "MESSAGE": {
			return action.payload;
		}
		default:
			return state;
	}
};

const anecdoteContext = createContext();

export const AnecdoteContextProvider = (props) => {
	const [state, dispatch] = useReducer(anecdoteReducer, { message: "", display: false });

	return <anecdoteContext.Provider value={[state, dispatch]}>{props.children}</anecdoteContext.Provider>;
};

export default anecdoteContext;
