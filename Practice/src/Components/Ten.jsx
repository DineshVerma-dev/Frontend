import React, { useState } from 'react'

export default function Ten({items = []}) {

    const [searchTerm,setSearchTerm] = useState('');

    const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className='flex justify-center align-middle m-10'>
      <input type='text' placeholder='Search...' onChange={(e)=> setSearchTerm(e.target.value)}/>
      <ul>
        {filteredItems.map((item,index) => (
            <li key={index}>
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}