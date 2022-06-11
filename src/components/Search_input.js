import React, { useState } from 'react'
import useDebounce from './useDebounce'
//barra de pesquisa

const SearchInput = ({text, onchange}) => {
    const [display_value, set_display_value] = useState(text)
    const debouncedChange = useDebounce(onchange, 500)

    function handleChange(event) {
        set_display_value(event.target.value)
        debouncedChange(event.target.value)
    }

    return (
        <input className='search'
        type='search'
        placeholder='Pesquisar'
        value={display_value} 
        onChange={handleChange}
        />
    )
}

export default SearchInput