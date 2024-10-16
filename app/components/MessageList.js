"use client";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = () => {
	const messages = useSelector((state) => state.messages);

	return (
		<div>
			{messages.map((message) => (
				<MessageItem key={message.id} message={message} />
			))}
		</div>
	);
};

export default MessageList;
