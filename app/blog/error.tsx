'use client'

import { FC } from 'react';

import Layout from '@/components/layout/Layout';

interface ErrorProps {
    error: Error
}

const Error: FC<ErrorProps> = ({ error }) => {
    return (
        <Layout>
            <h3>{error.message}</h3>
        </Layout>
    );
}

export default Error;