import { useContext } from "react";
import anecdoteContext from "../AnecdoteContext";

const Notification = () => {
	const [state] = useContext(anecdoteContext);

	const style = {
		border: "solid",
		padding: 10,
		borderWidth: 1,
		marginBottom: 5,
	};

	return (
		<>
			{state.display && (
				<div style={style}>
					<p>{state.message}</p>
				</div>
			)}
		</>
	);
};

export default Notification;
