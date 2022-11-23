'use client';
import { createContext } from 'react';

let theme = 'light';
if (typeof localStorage !== 'undefined')
	theme = localStorage.getItem('theme') || 'light';

const ThemeContext = createContext(theme);

export default ThemeContext;
