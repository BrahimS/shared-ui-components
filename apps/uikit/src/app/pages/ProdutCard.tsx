import React from 'react';
import { ProductCard } from '../components/Card/ProductCard';
import { Container } from '@react-monorepo/shared-ui';

const ProdutCardExemple = (): React.ReactNode => {
	return (
		<Container size="xl">
			<ProductCard
				title="Product Name"
				price={29.99}
				imageUrl="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
				onAddToCart={() => console.log('Added to cart')}
			/>
		</Container>
	);
};

export default ProdutCardExemple;
