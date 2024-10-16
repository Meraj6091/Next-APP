export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_REPLY = "ADD_REPLY";
export const UPVOTE_MESSAGE = "UPVOTE_MESSAGE";
export const DOWNVOTE_MESSAGE = "DOWNVOTE_MESSAGE";

export const addMessage = (message) => ({
	type: ADD_MESSAGE,
	payload: {
		message: message.message,
		userImage: message.userImage,
		userName: message.userName,
	},
});

export const addReply = (messageId, reply) => ({
	type: ADD_REPLY,
	payload: { messageId, reply },
});

export const upvoteMessage = (id) => ({
	type: UPVOTE_MESSAGE,
	payload: { id },
});

export const downvoteMessage = (id) => ({
	type: DOWNVOTE_MESSAGE,
	payload: { id },
});
