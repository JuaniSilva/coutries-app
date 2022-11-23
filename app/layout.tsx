'use client';
import { useState } from 'react';
import Header from '../components/Header/Header';
import ThemeContext from './ThemeContext';
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState('light');

	return (
		<ThemeContext.Provider value={theme}>
			<html className={theme}>
				<head />

				<body>
					<Header setTheme={setTheme} />
					{children}
				</body>
			</html>
		</ThemeContext.Provider>
	);
}
