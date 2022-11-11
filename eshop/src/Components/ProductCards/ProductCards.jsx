import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCards.module.scss";

const ProductCards = ({ fungiData }) => {
	return (
		<div className={styles.card}>
			<NavLink to={`/${fungiData.id}`}>
				<h3>{fungiData.productName}</h3>
				<img src={fungiData.image} alt={fungiData.productName} />
			</NavLink>
		</div>
	);
};

export default ProductCards;
