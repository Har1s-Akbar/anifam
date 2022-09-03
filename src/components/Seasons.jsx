import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Tooltip, styled, tooltipClasses} from '@mui/material'

function Seasons() {
    const [season, setSeason] = useState('winter');
    const [date, setDate] = useState('2020');
    const [anime, setAnime] = useState([]);
    const seasonbtn = (e) => {
        e.preventDefault()
        setSeason(e.target.value)
      }
    const datebtn = (e) => {
        e.preventDefault()
        setDate(e.target.value)
      }
    const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 600,
    maxHeight:500,
    fontSize: '17px',
    backgroundColor: 'black',
    padding: '10px'
  },
});
    const options = {
        method: 'GET',
        url: `https://jikan1.p.rapidapi.com/season/${date}/${season}`,
        headers: {
          'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
          'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
        }
      };
      
      useEffect(()=>{
      axios.request(options).then(function (response) {
        setAnime(response.data.anime);
    }).catch(function (error) {
        console.error(error);
    });
      },[season, date])
  return (
    <section className='h-full text-white'>
        <section className='flex items-center justify-evenly flex-col md:flex-row mt-3 md:mt-5'>
            <div className='my-2'>
            <label htmlFor="" className='text-white font-mono rounded mx-2 font-semibold'>Season</label>
            <input onChange={seasonbtn} type="text" required className='text-white bg-transparent border rounded p-1' placeholder='Winter'/>
            </div>
            <div className='my-2'>
            <label htmlFor="" className='text-white font-mono font-semibold mx-2'>Year</label>
            <input type="number" onChange={datebtn} required className='text-white bg-transparent border rounded p-1' min="2000" max="2022" placeholder='2019'/>
            </div>
        </section>
        <section className='mt-10 md:grid md:grid-cols-2 w-11/12 m-auto gap-5'>
            <h1 className='text-xl md:text-2xl text-center col-span-2 text-white font-semibold'>The <span className='bg-zinc-600 rounded px-1'>{season}</span> anime <span className='bg-zinc-600 rounded px-1'>{date}</span></h1>
            {anime.map((item, index)=> 
            <section key={index} className='my-10 lg:grid lg:grid-cols-3 ring w-10/12 m-auto rounded hover:bg-gray-50/20'>
                <img src={item.image_url} alt={item.title} className='rounded md:w-9/12 m-auto lg:w-full '/>
                <div className='md:ml-6 ml-2 mt-3 w-full grid-cols-2'>
                    <h1 className='text-white font-semibold my-2 w-full text-base font-mono'>{item.title}</h1>
                    <p className='text-white font-bold font-mono'>Episodes- <span className='italic'>{item.episodes}</span></p>
                    <p className='text-white font-bold font-mono'>Score- <span className='italic'>{item.score}</span></p>
                    <p className='text-white font-bold font-mono'>Source- <span className='italic'>{item.source}</span></p>
                    <p className='text-white font-bold font-mono'>Genre- <span className='italic'>{item.themes.map((itm)=> itm.name)}</span></p>
                    <CustomWidthTooltip title={item.synopsis}>
                        <button className='border px-4 py-1 rounded mt-2 text-center'>Synopsis</button>
                    </CustomWidthTooltip>
                </div>
            </section>
            )}
        </section>
    </section>
  )
}

export default Seasons