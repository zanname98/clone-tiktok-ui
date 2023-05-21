import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as SearchSevice from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components//Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { IconSearch } from '~/components/Icon';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debouced = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debouced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        //fetch
        //XMLHttpRequest
        const fetchApi = async () => {
            setLoading(true);

            const result = await SearchSevice.Search(debouced, 'less');

            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleOnchange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference
        //element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive //select
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>

                            {searchResult.map((item) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleOnchange}
                        onFocus={() => setShowResult(true)}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        {/* search */}
                        <IconSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
