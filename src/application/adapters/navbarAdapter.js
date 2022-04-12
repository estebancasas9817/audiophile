export const navBarAdapter = (data) => {
	return {
		title: data.title,
		id: data.id,
		path: data.path,
		category: data.category,
	};
};
