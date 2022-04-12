export const productsAdapter = (products) => {
	return {
		id: products.id,
		quantity: products.quantity,
		slug: products.slug,
		name: products.name,
		image: products.image,
		category: products.category,
		categoryImage: products.categoryImage,
		new: products.new,
		price: products.price,
		description: products.description,
		features: products.features,
		includes: products.includes,
		gallery: products.features,
		others: products.features,
	};
};
