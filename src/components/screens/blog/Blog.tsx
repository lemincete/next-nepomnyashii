'use client'

import styles from './Blog.module.scss';

import { useState, useRef, useEffect } from 'react';

import Layout from "../../layout/Layout";

import SearchInput from '@/components/ui/search-input/SearchInput';
import SearchSort from '@/components/ui/search-sort/SearchSort';
import BlogBody from '@/components/ui/blog-body/BlogBody';
import BlogLoading from '@/components/ui/blog-loading/BlogLoading';

import { QueryClientHoc } from '@/components/hocs/query-client-hoc/QueryClientHoc';

import { useFetchPosts } from './queries';
import { useSortedPosts } from '@/hooks/useSortedPosts';


export type TSortOptions = 'title-ASC' | 'title-DESC' | '';

const Blog = () => {

    const [filter, setFilter] = useState<{ sort: TSortOptions, search: string }>({ sort: '', search: '' });

    const { data, isLoading } = useFetchPosts(filter?.search || '');

    const sortedPosts = useSortedPosts(data || [], filter.sort);

    const isSearch = useRef(false);

    useEffect(() => {
        isSearch.current = true;
    }, [])

    return (
        <Layout>
            {isLoading
                ? <BlogLoading />
                : <>
                    <div className={styles.root__top}>
                        <SearchInput filter={filter} setFilter={setFilter} />
                        <SearchSort filter={filter} setFilter={setFilter} />
                    </div>
                    <BlogBody isSearch={isSearch.current} posts={sortedPosts} />
                </>
            }
        </Layout>
    );
}

export default QueryClientHoc(Blog);