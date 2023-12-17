import React from 'react'

const Card = ({cardinfo}) => {



 const {snippet,statistics} = cardinfo || {}
 const {channelTitle,thumbnails,title}=snippet || {}


  return (
    <div className='m-2 p-2 w-72'>
     <img alt='thumbnails'className='rounded-xl ' src={thumbnails.medium.url}/>
     <ul>
      <li className='font-bold text-sm'>{title}</li>
      <li className='text-sm text-gray-600'>{channelTitle}</li>
      <li className='text-sm text-gray-600'>{statistics?.viewCount}  views</li>
     </ul>
    </div>
  )
}

export default Card