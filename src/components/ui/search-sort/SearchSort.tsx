import { FC, useState } from 'react';

import './search-sort.scss'

import { TSortOptions } from '@/components/screens/blog/Blog';

import Select, { SingleValue } from 'react-select';

import { ISearchSortItem } from './search-sort.interface';

import { searchSortItemsArr } from './search-sort.data';

interface SearchSortProps {
    filter: { sort: TSortOptions, search: string },
    setFilter: (filter: { sort: TSortOptions, search: string }) => void
}

const SearchSort: FC<SearchSortProps> = ({ filter, setFilter }) => {

    const [sort, setSort] = useState<SingleValue<ISearchSortItem>>();

    const handleSort = (sort: SingleValue<ISearchSortItem>) => {
        setSort(sort);
        sort?.value && setFilter({ ...filter, sort: sort.value })
    }

    return <Select options={searchSortItemsArr} placeholder="Sort by ..." className='search-sort-select' onChange={handleSort} value={sort} />
}

export default SearchSort;