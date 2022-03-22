import React from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import GridItem from '../../components/GridItem/GridItem';
import Item from '../../components/Item/Item';
import ProductFeature from '../../components/ProductFeature/ProductFeature';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
function ProductDetail({ products }) {
	const params = useParams();
	const product = products.find(
		(element) => element.id === Number(params.productId)
	);

	return (
		<section className="productDetail">
			<Item product={product} />
			<ProductFeature product={product} />
			<GridItem product={product} />
			<AudioCard />
		</section>
	);
}
ProductDetail.propTypes = {
	products: PropTypes.array,
};
export default ProductDetail;
