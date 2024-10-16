import {
	ADD_MESSAGE,
	ADD_REPLY,
	UPVOTE_MESSAGE,
	DOWNVOTE_MESSAGE,
} from "./actions";

const initialState = {
	messages: [],
};

export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					{
						id: Date.now(),
						content: action.payload.message,
						userImage: action.payload.userImage,
						userName: action.payload.userName,
						replies: [],
						votes: 0,
					},
				],
			};
		case ADD_REPLY:
			return {
				...state,
				messages: state.messages.map((message) =>
					message.id === action.payload.messageId
						? {
								...message,
								replies: [
									...message.replies,
									{ id: Date.now(), content: action.payload.reply, votes: 0 },
								],
						  }
						: message
				),
			};
		case UPVOTE_MESSAGE:
			return {
				...state,
				messages: state.messages.map((message) =>
					message.id === action.payload.id
						? { ...message, votes: message.votes + 1 }
						: message
				),
			};
		case DOWNVOTE_MESSAGE:
			return {
				...state,
				messages: state.messages.map((message) =>
					message.id === action.payload.id
						? { ...message, votes: message.votes - 1 }
						: message
				),
			};
		default:
			return state;
	}
};
