export const fetchRandomUserProfile = async () => {
	try {
		const response = await fetch("https://randomuser.me/api/");
		const { results } = await response.json();

		const user = results[0];
		return {
			name: `${user.name.first} ${user.name.last}`, // combine first and last name
			image: user.picture.thumbnail, // get the profile image
		};
	} catch (error) {
		console.error("Failed to fetch random user profile", error);
		return null;
	}
};
