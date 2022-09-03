import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'

function Episode() {
  const {episodeId} = useParams()
  const [anime, setAnime] = useState([])
  const options = {
    method: 'GET',
    url: `https://gogoanime2.p.rapidapi.com/anime-details/${episodeId}`,
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
  },[])
  if(anime.length <= 0 ){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <section className='h-full bg-black p-4'>
      <Grid container md={8} style={{marginTop: '5rem', margin: 'auto'}}>
        <Grid item md={4}>
          <img src={anime.animeImg} className='rounded-xl ' alt={anime.animeTitle} />
        </Grid>
        <Grid item md={8} style={{margin: 'auto'}}>
          <h1 className='text-2xl text-white'>{anime.animeTitle}</h1>
          <h2 className='text-base italic my-2 font-semibold text-white'>Other Name  -{anime.otherNames}</h2>
          <p className='text-base italic text-white font-bold my-2'>Release Year - {anime.releasedDate}</p>
          <p className='text-base italic text-white font-bold my-2'>Status - {anime.status}</p>
          <p className='text-base italic text-white font-bold my-2'>Episodes - {anime.totalEpisodes}</p>
          <p className='text-base italic text-white font-bold my-2'>Type - {anime.type}</p>
          <h3 className='text-base italic text-white my-2 font-semibold'>Genres - {anime?.genres[0]} , {anime?.genres[1]} , {anime?.genres[2]}</h3>
        </Grid>
      </Grid>
        <h1 className='text-center text-white font-bold text-2xl my-10'>Episode List</h1>
      <Grid container style={{margin: 'auto'}} columns={{ xs: 4, sm: 8, md: 10 }} spacing={{ xs: 2, md:-10}}>
          {anime.episodesList.map((item, index)=> <Grid key={index} item xs={2} sm={4} md={3} style={{margin: 'auto'}}>
            <h1 className='text-white text-sm md:text-base my-5'>{item.episodeId.replace(/-/g, " ").toUpperCase()}</h1>
            <Link to={`/${episodeId}/${item.episodeId}`}  className='text-teal-400 rounded px-2 py-1 border'>Watch Now</Link>
          </Grid>)}
      </Grid>
    </section>
  )
}

export default Episode