import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Genreanime() {
  const [anime, setAnime] = useState([])
  const {genre} = useParams();
  const [num, setnum] = useState(1)

  const options = {
    method: 'GET',
    url: `https://gogoanime2.p.rapidapi.com/genre/${genre}`,
    params: {page: `${num}`},
    headers: {
      'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    }
  };

useEffect(()=> {
  axios.request(options).then(function (response) {
    setAnime(response.data);
  }).catch(function (error) {
    console.error(error);
  });
},[num])
console.log(anime)                                       
if(anime.length <= 0){
  return(
    <div>
      <h1 className='text-center text-white h-screen'>Sorry, No anime in respective list is available</h1>
    </div>
  )
}
const pageHandle = (e) => {
  e.preventDefault()
  window.scrollTo({top:0, behavior: 'smooth'})
  if(num <= 0){
    setnum(1)
  }else{
    setnum(num +1)
  }
}
const pageprev = () => {
  if(num === 1){
    setnum(1)
  }else{
    setnum(num-1)
  }
}
  return (
    <section className='h-full bg-black py-5'>
      <h1 className='text-white text-xl text-center my-5'><span className='font-bold italic'>{genre}</span> Anime</h1>
      {
        num > 1 &&<div className='w-1/2 md:w-1/6 m-auto items-center flex-col md:flex-row my-2 flex'>
        <button className='text-white my-5 w-full bg-slate-700 px-3 py-1 rounded' onClick={pageprev}>Previous Page</button>
        <h1 className='text-white italic w-full mx-3 font-monofont-bold text-center'>Cuurent Page {num}</h1>
        </div> 
      }
      {anime.length > 0 && <section className='w-11/12 md:w-9/12 mt-5 py-10 gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 m-auto'>
        {anime?.map((item, index)=> 
        <Link to={`/${item.animeId}`} key={index}>
          <section className='flex ring-1 rounded hover:bg-gray-100/40 duration-300 ease-in-out group my-5'>
            <img src={item.animeImg} alt={item.animeTitle} className="w-1/3 rounded-xl ring-2 ring-zinc-50" />
            <div className='mx-5 mt-5'>
              <h1 className='text-white font-bold font-mono'>{item.animeId}</h1>
              <p className='text-base my-2 italic font-bold font-mono text-white'>Year-{item.releasedDate}</p>
              <p className='group-hover:text-white duration-300 ease-in-out mt-5 italic'>Watch Now</p>
            </div>
          </section>
        </Link>
        )}
      </section>}
      <div className='w-1/2 md:w-1/6 m-auto'>
      <button className='text-white w-full bg-slate-700 px-3 py-1 rounded' onClick={pageHandle}>Next Page</button>
      </div>
    </section>
  )
}

export default Genreanime