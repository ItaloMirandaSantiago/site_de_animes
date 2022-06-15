import React from "react"

const max_items = 9
const max_left = (max_items - 1) / 2


const Pagination = ({limit, total, offset}) => {

    const current = offset ? (offset / limit) + 1 : 1
 //   const pages = Math.ceil(total / limit)
    const first = Math.max(current - max_left, 1)

    return(
        <ul>
            {Array.from({length: max_items}).map((_, index)=>
                index + first
            )}
        </ul>
    )
}

export default Pagination