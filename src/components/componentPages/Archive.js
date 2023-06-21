import React from 'react'
import "../../styles/archive.css"
import ImageTile from '../ImageTile'
import NavBar from '../NavBar'
import UploadForm from '../UploadForm'

// import { useEffect, useState } from "react"
// import { db } from '../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'



const Archive = () => {

  return (
   
    <div id='archive-container'>
        <NavBar/>
        {/* <div id="search-bar-container">
          <input id="search-bar"input type="text"></input> 
          <button id="search-button"type="button">Search</button>
        </div> */}
       

          <UploadForm/>
        
        
    </div>
        
    
  )
}

export default Archive