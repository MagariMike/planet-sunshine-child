import React from 'react'
import "../../styles/archive.css"
import ImageTile from '../ImageTile'
import NavBar from '../NavBar'

const Archive = () => {
  return (
   
    <div id='archive-container'>
        <NavBar/>
        <div id="search-bar-container">
          <input id="search-bar"input type="text"></input> 
          <button id="search-button"type="button">Search</button>
        </div>
        <div id="image-tile-container">
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
          <ImageTile/>
        </div>
    </div>
        
    
  )
}

export default Archive