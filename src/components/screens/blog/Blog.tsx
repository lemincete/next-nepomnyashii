'use client'

import { useState, useRef, useEffect } from 'react';

import Layout from "../../layout/Layout";

import SearchInput from '@/components/ui/search-input/SearchInput';
import BlogBody from '@/components/ui/blog-body/BlogBody';
import BlogLoading from '@/components/ui/blog-loading/BlogLoading';

import { QueryClientHoc } from '@/components/hocs/query-client-hoc/QueryClientHoc';

import { useFetchPosts } from './queries';


const Blog = () => {

    const [search, setSearch] = useState<string>('');

    const { data, isLoading } = useFetchPosts(search);

    const isSearch = useRef(false);

    useEffect(() => {
        isSearch.current = true;
    }, [])

    return (
        <Layout>
            {isLoading
                ? <BlogLoading />
                : data
                    ? <>
                        <SearchInput setSearch={setSearch} />
                        <BlogBody isSearch={isSearch.current} posts={data} />
                    </>
                    : <h3>Posts not found</h3>
            }
        </Layout>
    );
}

export default QueryClientHoc(Blog);