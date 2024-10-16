"use client"; // Ensure this is a client-side component
import "./globals.css";
import { Provider } from "react-redux";
import store from "./Containers/State/store"; // Import your Redux store here

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Provider store={store}>{children}</Provider>
			</body>
		</html>
	);
}
