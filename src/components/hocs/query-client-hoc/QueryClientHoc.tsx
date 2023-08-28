import { ComponentType } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const QueryClientHoc = (Component: ComponentType): ComponentType => {

    const queryClient = new QueryClient();

    return props =>
        <QueryClientProvider client={queryClient}>
            <Component {...props} />
        </QueryClientProvider>
}