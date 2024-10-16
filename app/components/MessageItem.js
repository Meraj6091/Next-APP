"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	addReply,
	upvoteMessage,
	downvoteMessage,
} from "../Containers/State/actions";

import { FaReply } from "react-icons/fa";

const MessageItem = ({ message }) => {
	const [replyText, setReplyText] = useState("");
	const dispatch = useDispatch();

	const handleReply = () => {
		if (replyText.trim() !== "") {
			// prevent empty replies
			dispatch(addReply(message.id, replyText));
			setReplyText("");
		}
	};

	return (
		<div className="border rounded-lg p-4 mt-2 flex items-start space-x-4 bg-white shadow-md">
			<img
				src={message.userImage} // Use the userImage from the message
				alt="User profile"
				className="w-10 h-10 rounded-full"
			/>
			<div className="flex-1">
				<div className="flex flex-row">
					<p className="font-semibold">{message.userName}</p>
					<p className="font-normal pl-4">2 days ago</p>
				</div>
				<p>{message.content}</p>
				<div className="flex justify-between mt-2">
					<div className="flex items-center space-x-2">
						<button
							onClick={() => dispatch(upvoteMessage(message.id))}
							className="text-green-500 hover:text-green-700"
						>
							+
						</button>
						<button
							onClick={() => dispatch(downvoteMessage(message.id))}
							className="text-red-500 hover:text-red-700"
						>
							-
						</button>
						<span className="text-gray-600">{message.votes}</span>
					</div>

					<button
						onClick={handleReply}
						className="text-blue-700 hover:text-blue-800 flex items-center"
					>
						<FaReply className="mr-1" /> Reply
					</button>
				</div>

				<div className="ml-4 mt-2">
					{message.replies.length > 0 && (
						<div className="pl-4 border-l border-gray-300">
							{message.replies.map((reply) => (
								<div key={reply.id} className="my-2">
									<p className="text-gray-800">{reply.content}</p>
								</div>
							))}
						</div>
					)}
					<input
						value={replyText}
						onChange={(e) => setReplyText(e.target.value)}
						placeholder="Reply..."
						className="border p-2 mt-2 w-full rounded"
					/>
				</div>
			</div>
		</div>
	);
};

export default MessageItem;
