import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Stream() {
    const {id} = useParams();
    const [stream, setStream] = useState([])
    const options = {
      method: 'GET',
      url: `https://gogoanime2.p.rapidapi.com/streamsb/watch/${id}`,
      headers: {
        'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
      }
    };
    useEffect(()=>{
    axios.request(options).then(function (response) {
      setStream(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    },[])
    console.log(stream)
    if(stream.length <= 0){
      return(<h1>Loading...</h1>)
    }
  return (
    <section className='h-screen bg-black text-white'>
      <div className='my-32 flex justify-center items-center flex-col'>
        <h1 className='text-2xl text-center'>Watch <span className='font-bold text-base text-gray-500 my-10'>{id.replace(/-/g, " ").toLocaleUpperCase()}</span> now by clicking the button below</h1>
        <a href={stream.headers.Referer} className='text-white font-bold text-base px-4 rounded py-3 border my-5'>Watch</a>
      </div>
    </section>
  )
}

export default Stream