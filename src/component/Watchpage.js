import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='m-7'>
            <iframe width="720" 
            
            height="400" 
            src={"https://www.youtube.com/embed/" + searchParam.get("v") }
            title="YouTube video player" 
           
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowFullScreen></iframe>
        </div>
    )
}

export default Watchpage