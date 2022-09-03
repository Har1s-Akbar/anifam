import React from 'react'
import {Link} from 'react-router-dom'
import menu from '../assets/icons8-menu.svg'
import {useState} from 'react'

function Nav() {
  const [click, setClick] = useState(false)
  
  
  return (
    <section className='grid gap-2 grid-cols-1 md:grid-cols-2 items-center'>
        <div className='flex pt-2 justify-around'>
        <a href='/' className='text-xl md:text-2xl text-white'>Ani<span className='text-gray-600'>Fam</span></a>
        <div className='flex items-center justify-center md:hidden'>
          <button onClick={() => setClick(!click)}><img src={menu} className='w-7' alt="" /></button>
        </div>
        </div>
        <div className={`my-5 w-8/12 m-auto md:flex md:flex-row ${ click ? 'flex flex-col ' : 'hidden'}`}>
          <Link to='/seasons' className='text-white my-2 mx-6  text-base md:border-0 md:text-xl border-b '>
          Seasons
          </Link>
          <Link to='/animesearch' className='text-white  my-2 mx-6 text-base md:text-xl border-b md:border-0'>
          Search
          </Link>
          <Link to='/genres' className='text-white  my-2 mx-6 text-base md:text-xl border-b md:border-0'>
          Genres
          </Link>
        </div>
    </section>
  )
}

export default Nav