import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
const Nav = () => {
	return (
		<nav className={styles.home__nav}>
			<NavLink to="/" className={styles.home__nav}>
				Spore Store
			</NavLink>
			{/* <NavLink to="/:Produce">Produce</NavLink> */}
		</nav>
	);
};

export default Nav;
