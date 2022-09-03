import React from 'react'
import {Link} from 'react-router-dom'

const types = [
  {genre:"adventure"},
  {genre:"action"},
  {genre:"comedy"},
  {genre:"crime"},
  {genre:"dementia"},
  {genre:"drama"},
  {genre:"dub"},
  {genre:"ecchi"},
  {genre:"family"},
  {genre:"fantasy"},
  {genre:"game"},
  {genre:"gourmet"},
  {genre:"harem"},
  {genre:"historical"},
  {genre:"horror"},
  {genre:"josei"},
  {genre:"kids"},
  {genre:"magic"},
  {genre:"martial-arts"},
  {genre:"military"},
  {genre:"mecha"},
  {genre:"parody"},
  {genre:"police"},
  {genre:"psychological"},
  {genre:"romance"},
  {genre:"samurai"},
  {genre:"school"},
  {genre:"sci-fi"},
  {genre:"seinen"},
  {genre:"shoujo"},
  {genre:"shoujo-ai"},
  {genre:"sports"},
  {genre:"super-power"},
  {genre:"supernatural"},
  {genre:"suspense"},
]
console.log(types)
function Genre() {
  return (
    <section className='h-full bg-black py-10'>
      <h1 className='text-center text-3xl my-10 font-semibold text-white'>Genres</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 w-10/12 md:w-7/12 gap-10 m-auto'>
        {types.map((item)=> 
        <Link to={item.genre} className='text-lg text-white font-semibold py-1 hover:border rounded duration-700 ease-in-out odd:bg-slate-900 even:bg-fuchsia-900 text-center'>{item.genre}</Link>
        )}
      </div>
    </section>
  )
}

export default Genre