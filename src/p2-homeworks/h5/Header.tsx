import { FC } from 'react'
import { NavLink } from "react-router-dom";
import { PATH } from "./PageRoutes";
import styles from './Header.module.css'
import clsx from "clsx";

const Header: FC = () => {
	return (
		<div className={ styles.nav }>
			<ul className={ styles.navList }>
				<li className={ styles.navItem }>
					<NavLink to={ PATH.PRE_JUNIOR }
									 className={ ({ isActive }) => clsx([styles.navLink], [isActive && styles.navLinkActive]) }
					>Pre Junior</NavLink>
				</li>
				<li className={ styles.navItem }>
					<NavLink to={ PATH.JUNIOR }
									 className={ ({ isActive }) => clsx([styles.navLink], [isActive && styles.navLinkActive]) }
					>Junior</NavLink>
				</li>
				<li className={ styles.navItem }>
					<NavLink to={ PATH.JUNIOR_PLUS }
									 className={ ({ isActive }) => clsx([styles.navLink], [isActive && styles.navLinkActive]) }
					>Junior Plus</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Header
