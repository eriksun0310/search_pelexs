import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Picture from '../components/Picture'
import axios from 'axios'
const Homepage = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  const [currentSearch, setCurrentSearch] = useState("")
  const auth = process.env.REACT_APP_PELEXS_AUTH

  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"

  const searchURL =`https://api.pexels.com/v1/search?query=${input}&page=1&per_page=15`

  const search = async(type, url) =>{
      if(type === 'initial' || (type === 'search' && input)){
        let result = await axios.get(url, {
          headers:{ Authorization: auth}
        })
        setData(result.data.photos)
        setCurrentSearch(input)
      }
  }

  const morePicture = async()=>{
    let newURL = ''
    setPage(page +1)
    if(currentSearch === ""){
      newURL = `https://api.pexels.com/v1/curated?page=${page +1}&per_page=15`
    }else{
      newURL =`https://api.pexels.com/v1/search?query=${currentSearch}&page=${page +1}&per_page=15`
    }
    let result = await axios.get(newURL, {
      headers:{ Authorization: auth}
    })
    setData(data.concat(result.data.photos))
    // 兩個一樣的
    // setData((prev)=>([
    //     ...prev,
    //     ...result.data.photos
    // ]))
  }

  useEffect(()=>{
      search('initial',initialURL)
  }, [])

  return (
    <div style={{minHeight:'100vh'}}>
      <Search search={()=> search('search',searchURL)} setInput={setInput}/>
      <div className='pictures'>
        {
          data?.map((d)=>{
            return(
              <Picture data={d} />
            )
          })
        }
      </div>
      <div className='morePicture'>
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  )
}

export default Homepage