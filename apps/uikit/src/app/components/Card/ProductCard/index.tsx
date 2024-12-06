import React from 'react';
import styled from 'styled-components';
import { theme } from '@react-monorepo/shared-ui';

interface ProductCardProps {
	title: string;
	price: number;
	imageUrl: string;
	description?: string;
	onAddToCart?: () => void;
}

const Card = styled.article`
	max-width: 24rem;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: white;
`;

const ProductImage = styled.img`
	width: 100%;
	height: 12rem;
	object-fit: cover;
`;

const ContentWrapper = styled.div`
	padding: 1.5rem;
`;

const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

const Description = styled.p`
	color: #4a5568;
	font-size: 1rem;
	margin-bottom: 0.5rem;
`;

const Price = styled.p`
	color: #1a202c;
	font-weight: bold;
	font-size: 1.25rem;
`;

const ButtonWrapper = styled.div`
	padding: 1rem 1.5rem;
`;

const AddToCartButton = styled.button`
	width: 100%;
	padding: 0.5rem 1rem;
	background-color: ${theme.colors.primary};
	color: white;
	font-weight: bold;
	border-radius: 0.25rem;
	border: none;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${theme.colors.darkPrimary};
	}
`;

export const ProductCard = ({
	title,
	price,
	imageUrl,
	description,
	onAddToCart,
}: ProductCardProps): React.ReactNode => {
	return (
		<Card>
			<ProductImage src={imageUrl} alt={title} loading="lazy" />
			<ContentWrapper>
				<Title as="h3">{title}</Title>
				{description && <Description>{description}</Description>}
				<Price aria-label={`Price: $${price.toFixed(2)}`}>
					${price.toFixed(2)}
				</Price>
			</ContentWrapper>
			<ButtonWrapper>
				<AddToCartButton
					onClick={onAddToCart}
					aria-label={`Add ${title} to cart`}
				>
					Add to Cart
				</AddToCartButton>
			</ButtonWrapper>
		</Card>
	);
};
