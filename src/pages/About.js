import React from 'react'

const About = () => {
  return (
    <div style={{minHeight:'100vh'}}>
      <div
      style={{
        fontSize:'30px',
        fontWeight:'500',
        color:'#707070'
      }}
      >
        <i class="bi bi-lightbulb"/>關於這個網站<i class="bi bi-lightbulb"/>
        <br/>
        這是一個由React開發的搜尋圖片網站，串接整合了Pexels API，讓使用者能輕鬆尋找高品質的圖片資源。透過網站，你可以快速搜尋到符合需求的照片，無論是用於個人專案還是商業用途。直覺的使用者介面和快速的檢索功能，為你提供了一個愉快且有效率的尋找圖片的體驗。
      </div>
    </div>
  )
}

export default About