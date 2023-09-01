import { FC, ChangeEvent, useState, useCallback } from 'react';

import debounce from 'lodash.debounce';

import styles from './SearchInput.module.scss';

import { TSortOptions } from '@/components/screens/blog/Blog';

interface SearchInputProps {
    filter: { sort: TSortOptions, search: string }
    setFilter: (filter: { sort: TSortOptions, search: string }) => void
}

const SearchInput: FC<SearchInputProps> = ({ filter, setFilter }) => {

    const [value, setValue] = useState<string>('');

    const changeSearch = useCallback(debounce((str: string) => setFilter({ ...filter, search: str }), 500), [])

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        changeSearch(e.target.value);
    }

    return <input placeholder='Search post...' className={styles.root} value={value} onChange={handleSubmit} type="text" />
}

export default SearchInput;