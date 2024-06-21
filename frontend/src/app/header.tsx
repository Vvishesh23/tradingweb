import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
<div className='flex justify-between h-20 items-center'>
  <img className='' src='...' alt='...' />
  <ul className='flex flex-row space-x-0 align-items-center'>
    <div className='flex flex-row space-x-10 align-items-end'>
      <div className='flex flex-row text-2xl space-x-20 mr-48 pr-32 mt-4 pb-1'>
        <li><Link href='/stocks'>Stocks</Link></li>
        <li><Link href='/btc'>Bitcoin</Link></li> 
      </div>
      
      <li className='text-2xl rounded-full bg-gradient-to-r from-pink-500 to-violet-500 py-2 px-4 mt-2'><Link href='/signup'>SignUp</Link></li>
      <li className='mr-4 text-2xl rounded-full bg-gradient-to-r from-pink-500 to-violet-500 py-2 px-4  mt-2 '><Link href='/login'>Login</Link></li>
    </div>
  </ul>
</div>






  )
}

export default header