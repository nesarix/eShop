import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMushies } from "../../Services/Mushies";
import styles from "./MyCarousel.module.scss";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const MyCarousel = () => {
	const params = useParams();
	const [mushie, setMushie] = useState(null);
	useEffect(() => {
		getMushies().then((mushie) => setMushie(mushie));
	}, []);

	return (
		<>
			{mushie ? (
				<Carousel responsive={responsive}>
					<div className={styles.carousel}>
						<img
							src={mushie[9].image}
							alt={mushie[9].productName}
							className={styles.imgCarousel}
						/>
						<h5>{mushie[9].scientificName}</h5>
					</div>
					<div className={styles.carousel}>
						<img
							src={mushie[7].image}
							alt={mushie[7].productName}
							className={styles.imgCarousel}
						/>
						<h5>{mushie[7].scientificName}</h5>
					</div>
					<div className={styles.carousel}>
						<img
							src={mushie[4].image}
							alt={mushie[4].productName}
							className={styles.imgCarousel}
						/>
						<h5>{mushie[4].scientificName}</h5>
					</div>
					<div className={styles.carousel}>
						<img
							src={mushie[6].image}
							alt={mushie[6].productName}
							className={styles.imgCarousel}
						/>
						<h5>{mushie[6].scientificName}</h5>
					</div>
				</Carousel>
			) : (
				<></>
			)}
		</>
	);
};

export default MyCarousel;
