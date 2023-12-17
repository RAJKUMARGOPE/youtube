import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { togglesidebar } from '../utils/appslice'
import { SEARCH_API } from '../utils/constant'
const Head = () => {
    const [search, setSearch] = useState("")
    const [sugestion, setSugestion] = useState("")
    const [showsugestion, setShowsugestion] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => {
            getSugestionSearch()
        }, 200);
        return (() => {
            clearTimeout(timer)
        })
    }, [search])

    const getSugestionSearch = async () => {
        const data = await fetch(SEARCH_API + search)
        const response = await data.json()
        setSugestion(response[1])

    }
    const dispatch = useDispatch()
    const handeltoggle = () => {
        dispatch(togglesidebar())
    }
    return (
        <div className='grid grid-flow-col p-1 shadow-lg m-1 sticky top-0'>
            <div className='flex col-span-1' >
                <img
                    onClick={() => handeltoggle()}

                    className='h-5 cursor-pointer '
                    alt='hammenu'
                    src='https://cdn-icons-png.flaticon.com/512/3388/3388823.png'
                />
                <img
                    className='h-4 mx-3'
                    alt='youtube'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'
                />
            </div>
            <div className='col-span-10 '>
                <div>
                    <input
                        className='w-1/2 border border-gray-600 rounded-l-full px-3'
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowsugestion(true)}
                        onBlur={() => setShowsugestion(false)}

                    />

                    <button className='border border-gray-500 rounded-r-full'>Search</button>
                </div>
                {
                    showsugestion && (
                        <div className='absolute bg-white w-[33rem] px-2 rounded-xl shadow-lg '>
                            <ul>
                                {
                                    sugestion && sugestion.map((sug) => <li className='py-0.5 hover:bg-gray-100'>{sug}</li>)
                                }
                            </ul>
                        </div>
                    )
                }
            </div>

            <div className='col-span-1'>
                <img
                    className='h-8'
                    alt='user'
                    src='https://cdn-icons-png.flaticon.com/512/666/666201.png'
                />
            </div>

        </div>
    )
}

export default Head