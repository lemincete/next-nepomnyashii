import { FC, ChangeEvent, useState, useCallback } from 'react';

import debounce from 'lodash.debounce';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
    setSearch: (search: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ setSearch }) => {

    const [value, setValue] = useState<string>('');

    const changeSearch = useCallback(debounce((str: string) => setSearch(str), 500), [])

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        changeSearch(e.target.value);
    }

    return (
        <section className={styles.root}>
            <input placeholder='search post!' className={styles.root__input} value={value} onChange={handleSubmit} type="text" />
        </section>
    )
}

export default SearchInput;