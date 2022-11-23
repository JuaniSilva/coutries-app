'use client';
import { useContext } from 'react';
import ThemeContext from '../../app/ThemeContext';
import styles from './Header.module.css';
function Header({ setTheme }: { setTheme: (theme: string) => void }) {
	const theme = useContext(ThemeContext);

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className={`${styles.header} ${styles[theme]} 'test'`}>
			<div className={styles.container}>
				<h2>Where in the world?</h2>
				<button onClick={changeTheme}>Dark Mode</button>
			</div>
		</header>
	);
}

export default Header;
