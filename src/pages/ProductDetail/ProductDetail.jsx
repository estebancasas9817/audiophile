import React, { useEffect } from 'react';
import AudioCard from '../../components/AudioCard/AudioCard';
import GridItem from '../../components/GridItem/GridItem';
import Item from '../../components/Item/Item';
import ProductFeature from '../../components/ProductFeature/ProductFeature';
import RecommendItem from '../../components/RecommendItem/RecommendItem';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductDetail.css';
function ProductDetail({
	products,
	addProduct,
	handlerModal,
	counter,
	onCounter,
	restartCounter,
}) {
	const params = useParams();
	const product = products.find((element) => element.slug === params.productId);
	useEffect(() => {
		window.scrollTo(2000, 0);
	}, [params]);

	return (
		<>
			{product && (
				<section className="productDetail">
					<Item
						product={product}
						addProduct={addProduct}
						handlerModal={handlerModal}
						onCounter={onCounter}
						counter={counter}
					/>
					<ProductFeature product={product} />
					<GridItem product={product} />
					<h1 className="recommendTitle">YOU MAY ALSO LIKE</h1>
					<div className="recommendItems">
						{product.others.map((product) => (
							<RecommendItem
								product={product}
								key={product.name}
								restartCounter={restartCounter}
							/>
						))}
					</div>

					<AudioCard />
				</section>
			)}
		</>
	);
}
ProductDetail.propTypes = {
	products: PropTypes.array,
	addProduct: PropTypes.func,
	handlerModal: PropTypes.func,
	counter: PropTypes.number,
	onCounter: PropTypes.func,
	restartCounter: PropTypes.func,
};
export default ProductDetail;
