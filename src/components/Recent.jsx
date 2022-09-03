import React from 'react'
import { useGlobalContext } from '../context'
import { Card,CardContent, CardMedia, Grid} from '@mui/material';
import {Link} from 'react-router-dom'

function Recent() {
  const {episodes,setPageCount, pageCount} = useGlobalContext();
  if(episodes.length <= 0){
    return <div>
      Loading....
    </div>
  }
  const pageHandle = (e) => {
    e.preventDefault();
    setPageCount(pageCount +1)
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  const prevHandle = (e) => {
    e.preventDefault();
    if(pageCount <= 1){
      setPageCount(1)
    } else{
      setPageCount(pageCount -1)
    }
  }
  return (
    <section className='text-white'>
      <h1 className='text-white text-2xl md:text-3xl text-semibold text-center my-10'>Recent Updates</h1>
      {
        pageCount > 1 && <div className='w-9/12 md:w-1/3 flex-col md:flex-row flex items-center m-auto my-3'>
        <button onClick={prevHandle} className='text-base w-1/2 py-2 border my-3 md:my-0 rounded hover:bg-white hover:text-black duration-600 ease-in-out  font-semibold text-white'>Previous Page</button>
        <h1 className='font-bold italic text-center w-full mx-3'>Current Page {pageCount}</h1>
        </div>
      }
      <Grid container spacing={{ xs: 0, md:-50}} style={{margin:'auto'}} columns={{ xs: 1, sm: 8, md: 10 }}>
        {episodes.data.map((anim, index)=> 
          <Grid item xs={2} sm={4} md={3} key={index} style={{margin: 'auto'}}>
            <Link to={`/${anim.animeId}`}>
            <Card sx={{maxWidth: 300}} className='my-3 md:my-5 m-auto'>
          <CardMedia component="img" style={{maxHeight: 175}} alt={anim.animeId}  image={anim.animeImg}/>
          <CardContent>
            <h1 className='font-semibold italic'>
              {anim.animeTitle.slice(0,25)}
            </h1>
            <p>Episode- {anim.episodeNum}</p>
          </CardContent>
        </Card>
            </Link>
          </Grid>
        )}
        </Grid>
        <div className='w-1/2 md:w-1/6 m-auto py-10'>
        <button onClick={pageHandle} className='text-base px-4 py-2 border w-full rounded hover:bg-white hover:text-black duration-600 ease-in-out  font-semibold text-white'>Move to next</button>
        </div>
    </section>
  )
}

export default Recent