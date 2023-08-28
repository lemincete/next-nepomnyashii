import { FC, ReactNode } from 'react';

import ThemeProvider from '@/theme/theme.provider';

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default Providers;