import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import Card from './Card'
import { Link } from 'react-router-dom'



const Videocontainer = () => {
  const [youtubevideo, setyotubevideo] = useState([])


  useEffect(() => {
    getyoutubevideo()
  }, [])

  const getyoutubevideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setyotubevideo(response?.items)
  }
  return (
    <div className='flex flex-wrap'>
      {youtubevideo.map((video) =>
        <Link  key={video.id} to={"/watch?v=" + video.id}>
          <Card
            cardinfo={video} />
        </Link>
      )}
    </div>
  )
}

export default Videocontainer;