import React from 'react'

const App = () => {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex-row'>
      <div className='sm:flex hidden mr-10'>
        Slidebar
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px]
      mx-auto sm:pr-5'>
        Navbar
      </div>
    </div>
  )
}

export default App;
