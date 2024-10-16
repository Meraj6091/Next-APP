import { useForm } from "react-hook-form";

const MessageForm = ({ onSubmit }) => {
	// Correctly destructure the form methods
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Handle form submission and reset after
	const handleFormSubmit = (data) => {
		onSubmit(data);
		reset(); // Reset the form after submission
	};

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className="flex space-x-4 mt-4"
		>
			<input
				{...register("message", { required: "Message is required" })}
				className="border rounded p-2 w-full"
				placeholder="Add a comment..."
			/>
			<button
				type="submit"
				className="bg-blue-800 text-white p-3 rounded font-bold"
			>
				SEND
			</button>

			{errors.message && (
				<p className="text-red-500">{errors.message.message}</p>
			)}
		</form>
	);
};

export default MessageForm;
