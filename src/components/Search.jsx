import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Search() {
  const [searchValue, setSearchvalue] = useState('dragon ball')
  const [out, setout] = useState([])
  const subbtn = (e) => {
    e.preventDefault()
    setSearchvalue(e.target.value)
  }

  const options = {
    method: 'GET',
    url: 'https://gogoanime2.p.rapidapi.com/search',
    params: {keyw: `${searchValue}`, page: '1'},
    headers: {
      'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
  axios.request(options).then(function (response) {
    setout(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  },[searchValue])
  return (
    <section className='h-full bg-black'>
      <div className='flex md:flex-row items-center justify-center my-5'>
        <button className='text-white font-semibold md:font-bold py-1 px-2 md:py-2 md:px-4 border rounded'>Search</button>
        <input type="text" onChange={subbtn} className='text-white bg-gray-700 w-7/12 md:w-1/2 my-2 rounded mx-2 h-7' placeholder='Dragon ba..'/>
      </div>
      {out.length >= 0 && (
        <section className='w-10/12 md:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 m-auto'>
          {out.map((item, index)=>
            <section className='flex ring-1 rounded hover:bg-gray-100/40 duration-300 ease-in-out group mt-10'>
            <Link to={`/${item.animeId}`} key={index} >
            <div className='flex'>
            <img src={item.animeImg} alt={item.animeTitle} className="w-1/3 rounded-xl ring-2 ring-zinc-50" />
            <div className='mx-5 mt-5'>
            <h1 className='text-base my-2 italic font-bold font-mono text-white'>{item.animeTitle}</h1>
            <h1 className='text-base my-2 italic font-bold font-mono text-white'>{item.status}</h1>
            <h1 className='group-hover:text-white text-base rounded mt-2 font-semibold ease-in-out duration-600'>Watch Now</h1>
            </div>
            </div>
          </Link>
          </section>
          )}
        </section>
      )}
    </section>
  )
}

export default Search