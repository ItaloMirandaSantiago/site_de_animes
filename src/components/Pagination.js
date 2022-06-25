import React from "react"
//ampliar a lista deanimes após a pesquisa
const max_items = 9
const max_left = (max_items - 1) / 2


const Pagination = ({limit, total, offset, setOffset}) => {

    const current = offset ? (offset / limit) + 1 : 1
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - max_left, 1)

    function onPagechange(page) {
        setOffset((page - 1) * limit)
        
    }
    
    return(
        <ul className="pagination">
            <li>
            <button onClick={()=>{ onPagechange(current - 1)}} disabled={current === 1}>Anterior</button>
            </li>
            {Array.from({length: Math.min(max_items, pages)}).map((_, index)=>
                index + first)
                .map((page)=>(
                    <li key={page}>
                        <button onClick={()=> onPagechange(page)}
                        className={page === current ? '.pagination__item--active' : null}>
                            {page}
                        </button>
                    </li>))}
                    <li>
                        <button onClick={()=>{ onPagechange(current + 1)}}>Próximo</button>
                    </li>
        </ul>
    )   
}

export default Pagination