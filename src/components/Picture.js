import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='picture'>
        <p>{data.photographer}</p>
        <div className='imageContainer'>
            <img src={data.src.large} alt="" />
        </div>
        <p>
            <span style={{color:'#6ce264'}}>download</span> &nbsp;
            <a target='_blank' href={data.src.large}>
                <i class="bi bi-download" style={{fontSize:'20px', color:"#6ce264"}}/>
            </a>
        </p>
    </div>
  )
}

export default Picture