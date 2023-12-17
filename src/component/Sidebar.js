import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {

    const menuOpen = useSelector((store) => store.app.isMenuopen)
    return !menuOpen ? null : (
        <div className='w-48 shadow-lg'>
            <h3 className='font-medium'>
                subscriptions
            </h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
            </ul>
            <h3 className='font-medium'>
                subscriptions
            </h3>
            <ul>
                <li>video</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
            </ul>
            <h3 className='font-medium'>
                subscriptions
            </h3>
            <ul>
                <li>video</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
                <li>added</li>
            </ul>
        </div>
    )
}

export default Sidebar