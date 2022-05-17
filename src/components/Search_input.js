import React, { useState } from 'react'
import useDebounce from './useDebounce'

const SearchInput = ({value, onchange}) => {
    const [display_value, set_display_value] = useState(value)
    const debouncedChange = useDebounce(onchange, 500)


    function handleChange(event) {
        set_display_value(event.target.value)
        debouncedChange(event.target.value)
    }

    return (
        <input type='search'
        value={display_value} 
        onChange={handleChange}
        />
    )
}

export default SearchInput