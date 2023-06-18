import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useStateValue } from "../AnecdoteContext";

const AnecdoteDetails = () => {
	const id = useParams().id;
	const { anecdotes } = useStateValue();

	const anectodeInfo = anecdotes.find((anectode) => anectode.id === id);

	return (
		<div>
			<h2>{anectodeInfo?.content}</h2>
			<p>has {anectodeInfo?.votes}</p>
			<p>
				for more info see <a href={anectodeInfo?.info}>{anectodeInfo?.info}</a>
			</p>
		</div>
	);
};

export default AnecdoteDetails;
