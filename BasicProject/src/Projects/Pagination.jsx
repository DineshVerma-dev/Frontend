import React, { useState } from 'react'

function Pagination({ items, itemsPerPage }) {
    const [currentPages, setcurrentPages] = useState(1);
    const indexOfLastItem = currentPages * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(currentItems)
    return (
        <div className='  m-10 align-middle'>
            <ul>
                {currentItems.map((items, index) => {
                    return <li key={index}>{items}</li>
                })}
            </ul>
            {pageNumber.map((number) => {
                return <li key={number} onClick={() => setcurrentPages(number)}>{number}</li>
            })}
        </div>
    )
}

export default Pagination
