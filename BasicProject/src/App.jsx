import { useState } from 'react'
import Pagination from './Projects/Pagination';
import ColorPicker from './Projects/ColorPicker';
import NavigationMenu from './Projects/NavigationMenu';

import './App.css'

function App() {
  const items = ['item1', 'item2', 'item3', ' item4', 'Another item1', 'Another item2'];

  return (
    < >
      <div className='bg-gray-400 text-black m-10 text-center text-2xl'>
        Learning React
     </div>
        {/* <Pagination items={items} itemsPerPage={2} />
        <ColorPicker/> */}
        <NavigationMenu/>

    </>
  )
}

export default App
