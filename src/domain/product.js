export class Product {
	constructor(
		id,
		quantity,
		slug,
		name,
		image,
		category,
		categoryImage,
		newProduct,
		price,
		description,
		features,
		includes,
		gallery,
		others
	) {
		this.id = id;
		this.quantity = quantity;
		this.slug = slug;
		this.name = name;
		this.image = image;
		this.category = category;
		this.categoryImage = categoryImage;
		this.newProduct = newProduct;
		this.price = price;
		this.description = description;
		this.features = features;
		this.includes = includes;
		this.gallery = gallery;
		this.others = others;
	}
}

const producto = new Product(
	1,
	0,
	'yx1-earphones',
	'YX1 Wireless Earphones',

	'https://cfbucketaws.s3.us-east-2.amazonaws.com/Category-Earphones/image-yx1-earphones.jpg',
	'earphones',
	{
		mobile:
			'./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
		tablet:
			'./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
		desktop:
			'./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
	},
	true,
	599,

	'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',

	'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',

	[
		{
			quantity: 2,
			item: 'Earphone unit',
		},
		{
			quantity: 6,
			item: 'Multi-size earplugs',
		},
		{
			quantity: 1,
			item: 'User manual',
		},
		{
			quantity: 1,
			item: 'USB-C charging cable',
		},
		{
			quantity: 1,
			item: 'Travel pouch',
		},
	],

	{
		first:
			'https://cfbucketaws.s3.us-east-2.amazonaws.com/Gallery-Earphones/image-gallery-1.jpg',
		second:
			'https://cfbucketaws.s3.us-east-2.amazonaws.com/Gallery-Earphones/image-gallery-3.jpg',
		third:
			'https://cfbucketaws.s3.us-east-2.amazonaws.com/Gallery-Earphones/image-gallery-2.jpg',
	},
	[
		{
			id: 3,
			slug: 'xx99-mark-one-headphones',
			name: 'XX99 Mark I',
			image:
				'https://cfbucketaws.s3.us-east-2.amazonaws.com/Category-Headphones/image-xx99-mark-one.jpg',
		},
		{
			id: 2,
			slug: 'xx59-headphones',
			name: 'XX59',
			image:
				'https://cfbucketaws.s3.us-east-2.amazonaws.com/Category-Headphones/image-xx59.jpg',
		},
		{
			id: 6,
			slug: 'zx9-speaker',
			name: 'ZX9 Speaker',
			image:
				'https://cfbucketaws.s3.us-east-2.amazonaws.com/Category-Speakers/image-zx9.jpg',
		},
	]
);

console.table(producto);
console.log(producto.gallery);
