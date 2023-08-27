import { createContext, useContext } from 'react';

import { IThemeContext } from './theme.interface';


export const themes = {
    light: 'light',
    dark: 'dark'
}


export const ThemeContext = createContext<IThemeContext>({
    activeTheme: '',
    setActiveTheme: () => { }
})

export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);