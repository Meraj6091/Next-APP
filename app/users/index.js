"use client"; // Add this to make it a Client Component

import { useDispatch } from "react-redux";
import { addMessage } from "../Containers/State/actions";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { fetchRandomUserProfile } from "./service/index";

export default function Home() {
	const dispatch = useDispatch();

	const handleNewMessage = async (data) => {
		const userProfile = await fetchRandomUserProfile(); // Fetch the image and names

		dispatch(
			addMessage({
				message: data.message,
				userImage: userProfile.image,
				userName: userProfile.name,
			})
		);
	};
	return (
		<div className="container mx-auto p-4">
			<MessageList />
			<MessageForm onSubmit={handleNewMessage} />
		</div>
	);
}
