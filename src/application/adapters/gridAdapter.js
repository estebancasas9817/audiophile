export const gridAdapter = (data) => {
	return {
		name: data.name,
		id: data.id,
		slug: data.slug,
		image: data.image,
		text: data.text,
	};
};
