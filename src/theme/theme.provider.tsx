'use client'

import { FC, ReactNode, useState, useEffect } from 'react';
import { ThemeContext, themes } from './useThemeContext';


interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const getThemes = () => {
        try {
            const theme = `${localStorage.getItem('theme')}`;
            if (Object.values(themes).includes(theme)) return theme

            const userMatch = window.matchMedia('(prefers-color-scheme: light)')
            if (userMatch.matches) return themes.light
        } catch (e) {

        }

        return themes.dark
    }


    const [activeTheme, setActiveTheme] = useState<string>(getThemes);

    useEffect(() => {
        document.body.setAttribute('data-theme', activeTheme);
        localStorage.setItem('theme', activeTheme);
    }, [activeTheme])

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;