import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    onSearch: PropTypes.func,
};
SearchForm.defaultProps = {
    onSearch: null,
}

function SearchForm(props) {
    const { onSearch } = props;
    const [search, setSearch] = useState('');
    // set time tìm kiếm  debounce
    const typingTimeoutRef = useRef(null);
    function handleSeacrhChange(e) {
        const valueSearch = e.target.value;
        setSearch(valueSearch);
        if (!onSearch) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                search: valueSearch,
            }
            onSearch(formValues);
        }, 300)
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={search}
                    onChange={handleSeacrhChange}
                ></input>
            </form>
        </div>
    );
}

export default SearchForm;