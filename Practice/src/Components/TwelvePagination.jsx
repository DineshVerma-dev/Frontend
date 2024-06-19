import React, { useState } from 'react'

function TwelvePagination({ items, itemPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    console.log(currentItems)

    return (
        <div className='flex justify-center align-middle m-10'>
            pagination
        </div>
    )
}

export default TwelvePagination
