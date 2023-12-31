import React from 'react'
import axios from 'axios'
const Search = ({search, setInput}) => {
    const inputHandler = (e)=>{
        setInput(e.target.value)
    }
    return (
        <div className='search'>
            <input  className='input' onChange={inputHandler} type="text" />
            <button onClick={search}><i class="bi bi-search" /></button>
        </div>
    )
}

export default Search